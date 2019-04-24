import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleApi1Service {

  constructor(private http:HttpClient) {
  }

    storeDetails(userDetails){

   return this.http.post<any>("http://localhost:9988/user",userDetails);
  }
}
