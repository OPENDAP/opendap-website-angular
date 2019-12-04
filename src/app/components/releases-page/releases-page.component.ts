import { Component, OnInit } from '@angular/core';

import { DataReaderService } from '../../data-reader.service';
import { VersionData } from '../../models/versionData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-releases-page',
  templateUrl: './releases-page.component.html',
  styleUrls: ['./releases-page.component.scss']
})
export class ReleasesPageComponent implements OnInit {

  allVersionData: VersionData[] = [];

  download: String;
  installation: String;

  constructor(private route: ActivatedRoute, private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadPage(params.version);
    });
  }

  loadPage(version: String) {
    this.dataReaderService.getVersionPageData(version).subscribe(data => {
      for (let thisData of data.versions) {
        this.allVersionData.push(thisData);
      }

      this.download = data.download;
      this.installation = data.installation;
    });
  }
}
