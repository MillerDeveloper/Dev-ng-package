
import { NgModule, ModuleWithProviders, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./public-api";
import { IConfiguration } from "./shared/interfaces/package.interfaces";
import { CoreComponent } from "./core.component";

@NgModule({
    declarations: [CoreComponent],
    imports: [CommonModule, HttpClientModule],
    providers: [],
})
export class CoreModule {
    static forRoot(configuration: IConfiguration): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                {
                    provide: ApiService,
                    useValue: configuration.api
                }
            ]
        }
    }
}