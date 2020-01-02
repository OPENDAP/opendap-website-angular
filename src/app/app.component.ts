import { Component, OnInit } from '@angular/core';
import { DataReaderService } from './data-reader.service';
import { Versions } from './models/versions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'opendap-angular';
  constructor() { }  
}
