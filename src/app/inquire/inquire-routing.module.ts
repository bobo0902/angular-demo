import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InquireComponent } from './inquire.component';
import { IntegratedQueryComponent } from './integrated-query/integrated-query.component';


const InquireRoutes: Routes = [
  {
    path: '',
    component: InquireComponent,
    children: [
      { path: 'integrated-query', component: IntegratedQueryComponent, data: { title: '综合查询', shouldDetach: true } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(InquireRoutes)],
  exports: [RouterModule]
})
export class InquireRoutingModule { }
