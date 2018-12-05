import { Component, OnInit, forwardRef } from '@angular/core';
import { format } from 'date-fns';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

interface Param {
  ywh?: string;
  bdcdyh?: string;
  zl?: string;
  bdcqzh?: string;
  bdclx?: string;
  djdl?: string;
  djksrq?: string;
  djjsrq?: string;
  qlr?: string;
  qlrzjh: string;
  ywr?: string;
  ywrzjh?: string;
  zt?: string;
}

@Component({
  selector: 'integrated-query',
  templateUrl: './integrated-query.component.html',
  styleUrls: ['./integrated-query.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IntegratedQueryComponent),
      multi: true
    }]
})
export class IntegratedQueryComponent implements OnInit {
  moreQueryVisible = false;
  formData: Param;
  constructor() { }
/**
 * @method formatDate
 * @description 格式化时间
 * @param date 时间
 */
  public formatDate(date) {
    return format(date, 'YYYY-MM-DD');
  }
  change(val) {
    console.log(val);
  }
  getData() {
    console.log(this.formData);
  }
  ngOnInit() {
  }

}
