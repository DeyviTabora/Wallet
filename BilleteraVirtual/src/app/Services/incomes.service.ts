import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {

  baseUrl = "http://localhost:58188/api"
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   getIncomes(id: number){
     return this.httpClient.get(`${this.baseUrl}/UserIncomes/${id}`)
   }

   getUserIncomes(id: number){
    return this.httpClient.get(`${this.baseUrl}/UserIncomes/${id}`)
  }
}
