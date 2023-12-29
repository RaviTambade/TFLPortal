import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyworkingprojectsComponent } from './myworkingprojects.component';

describe('MyworkingprojectsComponent', () => {
  let component: MyworkingprojectsComponent;
  let fixture: ComponentFixture<MyworkingprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyworkingprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyworkingprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
