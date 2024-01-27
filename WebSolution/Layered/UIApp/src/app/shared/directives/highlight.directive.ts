import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2 ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'text-decoration',
      'underline'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
  }
//all remove
  // @HostListener('click') onClick() {
  
  //   const elements = document.querySelectorAll('[highlight]');
  //     console.log(this.el.nativeElement.parentNode)

  //   elements.forEach(element => {
  //     this.renderer.removeClass(element, 'highlighted');
  //   });
  //   this.renderer.addClass(this.el.nativeElement, 'highlighted');
  // }


  //by selecting parent element

  @HostListener('click') onClick() {
    const elements =this.el.nativeElement.parentNode.querySelectorAll('[highlight]');


    elements.forEach((element: any) => {
      this.renderer.removeClass(element, 'highlighted');
    });
    this.renderer.addClass(this.el.nativeElement, 'highlighted');
  }
}
