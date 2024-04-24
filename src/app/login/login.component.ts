import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Observable, Subject, Subscription, delay, distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @Input() placeHodlers: any;
  @Output() registerEvent = new EventEmitter();

  public userName = new FormControl('')
  public password = new FormControl('')

  private destroy$ = new Subject()

  public myObservable: Observable<string | number> = new Observable(
    (observer) => {
      observer.next(10)
      observer.next('john doe')
      observer.error('new error')
      observer.complete()

    }
  )

  public username = 'Jhon'
  public subscribtion?: Subscription

  constructor(public loginServ: LoginService) { }

  ngOnInit(): void {
    this.myObservable.subscribe(
      (value) => {
        console.log('from login component', value)
      },
      (error) => {
        console.log('from login component', error)
      },
      () => {
        console.log('from login component', 'completed')
      }
    )
    this.subscribtion = this.loginServ.userInput.valueChanges.subscribe(
      (value) => {
        console.log('from login component', value)
      }
    )

    this.loginServ.userLoginSbj.pipe(
      delay(3000),
      distinctUntilChanged(),
      takeUntil(this.destroy$),
      tap((value) => {
        console.log('from login component', value)
      }),
      map((value) => {
        // let username = value.username
        // username = value.username + ' Doe'
        return value.username
      }),
      filter((value) => {
        return value.length > 5
      }),
      tap((value) => {
        console.log('from login component', value)
      })
    ).subscribe()
  }

  public login() {
    this.loginServ.userLogin({ username: this.userName.value as string, password: this.password.value as string })
  }

  public register() {
    this.registerEvent.emit()
  }

  ngOnDestroy(): void {
    this.subscribtion?.unsubscribe()
    this.destroy$.next(null)
    this.destroy$.complete()
  }

}
