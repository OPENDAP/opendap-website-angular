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
}