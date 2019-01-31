import { NgModule } from '@angular/core';

import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// 路由快照
import { RouteReuseStrategy } from '@angular/router';


// 自定义通用模块引入
import { ReuseStrategyService, httpInterceptorProviders } from '@static-resources/api';
import { GmModule } from '@static-resources/modules';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    GmModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: RouteReuseStrategy, useClass: ReuseStrategyService },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
