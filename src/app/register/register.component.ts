import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserData } from '../services/register.interface';
import { adult, matchValidator } from '../validatos/custom-validators';
import { LoginService } from '../services/login.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  @Output() loginEvent = new EventEmitter();

  // public firstName: string = '';
  // public lastName: string = '';
  // public userName: string = '';
  // public password: string = '';
  // public email: string = '';

  // public firstNameControl = new FormControl('')
  // public lastNameControl = new FormControl('')
  // public userNameControl = new FormControl('')
  // public passwordControl = new FormControl('')
  // public emailControl = new FormControl('')

  public userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    userName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    passwordGroup: new FormGroup(
      {
        password: new FormControl<string>('', [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{8,}$'
          ),
        ]),
        confirmPassword: new FormControl<string>('', [Validators.required]),
      },
      [matchValidator('password', 'confirmPassword')]
    ),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, adult]),
    adress: new FormGroup({
      city: new FormControl(''),
      street: new FormControl('')
    })
  })

  // public userForm = this.formBuilder.group({
  //   firstName: [''],
  //   lastName: [''],
  //   userName: [''],
  //   password: [''],
  //   email: [''],
  //   adress: this.formBuilder.group({
  //     city: [''],
  //     street: ['']
  //   })
  // })

  constructor(private registerServ: RegisterService, private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    console.log(this.userForm)
    console.log(this.userForm.get('userName'))
    this.userForm.valueChanges.subscribe(value => {
      console.log(this.userForm)
    })

    this.loginService.userLoginSbj.pipe(
      tap((value) => {
        console.log(value)
      })
    ).subscribe()
  }

  public register() {
    // this.registerServ.registerUser({
    //   firstName: this.firstNameControl.value as string,
    //   lastName: this.lastNameControl.value as string,
    //   userName: this.userNameControl.value as string,
    //   password: this.passwordControl.value as string,
    //   email: this.emailControl.value as string
    // })
    this.registerServ.registerUser(this.userForm.value as IUserData)
  }

  public login() {
    this.loginEvent.emit()
  }

  // public setValue() {
  //   console.log(this.userForm.value)
  //   this.userForm.patchValue({
  //     firstName: 'jhon',
  //     lastName: 'doe',
  //     userName: 'jhondoe',
  //   })
  //   console.log(this.userForm.value)
  // }

  public get userFromIsValid() {
    return this.userForm.valid;
  }

  public get firstNameCtrl(): FormControl {
    return this.userForm.get('firstName') as FormControl
  }

  public get emailCtrl(): FormControl {
    return this.userForm.get('email') as FormControl
  }

  public get ageCtrl(): FormControl {
    return this.userForm.get('age') as FormControl
  }

}