import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { InquireRoutingModule } from './inquire-routing.module';

import { InquireComponent } from './inquire.component';
import { IntegratedQueryComponent } from './integrated-query/integrated-query.component';
import { FormsModule } from '@angular/forms';
import { SelectModule, TreeSelectModule } from '@static-resources';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    SelectModule,
    TreeSelectModule,
    InquireRoutingModule
  ],
  declarations: [InquireComponent, IntegratedQueryComponent]
})
export class InquireModule { }
