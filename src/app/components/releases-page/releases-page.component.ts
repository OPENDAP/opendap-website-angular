import { Component, OnInit } from '@angular/core';

import { DataReaderService } from '../../data-reader.service';
import { VersionData } from '../../models/versionData';
import { ActivatedRoute } from '@angular/router';

import * as showdown from 'showdown';

@Component({
  selector: 'app-releases-page',
  templateUrl: './releases-page.component.html',
  styleUrls: ['./releases-page.component.scss']
})
export class ReleasesPageComponent implements OnInit {

  allVersionData: VersionData[] = [];

  download: string;
  installation: string;
  title: string;

  constructor(private route: ActivatedRoute, private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadPage(params.version);
    });
  }

  getLatestVersion() {
    this.allVersionData[this.allVersionData.length-1].fixVersion;
  }

  loadPage(version: string) {
    this.allVersionData.length = 0;
    
    this.dataReaderService.getVersionPageData(version).subscribe(data => {
      for (const thisData of data.versions) {
        for(const thisFeature of thisData.newFeatures) {
          thisFeature.body = new showdown.Converter().makeHtml(thisFeature.body);
        }

        this.allVersionData.push(thisData);
      }

      this.title = `Software Downloads for Hyrax ${this.allVersionData[this.allVersionData.length-1].fixVersion}`;
      this.allVersionData = this.allVersionData.reverse();
      this.download = data.download;
      this.installation = data.installation;
    });
  }
}
