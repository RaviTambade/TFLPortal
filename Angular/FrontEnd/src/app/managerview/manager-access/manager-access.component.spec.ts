import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAccessComponent } from './manager-access.component';

describe('ManagerAccessComponent', () => {
  let component: ManagerAccessComponent;
  let fixture: ComponentFixture<ManagerAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
