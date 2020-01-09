import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { DataReaderService } from 'src/app/data-reader.service';

@Component({
  selector: 'mat-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: [
    './markdown.component.scss',
    '../markdown-style.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class MarkdownComponent implements OnInit {
  @Input() pageID: string;

  data: any;

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.dataReaderService.getPage(this.pageID).subscribe(data => {
      this.data = data;
    });
  }
}
