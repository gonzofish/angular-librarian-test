/* tslint:disable:no-unused-vars */
import { getTestBed, TestBed } from '@angular/core/testing';

import { NoopService } from './noop.service';

describe('NoopService', () => {
    let service: NoopService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NoopService]
        });
        service = getTestBed().get(NoopService);
    });

    it('', () => {
        expect(service).toBeTruthy();
    });
});
