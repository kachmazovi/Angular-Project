import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.scss']
})
export class TestViewComponent {
  @Input() inChild!: string
  @Output() inChildChange = new EventEmitter()

  public name: string;
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

  constructor() {
    this.name = 'TestViewComponent';
    console.log('TestViewComponent created');
  }

  public changeName(): void {
    this.nameChanged = !this.nameChanged
    this.name = this.nameChanged ? 'TestViewComponent' : 'TestViewComponent changed'
  }

  public changeFromChild(): void {
    this.inChild = 'name changed from child'
    this.inChildChange.emit(this.inChild)
  }

}
