import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class Highlight {
  @Input() appHighlight = '';
  @Input() defaultColor = ''
  constructor(private element: ElementRef){}

  @HostListener('mouseenter') onMouseEnter() {
    this.cambioColore(this.appHighlight)
  }

@HostListener('mouseleave') onMouseLeave() {
  this.cambioColore(this.defaultColor)
}

  private cambioColore(colore:string) {
    this.element.nativeElement.style.backgroundColor = colore
  }
}
