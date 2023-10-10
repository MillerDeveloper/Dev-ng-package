import { CoreModule } from './../../projects/core/src/core.module'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialMenuModule } from 'projects/core/src/public-api';
import { RouterModule } from '@angular/router';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        InitialMenuModule,
        RouterModule,
        ProductsModule,
        CoreModule.forRoot({
            api: {
                key: 'test-key'
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
