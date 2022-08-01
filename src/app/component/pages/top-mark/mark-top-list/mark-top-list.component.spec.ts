import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkTopListComponent } from './mark-top-list.component';

describe('MarkTopListComponent', () => {
  let component: MarkTopListComponent;
  let fixture: ComponentFixture<MarkTopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkTopListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
