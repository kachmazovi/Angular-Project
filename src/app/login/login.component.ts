import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() placeHodlers: any;

  public username = 'Jhon'

  constructor() { }

  ngOnInit(): void {
  }

}
