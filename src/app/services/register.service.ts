import { Injectable } from '@angular/core';
import { IUserData } from './register.interface';

@Injectable()
export class RegisterService {

  public name = 'RegisterService'

  constructor() { }

  public registerUser(userData: IUserData) {
    console.log(userData)
  }
}
