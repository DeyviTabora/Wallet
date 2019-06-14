import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Income } from '../Models/income';
import { Expense } from '../Models/expense';
import { ExpensesService } from '../Services/expenses.service';
import { IncomesService } from '../Services/incomes.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  
  income : Array<Income>;
  expense: Array<Expense>;
  chartIncome: Income[];
  chartAmount: [];
  ChartDate: [];
  constructor(private route: ActivatedRoute, private expenses : ExpensesService, private incomes : IncomesService) {
    this.route = route;
    this.expenses = expenses;
    this.incomes = incomes;
   }

   amount : [1,2,3,4,5];
   income2 : [5,6,7,3];

   public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public labels = [];
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [], label: 'Egresos'},
    {data: [], label: 'Ingresos'}
  ];

  ngOnInit() {
    debugger;
    let id = parseInt(localStorage.getItem("UserId"));
    this.expenses.getDebitCardExpenses(id)
      .subscribe((data : Array<Expense>) => {
        data.forEach(x =>{
          this.labels.push(new Date(x.ExpenseDateTransaction).getMonth());
          this.barChartData[0].data.push(x.ExpenseAmount);
        });
      },
      err => {
        console.log(err);
      });

      this.incomes.getIncomes(id)
      .subscribe((data : Array<Income>) => {
        data.forEach(x =>{
          //this.labels.push(new Date(x.IncomeDateTransaction).getMonth());
          this.barChartData[1].data.push(x.IncomeAmount);
        });

        this.labels.forEach(x => 
          {
             this.barChartLabels.push(new String(x))
          })
      },
      err => {
        console.log(err);
      });
  }

}
