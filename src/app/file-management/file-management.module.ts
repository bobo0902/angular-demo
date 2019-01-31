import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ManagementComponent } from './management/management.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FileManagementComponent } from './file-management.component';

import { FileManagementRoutingModule } from './file-management-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SelectModule } from '@static-resources/api';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    NgZorroAntdModule,
    SelectModule,
    FileManagementRoutingModule
  ],
  declarations: [
    FileManagementComponent,
    ManagementComponent,
    ConfigurationComponent
  ],
})
export class FileManagementModule { }
