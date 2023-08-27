import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRoutingComponent } from './application-routing.component';

describe('ApplicationRoutingComponent', () => {
  let component: ApplicationRoutingComponent;
  let fixture: ComponentFixture<ApplicationRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
