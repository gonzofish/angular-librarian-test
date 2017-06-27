/* ts-lint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloYouComponent } from './hello-you.component';

describe('HelloYouComponent', () => {
    let component: HelloYouComponent;
    let fixture: ComponentFixture<HelloYouComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HelloYouComponent
            ]
        });
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HelloYouComponent);
        component = fixture.componentInstance;
    });

    it('should create the hello-you', () => {
        expect(component).toBeTruthy();
    });
});
