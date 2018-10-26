import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedQueryComponent } from './integrated-query.component';

describe('IntegratedQueryComponent', () => {
  let component: IntegratedQueryComponent;
  let fixture: ComponentFixture<IntegratedQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegratedQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegratedQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
