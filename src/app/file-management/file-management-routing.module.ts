import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileManagementComponent } from './file-management.component';
import { ManagementComponent } from './management/management.component';
import { ConfigurationComponent } from './configuration/configuration.component';

const FileManagementRoutes: Routes = [
  {
    path: '',
    component: FileManagementComponent,
    children: [
      { path: 'management', component: ManagementComponent, data: { title: '档案管理', shouldDetach: true } },
      { path: 'configuration', component: ConfigurationComponent, data: { title: '档案配置', shouldDetach: true } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(FileManagementRoutes)],
  exports: [RouterModule]
})
export class FileManagementRoutingModule { }
