import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquireRoutingModule } from './inquire-routing.module';

import { InquireComponent } from './inquire.component';
import { IntegratedQueryComponent } from './integrated-query/integrated-query.component';

@NgModule({
  imports: [
    CommonModule,
    InquireRoutingModule
  ],
  declarations: [InquireComponent, IntegratedQueryComponent]
})
export class InquireModule { }
