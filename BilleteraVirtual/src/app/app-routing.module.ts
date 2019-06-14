import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BalanceComponent } from './balance/balance.component';
import { HomeComponent } from './home/home.component';
import { RecordComponent } from './record/record.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { CreateAccountWalletComponent } from './create-account-wallet/create-account-wallet.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "createAccount", component: CreateAccountComponent},
  {path: "Account", component: CreateAccountWalletComponent},
  // {path: '',     component: CreateAccountComponent   },
  {path: "balance", component: BalanceComponent},
  {path: "Inicio", component: HomeComponent},
  {path: "Historial", component: RecordComponent},
  {path: "TarjetaCredito", component: CreditCardComponent},
  {path: "TarjetaDebito", component: DebitCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
