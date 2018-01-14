import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './component';
//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal';
import { HomeComponent } from './homeComponent';
import { HttpModule } from '@angular/http';
import { routing } from './routing';
import { NumberService } from "./numberService";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing],
    declarations: [
        MainComponent,
        HomeComponent
        ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: '/'
        },
        NumberService
    ],
    bootstrap: [MainComponent]

})
export class MainModule { }
