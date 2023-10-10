import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialMenuComponent } from './initial-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InitialMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [InitialMenuComponent]
})
export class InitialMenuModule { }
