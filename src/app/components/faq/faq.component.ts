import { Component, OnInit } from '@angular/core';
import { DataReaderService } from 'src/app/data-reader.service';

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
    });
  }
}