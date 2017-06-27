import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { LibrarianTestModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        LibrarianTestModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
