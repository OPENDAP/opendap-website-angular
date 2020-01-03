import { Component, OnInit, Input } from '@angular/core';

import * as showdown from 'showdown';

@Component({
  selector: 'app-faq-search',
  templateUrl: './faq-search.component.html',
  styleUrls: ['./faq-search.component.scss']
})
export class FaqSearchComponent {
  @Input() data: any;

  value: string;
  results = new Set();

  search() {
    if (this.value.length > 0) {
      this.results.clear();

      let terms = this.removePunctuation(this.value).split(' ');

      for (let thisTerm of terms) {
        for (let thisFAQSection of this.data) {
          for (let thisQuestion of thisFAQSection) {
            if (thisQuestion.title.toLowerCase().includes(thisTerm)) {
              this.results.add(thisQuestion);
            }
          }
        }
      }
    }
  }

  removePunctuation(thisString: string): string {
    return thisString.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
  }

  parseMarkdown(md: string) {
    return new showdown.Converter().makeHtml(md);
  }
}
