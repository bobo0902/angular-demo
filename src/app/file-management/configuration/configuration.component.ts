import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { GM } from '@static-resources';

@Component({
  selector: 'configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
  providers: [ConfigurationService]
})

export class ConfigurationComponent implements OnInit {

  constructor(
    private configurationService: ConfigurationService,
  ) { }

  formData = {
    djsjStart: `2018-01-01`,
    djsjEnd: `2018-12-28`,
    // tslint:disable-next-line:max-line-length
    qxdmLst: [`620100`, `620199`, `620200`, `620300`, `620400`, `620500`, `620600`, `620700`, `620800`, `620900`, `621000`, `621100`, `621200`, `622900`, `623000`]
  };
  ngOnInit() {
    this.configurationService.getData({ 'aa': 1 }).subscribe(
      data => console.log(data)
    );
  }


  getData() {
    this.configurationService.getData({ 'bb': 1 }).subscribe(
      data => console.log(data),
      error => console.log(`获取数据失败,原因:${error.message}`)
    );
    console.log(GM.get('userInfo'));
    console.log(GM.get('SysDicOper'));

    this.configurationService.getMultipleData(this.formData).subscribe(
      data => console.log(this.configurationService.httpClientService.processResult(data)),
      error => console.log(`获取数据失败,原因:${error.message}`)
    );
  }
}
