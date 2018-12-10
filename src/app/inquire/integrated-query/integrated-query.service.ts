import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientService, GmOptions, RESTURL } from '@static-resources';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegratedQueryService {

  constructor(
    private http: HttpClient
  ) { }

  private httpClientService = new HttpClientService(this.http);
  queryData(gmParams?: object, options?: GmOptions): Observable<any> {
    return this.httpClientService
      .getRequest(RESTURL.integratedQuery, gmParams, options);
  }
}
