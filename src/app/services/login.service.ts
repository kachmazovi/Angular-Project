import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  public name = 'LoginService'

  constructor() { }

  public logMessage(message: string) {
    console.log('Message from LoginService: ', message)
  }
}
