import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) {
  }

  getResult() {
    return this.http.post<{ result: number }>(
      'https://us-central1-exquisite-corpse-2.cloudfunctions.net/square',
      {number: 6})
      .map(res => ({result: res.result / 2}))
  }
}
