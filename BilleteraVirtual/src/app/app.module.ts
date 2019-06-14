import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { BalanceComponent } from './balance/balance.component';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { CommonAccountComponent } from './common-account/common-account.component';
import { CreateAccountWalletComponent } from './create-account-wallet/create-account-wallet.component';
import { RecordComponent } from './record/record.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { SavingsCardComponent } from './savings-card/savings-card.component';
import { WalletComponent } from './wallet/wallet.component';
import { DebitCardComponent } from './debit-card/debit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    DashboardComponent,
    BalanceComponent,
    HomeComponent,
    HelpComponent,
    UnauthorizedComponent,
    CommonAccountComponent,
    CreateAccountWalletComponent,
    RecordComponent,
    CreditCardComponent,
    SavingsCardComponent,
    WalletComponent,
    DebitCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
