import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Versions } from './models/versions';

import { isDevMode } from '@angular/core';
import { HKVersionResponse } from './models/hkVersions';


@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  production = false;

  serverURL: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    if (!isDevMode()) {
      this.serverURL = window.location.origin;
    } else {
      this.serverURL = 'http://localhost:3001';
    }
  }

  getAboutUsPage(): Observable<any> {
    return this.http.get<any>(`${this.serverURL}/api/content/markdown/about-us`);
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

  getHKVersions(): Observable<HKVersionResponse> {
    return this.http.get<HKVersionResponse>('http://localhost:3001/api/jira/HK/versions');
  }
}
