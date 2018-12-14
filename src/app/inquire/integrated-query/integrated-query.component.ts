import { Component, OnInit, forwardRef, ViewChild } from '@angular/core';
import { format } from 'date-fns';
import { IntegratedQueryService } from './integrated-query.service';
import { NzMessageService } from 'ng-zorro-antd';

interface Param {
  zrzydyh?: string;
  zrzymc?: string;
  zl?: string;
  ywh?: string;
  bdclx?: string;
  djdl?: string;
  djsjStart?: string;
  djsjEnd?: string;
  syqr?: string;
  areaStart?: string;
  areaEnd?: string;
  zt?: string;
  current?: number;
  size?: number;
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
  detailsVisible = false;

  dataSet = [];
  tableScroll: TableScroll;
  formData: Param = { current: 1, size: 10 };
  nzTotal: number;
  loading = true;

  detailsDataSet = [];
  detailsData;
  constructor(
    private integratedQueryService: IntegratedQueryService,
    private message: NzMessageService
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
  /**
   * @description 查询数据
   * @method queryData
   * @param {boolean} reset 是否重置查询参数
   */
  queryData(reset: boolean = false): void {
    console.log(this.formData);
    if (reset) {
      this.formData = { current: 1, size: 10 };
    }
    this.loading = true;
    this.integratedQueryService.queryData(this.formData).subscribe(
      data => {
        this.dataSet = data.data.records;
        this.loading = false;
        this.nzTotal = data.data.total;
      },
      error => this.message.create('error', `获取数据失败,原因:${error.message}`)
    );
  }
  /**
   * @description 点击查询的方法
   */
  getData(): void {
    this.queryData();
  }
  /**
   * @description 点击清除的方法
   */
  remove(): void {
    this.formData = {};
    this.queryData(true);
  }
  /**
   * @description 查看详情
   * @method checkItem
   * @param data 该列数据
   */
  checkItem(data: object) {
    console.log(data);
    this.detailsDataSet = [];
    this.detailsData = data;
    this.integratedQueryService.getComprehensiveInfo({ id: data['id'] }).subscribe(
      response => {
        this.detailsDataSet = response.data.zkList;
      },
      error => this.message.create('error', `综合查询单元列表查询失败`)
    );
    this.detailsVisible = true;
  }

  ngOnInit() {
    this.queryData();
    // 设置表格高度
    let tableClientHeight = this.tableBox['nativeElement'].clientHeight - 100;
    this.tableScroll = {
      x: `1800px`,
      y: `${tableClientHeight}px`
    };
  }

}
