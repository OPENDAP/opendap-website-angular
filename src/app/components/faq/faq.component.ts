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
  clientIssues: [];
  serverIssues: [];
  developers: [];

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.dataReaderService.getFAQData().subscribe(data => {
      this.data = data;
      
      this.general = data[0];
      this.clientIssues = data[1];
      this.serverIssues = data[2];
      this.developers = data[3];
    });
  }

  parseMarkdown(md: string) {
    return new showdown.Converter().makeHtml(md);
  }
}