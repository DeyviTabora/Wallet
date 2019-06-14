import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  baseUrl = "http://localhost:58188/api"
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   getAccount(id: number){
     return this.httpClient.get(`${this.baseUrl}/UserAccounts/${id}`);
   }
}
