import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Versions } from './models/versions';

import { isDevMode } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  production = false;

  serverURL: string;

  constructor(private http: HttpClient) {
    this.serverURL = '/.netlify/functions';
  }

  getAboutUsPage() {
    return this.http.get('../assets/json/about-us.md');
  }

  getReleaseData(): Observable<Versions> {
    return this.http.get<Versions>(`${this.serverURL}/api/versions`);
  }

  getVersionPageData(version: string): Observable<any> {
    return this.http.get<Versions>(`${this.serverURL}/api/versions/${version}`);
  }

  getLatestVersion(): Observable<any> {
    return this.http.get<any>(`${this.serverURL}/api/versions/latest`);
  }
}
