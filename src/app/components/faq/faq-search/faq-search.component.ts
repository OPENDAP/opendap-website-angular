import { Component, OnInit, Input } from '@angular/core';

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

      for (let thisSection of this.data) {
        for (let thisArticle of thisSection) {
          out:
          for (let tag of thisArticle.tags) {
            if (this.value.toLowerCase().includes(tag)) {
              this.results.add(thisArticle);
              break out;
            }
          }
        }
      }
    }
  }

  removePunctuation(thisString: string): string {
    return thisString.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
  }
}
