import { Component } from '@angular/core';
import { GLOBAL_FRAME_CONFIG } from '../config/navi-config';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ReuseStrategyService } from './reuse-strategy';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styles: [
    `.logo {
      width: 120px;
      height: 100%;
      background: rgba(255,255,255,.2);
      float: left;
      color: #fff;
      text-align: center;
    }`
  ]
})
export class AppComponent {

  isCollapsed: Boolean = false;
  navi: Array<{ title: string }> = [];
  tabs: Array<{ title: string, url: string }> = [];
  tabActiveIndex: Number = 0;

  to(item) {
    // this.router.navigate([item.url]);
    this.router.navigateByUrl(item.url);
  }

  closeTab(url: string, event: Event) {
    event.preventDefault();
    // 当前关闭的是第几个路由
    const index = this.tabs.findIndex(p => p.url === url);
    // 如果只有一个不可以关闭
    if (this.tabs.length === 1) { return; }
    this.tabs = this.tabs.filter(p => p.url !== url);
    // 删除复用
    ReuseStrategyService.deleteRouteSnapshot(url);
    // 显示上一个选中
    let menu = this.tabs[index - 1];
    if (!menu) {// 如果上一个没有下一个选中
      menu = this.tabs[index];
    }
    // 显示当前路由信息
    // this.router.navigate([menu.url]);
    this.router.navigateByUrl(menu.url);
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) { route = route.firstChild; }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe((event) => {
        // 路由data的标题
        let title = event['title'];
        let menu = { title: title, url: this.router.url };
        // this.titleService.setTitle(title);
        let exitMenuIndex = this.tabs.findIndex(info => info.title === title);
        if (exitMenuIndex !== -1) {// 如果存在不添加，当前表示选中
          this.tabActiveIndex = exitMenuIndex;
          return;
        }
        this.tabs.push(menu);
        this.tabActiveIndex = this.tabs.length - 1;
      });
  }


  ngOnInit() {
    this.navi = GLOBAL_FRAME_CONFIG.navi;
  }
}
