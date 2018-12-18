import { Component } from '@angular/core';
import { GLOBAL_FRAME_CONFIG } from '../config/navi-config';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html'
})
export class AppComponent {
  config;
  ngOnInit() {
    this.config = GLOBAL_FRAME_CONFIG;
  }
}
