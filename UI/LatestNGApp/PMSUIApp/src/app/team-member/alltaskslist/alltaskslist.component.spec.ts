import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltaskslistComponent } from './alltaskslist.component';

describe('AlltaskslistComponent', () => {
  let component: AlltaskslistComponent;
  let fixture: ComponentFixture<AlltaskslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltaskslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltaskslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
