import { Component, ViewChild, NgZone } from '@angular/core';

import { HKVersion } from 'src/app/models/hkVersions';
import { DataReaderService } from 'src/app/data-reader.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

import { take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-boilerplate-maker',
  templateUrl: './boilerplate-maker.component.html',
  styleUrls: ['./boilerplate-maker.component.scss']
})
export class BoilerplateMakerComponent {

  myControl = new FormControl();
  versions: HKVersion[];
  selectedValue: string;

  constructor(private dataReaderService: DataReaderService, private _ngZone: NgZone) {
    this.dataReaderService.getHKVersions().subscribe(response => {
      this.versions = response.body;
    });
  }

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;

  fixVersionTitle: string;
  fixVersion: string;
  newFeatures: NewFeature[] = [new NewFeature()];
  issues: BugFix[];

  startTemplate() {
    console.log(this.myControl);
    this.dataReaderService.getBugFixData(this.selectedValue).subscribe(data => {
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
