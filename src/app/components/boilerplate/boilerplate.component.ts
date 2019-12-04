import { Component, Input, OnInit } from '@angular/core';
import { DataReaderService } from '../../data-reader.service';

import * as showdown from 'showdown';

@Component({
  selector: 'app-boilerplate',
  templateUrl: './boilerplate.component.html',
  styleUrls: ['./boilerplate.component.scss']
})
export class BoilerplateComponent implements OnInit {
  @Input() download: string;
  @Input() installation: string;

  constructor(private dataReaderService: DataReaderService) { }

  panelOpenState: Boolean = false;

  installationDisplay: String;

  async ngOnInit() {
    this.installationDisplay = new showdown.Converter().makeHtml(this.installation);
  }
}
