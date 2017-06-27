import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HelloYouComponent } from './hello-you/hello-you.component';
import { NoopService } from './services/noop.service';

@NgModule({
    declarations: [
        HelloYouComponent
    ],
    exports: [
        HelloYouComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class LibrarianTestModule {
    static forRoot() {
        return {
            ngModule: LibrarianTestModule,
            providers: [NoopService]
        };
    }
}
