import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestViewComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() inChild!: string
  @Input() newName!: string
  @Output() inChildChange = new EventEmitter()

  public dateNow: Date = new Date();

  public color: string = 'red';

  public isSpecial = true;
  public canSave = true;
  public isUnchanged = true;

  public myFirstInput: string = ''

  public ngSwitchProperty: number = 0;

  public currentStyles = {
    'font-style': this.canSave ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold' : 'normal',
    'font-size': this.isSpecial ? '24px' : '12px',
  };
  public name: string = 'TestViewComponent';
  public amount: number = 100;
  public numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public myArr = [
    {
      country: 'USA',
      capital: 'Washington',
      color: 'red'
    },
    {
      country: 'France',
      capital: 'Washington',
      color: 'blue',
    },
    {
      country: 'Portugal',
      capital: 'Washington',
      color: 'green'
    },
    {
      country: 'German',
      capital: 'Washington',
      color: 'yellow'
    },
    {
      country: 'Georgia',
      capital: 'Washington',
      color: 'lightblue'
    },
    {
      country: 'Greece',
      capital: 'Washington',
      color: 'white'
    },
    {
      country: 'Italy',
      capital: 'Washington',
      color: 'orange'
    },
    {
      country: 'Spain',
      capital: 'Washington',
      color: 'purple'
    },
  ]

  private nameChanged: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes:', changes)
  }

  ngOnInit(): void {
    this.ngSwitchProperty = Math.random() * 10;
    // console.log('TestViewComponent initialized');


    // setTimeout(() => {
    //   this.name = 'TestViewComponent changed by timer';
    //   console.log(this.name)
    // }, 3000);
  }

  ngDoCheck(): void {
    // console.log('called ngDoCheck')
    // this.changeDetect.detectChanges()
  }

  ngAfterContentInit(): void {
    // console.log('called ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    // console.log('called ngAfterContentChecked')
  }

  constructor(private changeDetect: ChangeDetectorRef) { 
    
  }

  public changeName(): void {
    this.nameChanged = !this.nameChanged
    this.name = this.nameChanged ? 'TestViewComponent' : 'TestViewComponent changed'
  }

  public changeFromChild(): void {
    this.inChild = 'name changed from child'
    this.inChildChange.emit(this.inChild)
  }

  public changeCurrentStyles(): void {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    }
  }

  public getRandomNumber(): void {
    this.ngSwitchProperty = Math.floor(Math.random() * 10);
    console.log(this.ngSwitchProperty)
  }
}
