import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRefDirective } from './template-ref.directive';


@NgModule({
  declarations: [TemplateRefDirective],
  imports: [
    CommonModule
  ],
  exports: [TemplateRefDirective]
})
export class TemplateRefModule { }
