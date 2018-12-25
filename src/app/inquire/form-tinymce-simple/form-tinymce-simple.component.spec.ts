import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTinymceSimpleComponent } from './form-tinymce-simple.component';

describe('FormTinymceSimpleComponent', () => {
  let component: FormTinymceSimpleComponent;
  let fixture: ComponentFixture<FormTinymceSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTinymceSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTinymceSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
