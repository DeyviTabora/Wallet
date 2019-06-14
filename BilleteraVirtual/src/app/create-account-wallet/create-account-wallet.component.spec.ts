import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountWalletComponent } from './create-account-wallet.component';

describe('CreateAccountWalletComponent', () => {
  let component: CreateAccountWalletComponent;
  let fixture: ComponentFixture<CreateAccountWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
