import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetaskstatusComponent } from './updatetaskstatus.component';

describe('UpdatetaskstatusComponent', () => {
  let component: UpdatetaskstatusComponent;
  let fixture: ComponentFixture<UpdatetaskstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetaskstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetaskstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
