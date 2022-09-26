import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiceknowledgeComponent } from './basiceknowledge.component';

describe('BasiceknowledgeComponent', () => {
  let component: BasiceknowledgeComponent;
  let fixture: ComponentFixture<BasiceknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasiceknowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasiceknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
