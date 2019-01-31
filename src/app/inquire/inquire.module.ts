import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { SelectModule, TreeSelectModule } from '@static-resources/api';
import { TransformDicPipe } from '@static-resources/modules';
import { InquireRoutingModule } from './inquire-routing.module';
import { EditorModule } from 'my-app/node_modules/@tinymce/tinymce-angular';

import { InquireComponent } from './inquire.component';
import { IntegratedQueryComponent } from './integrated-query/integrated-query.component';
import { FormTinymceSimpleComponent } from './form-tinymce-simple/form-tinymce-simple.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    SelectModule,
    TreeSelectModule,
    InquireRoutingModule,
    EditorModule
  ],
  declarations: [InquireComponent, IntegratedQueryComponent, TransformDicPipe, FormTinymceSimpleComponent]
})
export class InquireModule { }
