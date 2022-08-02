import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTopListComponent } from './question-top-list.component';

describe('QuestionTopListComponent', () => {
  let component: QuestionTopListComponent;
  let fixture: ComponentFixture<QuestionTopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTopListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
