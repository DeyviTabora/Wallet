import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../Models/expense';
import { HttpClientModule } from '@angular/common/http';
import { AccountsService } from '../Services/accounts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  account: Array<Account>
  constructor(private route: ActivatedRoute, private accounts : AccountsService) {
    this.route = route;
    this.accounts = accounts;
   }
   
  ngOnInit() {
    let id = parseInt(localStorage.getItem("UserId"));
    this.accounts.getAccount(id)
      .subscribe((data : Array<Account>) => {
        this.account = data;
      },
      err => {
        console.log(err);
      });
  }

}
