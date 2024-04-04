import { Component } from '@angular/core';

@Component({
  selector: 'app-test-view',
  template: `
    <p>test-view works!</p>
    <span> {{ name | uppercase }} </span>
    <button (click)="changeName()"> Change name </button>
  `,
  styles: [
    `p { color: blue; }`,
  ]
})
export class TestViewComponent {
  public name: string;

  private nameChanged: boolean = false

  constructor() {
    this.name = 'TestViewComponent';
    console.log('TestViewComponent created');
  }

  public changeName(): void {
    this.nameChanged = !this.nameChanged
    this.name = this.nameChanged ? 'TestViewComponent' : 'TestViewComponent changed'
  }

}
