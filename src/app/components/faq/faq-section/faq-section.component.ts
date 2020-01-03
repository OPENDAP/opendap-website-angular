import { Component, OnInit, Input } from '@angular/core';

import * as showdown from 'showdown';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent {
  @Input() faqSection: any;
  @Input() sectionTitle: string;

  parseMarkdown(md: string) {
    return new showdown.Converter().makeHtml(md);
  }
}
