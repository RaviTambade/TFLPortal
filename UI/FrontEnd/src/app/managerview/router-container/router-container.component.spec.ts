import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterContainerComponent } from './router-container.component';

describe('RouterContainerComponent', () => {
  let component: RouterContainerComponent;
  let fixture: ComponentFixture<RouterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
