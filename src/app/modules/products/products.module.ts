import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ButtonModule } from 'primeng/button'
import { ModuleHeader } from 'projects/core/src/shared/components/module-header/module-header.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ModuleHeader,
    DropdownModule,
    InputTextModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
