import { Component, OnInit } from '@angular/core';
import { DataReaderService } from '../../data-reader.service';

@Component({
  selector: 'app-hyrax',
  templateUrl: './hyrax.component.html',
  styleUrls: ['./hyrax.component.scss']
})
export class HyraxComponent implements OnInit {

  versions;

  download;

  installation;

  title = 'Download the Latest Version of Hyrax';

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.dataReaderService.getReleaseData().subscribe(data => {
      this.versions = data.versions;
    });

    this.dataReaderService.getLatestVersion().subscribe(data => {
      this.download = data.download;
      this.installation = data.installation;
    });
  }
}
