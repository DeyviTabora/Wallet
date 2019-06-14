import { Component, OnInit } from '@angular/core';
import { Expense } from '../Models/expense';
import { ActivatedRoute } from '@angular/router';
import { ExpensesService } from '../Services/expenses.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  expense: Array<Expense>
  constructor(private route: ActivatedRoute, private expenses : ExpensesService) {
    this.route = route;
    this.expenses = expenses;
   }
   
  ngOnInit() {
    debugger
    let id = parseInt(localStorage.getItem("UserId"));
    this.expenses.getCreditCardExpenses(id)
      .subscribe((data : Array<Expense>) => {
        this.expense = data;
      },
      err => {
        console.log(err);
      });
  }

}
