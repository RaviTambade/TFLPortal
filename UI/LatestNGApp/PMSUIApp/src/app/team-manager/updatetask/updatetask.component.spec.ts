import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetaskComponent } from './updatetask.component';

describe('UpdatetaskComponent', () => {
  let component: UpdatetaskComponent;
  let fixture: ComponentFixture<UpdatetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
