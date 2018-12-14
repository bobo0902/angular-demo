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
    private configurationService: ConfigurationService
  ) { }

  ngOnInit() {
    this.configurationService.getData({'aa': 1}).subscribe(
      data => console.log(data)
    );
  }
  getData() {
    this.configurationService.getData({ 'bb': 1 }).subscribe(
      data => console.log(data) ,
      error => console.log(`获取数据失败,原因:${error.message}`)
    );
    console.log(GM.get('userInfo'));
    console.log(GM.get('SysDicOper'));
  }
}
