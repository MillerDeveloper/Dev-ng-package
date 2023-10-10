import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleHeaderComponent } from './module-header.component';
import { TemplateRefModule } from '../../directives/templateRef/template-ref.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ModuleHeaderComponent],
  imports: [
    CommonModule,
    TemplateRefModule,
    ButtonModule
  ],
  exports: [ModuleHeaderComponent, TemplateRefModule]
})
export class ModuleHeader { }
