// angualr相关引用
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// component相关引用
import { HomeComponent } from './home/home.component';
import { GLOBAL_FRAME_CONFIG } from '../config/navi-config';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
// import { ManagementComponent } from './file-management/management/management.component';
// import { ConfigurationComponent } from './file-management/configuration/configuration.component';

// interface RouterConfig {
//   path: string;
//   component?: any;
//   loadChildren?: string;
// }

// let routerLists: RouterConfig[];
// for (const iterator of GLOBAL_FRAME_CONFIG) {
//   console.log(iterator);
// }

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: '首页', shouldDetach: false } },
  // { path: 'file-management/management', component: ManagementComponent, data: { title: '档案管理', shouldDetach: true } },
  // { path: 'file-management/configuration', component: ConfigurationComponent, data: { title: '档案配置', shouldDetach: true } },
  {
    path: 'file-management', loadChildren: './file-management/file-management.module#FileManagementModule'
    // data: { title: '档案管理', shouldDetach: true }
    // data: { title: '档案管理', shouldDetach: true, preload: true }
  },
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      preloadingStrategy: SelectivePreloadingStrategy
    })
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
