import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataReaderService } from 'src/app/data-reader.service';

import * as showdown from 'showdown';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SupportComponent implements OnInit {

  data: any;

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.dataReaderService.getSupportData().subscribe(data => {
      this.data = data;
    });
  }

  parseMarkdown(md: string) {
    return new showdown.Converter().makeHtml(md);
  }
}
