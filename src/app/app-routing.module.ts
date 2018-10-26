// angualr相关引用
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// component相关引用
import { HomeComponent } from './home/home.component';
import { GLOBAL_FRAME_CONFIG } from '../config/navi-config';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

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
  {
    path: 'file-management', loadChildren: './file-management/file-management.module#FileManagementModule'
  },
  {
    path: 'inquire', loadChildren: './inquire/inquire.module#InquireModule'
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
