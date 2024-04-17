import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  @Input() placeHodlers: any;
  @Output() registerEvent = new EventEmitter();

  public username = 'Jhon'

  constructor(public loginServ: LoginService) { }

  ngOnInit(): void {
  }

  public login() {
    // this.loginServ.userLogin(this.username)
  }

  public register() {
    this.registerEvent.emit()
  }

}
