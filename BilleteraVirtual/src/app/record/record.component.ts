import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expense } from '../Models/expense';
import { ExpensesService } from '../Services/expenses.service';
import { Income } from '../Models/income';
import { IncomesService } from '../Services/incomes.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  expense: Array<Expense>
  income: Array<Income>
  constructor(private route: ActivatedRoute, private expenses : ExpensesService, private incomes: IncomesService) {
    this.route = route;
    this.incomes = incomes;
    this.expenses = expenses;
   }
   
  ngOnInit() {
    let id = parseInt(localStorage.getItem("UserId"));
    this.expenses.getExpenses(id)
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
