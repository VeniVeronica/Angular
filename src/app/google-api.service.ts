import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private http:HttpClient) { }


  storeGoogleUserDetails(userGoogleDetails){
    return this.http.post<any>('http://localhost:9988/user',userGoogleDetails);
  }


}
