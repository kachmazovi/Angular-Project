import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('loginComponent') loginComp: any;

  public loginPage = true;
  public registerPage = false;

  public communicateWithChild = 'Hello from parent';

  title = 'angular-app';

  public placeHodlers = {
    username: 'Username',
    password: 'Password'
  }

  public login() {
    if (!this.loginPage) {
      this.loginPage = true;
      this.registerPage = false;
    }
  }

  public register() {
    if (!this.registerPage) {
      this.registerPage = true;
      this.loginPage = false;
    }
  }

  public changeFromParent() {
    this.communicateWithChild = 'Changed from parent';
  }
}
