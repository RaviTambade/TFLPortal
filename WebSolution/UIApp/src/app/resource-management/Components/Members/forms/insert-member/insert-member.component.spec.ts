import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMemberComponent } from './insert-member.component';

describe('InsertMemberComponent', () => {
  let component: InsertMemberComponent;
  let fixture: ComponentFixture<InsertMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
