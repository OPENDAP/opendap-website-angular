import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent {
  @Input() faqSection: any;
  @Input() sectionTitle: string;
}
