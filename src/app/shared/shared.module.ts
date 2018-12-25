import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// #region third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';

const THIRDMODULES = [
  NgZorroAntdModule,
];
// #endregion

// #region your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// #endregion

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // third libs
    ...THIRDMODULES,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // third libs
    ...THIRDMODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ]
})
export class SharedModule { }
