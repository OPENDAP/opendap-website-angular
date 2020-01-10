import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DataReaderService } from 'src/app/data-reader.service';

@Component({
  selector: 'mat-markdown-module',
  templateUrl: './mat-markdown-module.component.html',
  styleUrls: [
    './mat-markdown-module.component.scss',
    '../markdown-style.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class MatMarkdownModule implements OnInit {
  @Input() pageID: string;
  @Input() showNav = true;
  @Input() showTitle = true;

  data: any;
  headings: any[];

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.dataReaderService.getPage(this.pageID).subscribe(data => {
      this.data = data;

      this.headings = [];

      for (let thisData of this.data.sections) {
        this.headings.push({
          title: thisData.title,
          id: thisData.id
        });
      }
    }, error => {

    }, () => {

    });
  }
}
