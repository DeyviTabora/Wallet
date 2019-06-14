import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  baseUrl = "http://localhost:58188/api"
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   getExpenses(id: number){
     return this.httpClient.get(`${this.baseUrl}/UserExpenses/${id}`);
   }

   getDebitCardExpenses(id: number){
    return this.httpClient.get(`${this.baseUrl}/UserDebitCard/${id}`);
  }

  getCreditCardExpenses(id: number){
    return this.httpClient.get(`${this.baseUrl}/UserCreditCard/${id}`);
  }
}
