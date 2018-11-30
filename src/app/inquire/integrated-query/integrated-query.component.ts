import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'integrated-query',
  templateUrl: './integrated-query.component.html',
  styleUrls: ['./integrated-query.component.css']
})
export class IntegratedQueryComponent implements OnInit {
  moreQueryVisible = false;
  formData: object = {};
  constructor() { }
/**
 * @method formatDate
 * @description 格式化时间
 * @param date 时间
 */
  private formatDate(date) {
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
