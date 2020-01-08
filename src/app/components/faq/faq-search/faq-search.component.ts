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

  keyDownFunction(event: any) {
    if (event.keyCode == 13) {
      this.search();
    }
  }

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
}
