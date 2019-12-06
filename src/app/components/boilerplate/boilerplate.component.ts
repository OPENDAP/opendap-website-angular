import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DataReaderService } from '../../data-reader.service';

import * as showdown from 'showdown';

@Component({
  selector: 'app-boilerplate',
  templateUrl: './boilerplate.component.html',
  styleUrls: ['./boilerplate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BoilerplateComponent implements OnInit {
  @Input() download: any;
  @Input() installation: string;
  @Input() title: string;

  constructor() { }

  panelOpenState = false;

  installationDisplay: string;

  downloadDisplay: Download[];

  version: string;

  async ngOnInit() {
    this.version = this.download.version;

    for (const thisMarkdown of this.download) {
      if (this.downloadDisplay === undefined) {
        this.downloadDisplay = [];
      }

      this.downloadDisplay.push(new Download(thisMarkdown));
    }

    this.installationDisplay = new showdown.Converter().makeHtml(this.installation);
  }
}

class Download {
  image: string;
  html: string;
  title: string;

  constructor(markdown) {
    this.html = new showdown.Converter().makeHtml(markdown);

    const ghostDiv = document.createElement('div');
    ghostDiv.innerHTML = this.html;

    this.title = ghostDiv.getElementsByTagName('h2')[0].textContent;

    if (this.title.includes('Binaries')) {
      this.image = '../../../assets/images/docker-logo.png';
    } else if (this.title.includes('OLFS')) {
      this.image = '../../../assets/images/java-logo.png';
    } else if (this.title.includes('ncWMS2')) {
      this.image = '../../../assets/images/java-logo.png';
    } else if (this.title.includes('BES')) {
      this.image = '../../../assets/images/linux-logo.png';
    } else if (this.title.includes('Snapshot')) {
      this.image = '../../../assets/images/snapshot-logo.png';
    } else if (this.title.includes('Source')) {
      this.image = '../../../assets/images/source-logo.png';
    }

    ghostDiv.removeChild(ghostDiv.getElementsByTagName('h2')[0]);

    const links: HTMLCollectionOf<HTMLAnchorElement> = ghostDiv.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
      links[i].target = '_blank';
    }

    this.html = ghostDiv.innerHTML;
  }
}
