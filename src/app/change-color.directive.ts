import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  @Input() color: string = 'red';

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = this.color;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = this.color;
  }

  constructor(private element: ElementRef) {
    console.log('in directive: ', this.element.nativeElement)
  }
}
