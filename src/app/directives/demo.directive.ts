import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDemoDirective]'
})
export class DemoDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appDemoDirective') highlightColor: string;

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
