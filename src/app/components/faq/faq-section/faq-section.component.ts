import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FaqSectionComponent {
  @Input() faqSection: any;
  @Input() sectionTitle: string;
}
