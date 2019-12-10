import { Component, ViewChild, NgZone, OnInit } from '@angular/core';

import { HKVersion } from 'src/app/models/hkVersions';
import { DataReaderService } from 'src/app/data-reader.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

import { take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boilerplate-editor',
  templateUrl: './boilerplate-editor.component.html',
  styleUrls: ['./boilerplate-editor.component.scss']
})
export class BoilerplateEditorComponent implements OnInit {

  myControl = new FormControl();

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;

  constructor(private route: ActivatedRoute, private dataReaderService: DataReaderService, private _ngZone: NgZone) { }

  versions: HKVersion[];
  selectedValue: string;
  fixVersionTitle: string;
  fixVersion: string;
  newFeatures: NewFeature[] = [new NewFeature()];
  issues: BugFix[];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fixVersionTitle = params.fixVersion;

      this.dataReaderService.getBugFixData(`'${this.fixVersionTitle}'`).subscribe(data => {
        console.log(data.body.issues);

        if (data.body.issues.length > 0) {
          this.fixVersionTitle = data.body.issues[0].fields.fixVersions[0].name;
        }

        this.fixVersion = this.selectedValue;
        this.issues = [];

        for (let thisIssue of data.body.issues) {
          this.issues.push(new BugFix(thisIssue.key, thisIssue.fields.summary));
        }
      });
    });
  }

  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  addNewFeature() {
    this.newFeatures.push(new NewFeature());
  }

  deleteNewFeature(newFeature: NewFeature) {
    this.newFeatures = this.arrayRemove(this.newFeatures, newFeature);
  }

  addNewBugFix() {
    this.issues.push(new BugFix());
  }

  deleteBugFix(bugFix: BugFix) {
    this.issues = this.arrayRemove(this.issues, bugFix);
  }

  arrayRemove(arr: any[], value: any) {
    return arr.filter(ele => {
      return ele != value;
    });
  }

  updateDescription(bugFix: BugFix) {
    this.dataReaderService.getIssue(bugFix.key).subscribe(data => {
      bugFix.summary = data.body.fields.summary;
    });
  }

  /**
     * Saves the page's data to Chrome's default download location.
     * @param {JSON} data JSON data.
     * @param {String} fileName the name of the file to be added.
     */
  saveData() {
    let a = document.createElement("a"),
      json = JSON.stringify({
        fixVersion: this.fixVersionTitle,
        newFeatures: this.newFeatures,
        bugFixes: this.issues
      }),
      blob = new Blob([json], { type: "octet/stream" }),
      url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = this.fixVersionTitle.replace(' ', '_') + ".json";
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);

    document.body.removeChild(a);
  };
}

export class BugFix {
  key: string;
  summary: string;

  constructor(key = "", summary = "") {
    this.key = key;
    this.summary = summary;
  }
}

export class NewFeature {
  title: string;
  body: string;

  constructor(title = "", body = "") {
    this.title = title;
    this.body = body;
  }
}
