import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[imFocus]',
})
export class FocusDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    setTimeout(() => this.elementRef?.nativeElement?.focus());
  }
}
