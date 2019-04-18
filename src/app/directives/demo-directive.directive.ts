import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemoDirective]'
})
export class DemoDirectiveDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
