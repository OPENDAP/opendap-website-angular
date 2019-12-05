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

  download: string;
  installation: string;
  title: string;

  constructor(private route: ActivatedRoute, private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadPage(params.version);
    });
  }

  loadPage(version: string) {
    this.dataReaderService.getVersionPageData(version).subscribe(data => {
      for (const thisData of data.versions) {
        this.allVersionData.push(thisData);
      }

      this.download = data.download;
      this.installation = data.installation;
    });
  }
}
