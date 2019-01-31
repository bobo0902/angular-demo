import { NgModule } from '@angular/core';

const THIRDMODULES = [
];

const COMPONENTS = [];
const DIRECTIVES = [];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    // third libs
    ...THIRDMODULES,
  ],
  exports: [
    // third libs
    ...THIRDMODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ]
})
export class SharedModule { }
