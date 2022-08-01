import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTopComponent } from './exam-top.component';

describe('ExamTopComponent', () => {
  let component: ExamTopComponent;
  let fixture: ComponentFixture<ExamTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
