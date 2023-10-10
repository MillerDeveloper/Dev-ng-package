import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialMenuComponent } from 'projects/core/src/shared/components/initial-menu/initial-menu.component';
import { ProductsComponent } from './modules/products/products.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: InitialMenuComponent,
        data: {
            menuList: [
                {
                    label: 'Банк',
                    links: [{
                        label: 'Download',
                        link: 'products'
                    }]
                }
            ]
        }
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
