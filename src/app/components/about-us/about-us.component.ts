import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataReaderService } from 'src/app/data-reader.service';

import * as showdown from 'showdown';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent implements OnInit {

  constructor(private dataReaderService: DataReaderService) { }

  data: any;
  links: string[];
  ids: any[];

  async ngOnInit() {

    this.dataReaderService.getAboutUsPage().subscribe(data => {
      this.data = data;
      this.ids = [];

      for(let thisData of data) {
        this.ids.push({
          id: thisData.id,
          title: thisData.title
        });
      }
    });
  }
}
