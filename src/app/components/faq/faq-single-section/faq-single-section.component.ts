import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataReaderService } from 'src/app/data-reader.service';

@Component({
  selector: 'app-faq-single-section',
  templateUrl: './faq-single-section.component.html',
  styleUrls: ['../faq-section/faq-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FaqSingleSectionComponent implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private dataReaderService: DataReaderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataReaderService.getFAQPage(params.article).subscribe(data => {
        this.data = data;
      });
    });
  }
}
