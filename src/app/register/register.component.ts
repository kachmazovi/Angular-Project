import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  @Output() loginEvent = new EventEmitter();

  public firstName: string = '';
  public lastName: string = '';
  public userName: string = '';
  public password: string = '';
  public email: string = '';

  constructor(private registerServ: RegisterService) { }

  ngOnInit(): void {
  }

  public register() {
    this.registerServ.registerUser({
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      password: this.password,
      email: this.email
    })
  }

  public login() {
    this.loginEvent.emit()
  }

}
