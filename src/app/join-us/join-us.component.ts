import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
  showSignUp:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  showSignUpFn(value: boolean) {
    this.showSignUp=value;
  }
}
