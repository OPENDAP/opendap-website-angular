import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Versions } from './models/versions';


@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  serverURL = 'http://localhost:3001'; // window.location.origin

  constructor(private http: HttpClient) { }

  getAboutUsPage() {
    return this.http.get('../assets/json/about-us.md');
  }

  getReleaseData(): Observable<Versions> {
    return this.http.get<Versions>(`${this.serverURL}/api/versions`);
  }

  getVersionPageData(version: string): Observable<any> {
    return this.http.get<Versions>(`${this.serverURL}/api/versions/${version}`);
  }
}
