import { Component, OnInit } from '@angular/core';
import { DataReaderService } from 'src/app/data-reader.service';

import * as showdown from 'showdown';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  data: [];

  general: [];
  serverIssues: [];
  developers: [];
  dods: [];
  matlab: [];
  netCDF: [];

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.dataReaderService.getFAQData().subscribe(data => {
      this.data = data;
      
      this.general = data[0];
      this.serverIssues = data[2];
      this.developers = data[3];
      this.dods = data[4];
      this.matlab = data[5];
      this.netCDF = data[6];
    });
  }

  parseMarkdown(md: string) {
    return new showdown.Converter().makeHtml(md);
  }
}