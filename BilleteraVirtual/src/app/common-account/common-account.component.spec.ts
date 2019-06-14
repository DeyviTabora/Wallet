import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAccountComponent } from './common-account.component';

describe('CommonAccountComponent', () => {
  let component: CommonAccountComponent;
  let fixture: ComponentFixture<CommonAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
