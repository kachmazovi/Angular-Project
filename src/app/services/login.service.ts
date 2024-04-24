import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userInput = new FormControl('')

  public userLoginSbj = new BehaviorSubject<{ username: string, password: string }>({ username: '', password: '' })

  public userLogin(userForm: { username: string, password: string }) {
    this.userLoginSbj.next(userForm)
  }

  public name = 'LoginService'

  constructor() { }

  public logMessage(message: string) {
    console.log('Message from LoginService: ', message)
  }
}
