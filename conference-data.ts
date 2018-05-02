import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { UserData } from './user-data';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { HttpClient } from '@angular/common/http';



@Injectable()
export class ConferenceData {

  constructor(public http: Http, public user: UserData, private httpClient: HttpClient) { }

  /* GET JSON */
  emojis(): any {
    return this.http.get('assets/data/emoji.json')
      .map((res: any) => res.json());
  }

}
