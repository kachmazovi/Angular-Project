import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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


  constructor(public loginServ: LoginService) {
  }

  // ngOnInit(): void {
  //   console.log('oninit: ', this.loginComp);
  // }

  // ngAfterViewInit(): void {
  //   console.log('avfetviewinit: ', this.loginComp);
  // }

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
