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
  /**
   * @description 查询表格数据
   * @param gmParams 请求参数
   * @param options 请求设置
   */
  queryData(gmParams?: object, options?: GmOptions): Observable<any> {
    return this.httpClientService.getRequest(RESTURL.integratedQuery, gmParams, options);
  }
  /**
   * @description 查询详情中表格数据
   * @param gmParams 请求参数
   * @param options 请求设置
   */
  getComprehensiveInfo(gmParams?: object, options?: GmOptions): Observable<any> {
    return this.httpClientService.getRequest(RESTURL.getComprehensiveInfo, gmParams, options);
  }
}
