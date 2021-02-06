import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidate} from '../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getInitialData(): Observable<{candidates: Candidate[]}> {
    return this.httpClient.get<{candidates: Candidate[]}>('assets/initial-data.json');
  }
}
