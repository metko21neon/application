import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FocusDirective } from './focus.directive';

const DIRECTIVES = [
  FocusDirective
];

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  imports: [CommonModule]
})
export class DirectivesModule { }
