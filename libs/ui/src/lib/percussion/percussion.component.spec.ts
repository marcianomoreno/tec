import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercussionComponent } from './percussion.component';

describe('PercussionComponent', () => {
  let component: PercussionComponent;
  let fixture: ComponentFixture<PercussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
