import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { GoogleApiService } from '../google-api.service';
import { Router } from '@angular/router';
//import {GoogleApi1Service} from "../google-api1.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.css']
})
export class SignInComponent implements OnInit {
  constructor(private socialAuthService: AuthService,private _googleAPI:GoogleApiService,private route:Router) { }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(userData);
        console.log(socialPlatform + 'sign in data:' +userData.id);
        console.log(socialPlatform + 'sign in data email:' +userData.email);
        console.log(socialPlatform + 'sign in data name:' +userData.name);
        this.route.navigate([`/welcome/${userData.name}`]);
        this._googleAPI.storeGoogleUserDetails(userData).subscribe(responseData=>{
          console.log(responseData);
        })
      }
    );
  }
  ngOnInit() {
  }
}

