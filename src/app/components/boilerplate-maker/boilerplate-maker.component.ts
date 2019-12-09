import { Component, ViewChild, NgZone } from '@angular/core';

import { HKVersion } from 'src/app/models/hkVersions';
import { DataReaderService } from 'src/app/data-reader.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-boilerplate-maker',
  templateUrl: './boilerplate-maker.component.html',
  styleUrls: ['./boilerplate-maker.component.scss']
})
export class BoilerplateMakerComponent {

  versions: HKVersion[];
  selectedValue: string;

  fixVersion: string = 'Hyrax 1.15.0';
  newFeatures: NewFeature[] = [new NewFeature()];

  constructor(private dataReaderService: DataReaderService, private _ngZone: NgZone) {
    this.dataReaderService.getHKVersions().subscribe(response => {
      this.versions = response.body;
    });
  }

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;

  startTemplate() {
    this.fixVersion = this.selectedValue;
    this.selectedValue = null;
  }

  addNewFeature() {
    this.newFeatures.push(new NewFeature());
  }

  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
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
