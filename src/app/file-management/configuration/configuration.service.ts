import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientService, GmOptions } from '@static-resources';

@Injectable()
export class ConfigurationService {
  constructor(
    private http: HttpClient
  ) { }
  public httpClientService = new HttpClientService(this.http);
  getData(gmParams?: object, options?: GmOptions): Observable<any> {
    return this.httpClientService
      .getRequest('http://192.168.5.35:8048/zrzy-register-server/api/queryRegistrationInfo/getComprehensivePageList', gmParams, options);
  }

  getMultipleData(gmParams?: object): Observable<any> {
    return this.httpClientService
      .multipleGetRequest('http://192.168.5.35:8068/em-server/statistics/statisticsBDCDJSL', 4, 'qxdmLst', gmParams);
  }
}
