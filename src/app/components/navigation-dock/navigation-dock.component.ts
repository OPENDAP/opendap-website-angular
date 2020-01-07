import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-dock',
  templateUrl: './navigation-dock.component.html',
  styleUrls: ['./navigation-dock.component.scss']
})
export class NavigationDockComponent {
  @Input() ids: any[];
  @Input() scrollOffset = 75;

  constructor() { }

  scrollIntoView(id: string) {
    window.scrollTo({
      top: document.getElementById(id).offsetTop - this.scrollOffset,
      behavior: "smooth"
    });
  }
}
