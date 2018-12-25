import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InquireComponent } from './inquire.component';
import { IntegratedQueryComponent } from './integrated-query/integrated-query.component';
import { FormTinymceSimpleComponent } from './form-tinymce-simple/form-tinymce-simple.component';


const InquireRoutes: Routes = [
  {
    path: '',
    component: InquireComponent,
    children: [
      { path: 'integrated-query', component: IntegratedQueryComponent, data: { title: '综合查询', shouldDetach: true } },
      { path: 'form-tinymce', component: FormTinymceSimpleComponent, data: { title: '富文本编辑器', shouldDetach: true } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(InquireRoutes)],
  exports: [RouterModule]
})
export class InquireRoutingModule { }
