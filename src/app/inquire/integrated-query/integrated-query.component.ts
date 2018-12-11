import { Component, OnInit, forwardRef, ViewChild } from '@angular/core';
import { format } from 'date-fns';
import { IntegratedQueryService } from './integrated-query.service';

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
  qlrzjh?: string;
  ywr?: string;
  ywrzjh?: string;
  zt?: string;
  current?: number;
}

/**
 * @interface 表格宽高
 */
interface TableScroll {
  x?: string;
  y?: string;
}
@Component({
  selector: 'integrated-query',
  templateUrl: './integrated-query.component.html',
  styleUrls: ['./integrated-query.component.less'],
  providers: [IntegratedQueryService]
})
export class IntegratedQueryComponent implements OnInit {
  // 初始化
  @ViewChild('tableBox') tableBox: Element;
  moreQueryVisible = false;

  dataSet = [];
  tableScroll: TableScroll;
  formData: Param = { current: 1};
  nzTotal: number;
  pageSize = 10;
  loading = true;
  constructor(
    private integratedQueryService: IntegratedQueryService
  ) { }
  /**
   * @method formatDate
   * @description 格式化时间
   * @param date 时间
   */
  public formatDate(date) {
    return format(date, 'YYYY-MM-DD');
  }
  change(val): void {
    console.log(val);
  }
  private queryData(): void {
    console.log(this.formData);
    this.loading = true;
    this.integratedQueryService.queryData(this.formData).subscribe(
      data => {
        console.log(data);
        this.dataSet = data.data.records;
        this.loading = false;
        this.nzTotal = data.data.total;
      }

    );
  }
  getData(): void {
    this.queryData();
  }


  ngOnInit() {
    this.queryData();
    // 设置表格高度
    let tableClientHeight = this.tableBox['nativeElement'].clientHeight;
    this.tableScroll = {
      x: `1800px`,
      y: `${tableClientHeight}px`
    };
  }

}
