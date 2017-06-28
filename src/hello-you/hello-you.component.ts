import {
    Component
} from '@angular/core';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

console.info('...');

@Component({
    selector: 'hello-you',
    styleUrls: ['./hello-you.component.scss'],
    templateUrl: './hello-you.component.html'
})
export class HelloYouComponent {
    name = '';
    nameControl = new FormControl();

    constructor() {
        this.nameControl.valueChanges.debounceTime(250)
            .subscribe((value) => this.name = value);
    }
}
