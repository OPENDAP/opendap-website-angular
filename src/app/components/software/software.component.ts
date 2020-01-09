import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataReaderService } from 'src/app/data-reader.service';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: [
    './software.component.scss',
    '../markdown-style.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class SoftwareComponent implements OnInit {

  data: any;

  constructor(private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.dataReaderService.getSoftwarePage().subscribe(data => {
      this.data = data;
    });
  }
}
