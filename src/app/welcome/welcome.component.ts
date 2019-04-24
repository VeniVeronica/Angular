import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GoogleApiService} from "../google-api.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      console.log(params)
      this.userName = params['userName'];
    })

  }

}
