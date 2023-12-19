import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDownLoadComponent } from './file-down-load.component';

describe('FileDownLoadComponent', () => {
  let component: FileDownLoadComponent;
  let fixture: ComponentFixture<FileDownLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDownLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDownLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
