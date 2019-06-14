import { Component, OnInit } from '@angular/core';
import { Expense } from '../Models/expense';
import { ActivatedRoute } from '@angular/router';
import { ExpensesService } from '../Services/expenses.service';
import { IncomesService } from '../Services/incomes.service';
import { Income } from '../Models/income';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.css']
})
export class DebitCardComponent implements OnInit {

  expense: Array<Expense>
  income : Array<Income>
  constructor(private route: ActivatedRoute, private expenses : ExpensesService, private incomes : IncomesService) {
    this.route = route;
    this.expenses = expenses;
    this.incomes = incomes;
   }
   
  ngOnInit() {
    let id = parseInt(localStorage.getItem("UserId"));
    this.expenses.getDebitCardExpenses(id)
      .subscribe((data : Array<Expense>) => {
        this.expense = data;
      },
      err => {
        console.log(err);
      });

      this.incomes.getIncomes(id)
      .subscribe((data : Array<Income>) => {
        this.income = data;
      },
      err => {
        console.log(err);
      });
  }

}
