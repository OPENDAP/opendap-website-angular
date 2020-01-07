import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-dock',
  templateUrl: './navigation-dock.component.html',
  styleUrls: ['./navigation-dock.component.scss']
})
export class NavigationDockComponent implements OnInit {
  @Input() ids: any[];
  @Input() scrollOffset = 75;

  activeLink: any;

  constructor() { }

  ngOnInit(): void {
    this.activeLink = this.ids[0];

    window.addEventListener('scroll', () => {
      for (let i = 0; i < this.ids.length; i++) {
        if (document.getElementById(this.ids[i].id) !== null) {
          if (this.ids[i + 1] === undefined) {
            this.activeLink = this.ids[i];
            break;
          }

          let a = window.scrollY + this.scrollOffset + 15 > document.getElementById(this.ids[i].id).offsetTop;
          let b = window.scrollY + this.scrollOffset + 15 < document.getElementById(this.ids[i + 1].id).offsetTop;

          if (a && b) {
            this.activeLink = this.ids[i];
            break;
          }
        }
      }
    });
  }

  scrollIntoView(link: any, id: string) {
    this.activeLink = link;

    window.scrollTo({
      top: document.getElementById(id).offsetTop - this.scrollOffset,
      behavior: "smooth"
    });
  }
}
