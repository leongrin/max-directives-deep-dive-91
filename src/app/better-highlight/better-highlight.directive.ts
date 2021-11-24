import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    /*this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement,'color', 'white');*/
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    /*this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement,'color', 'white');*/
    this.backgroundColor = 'blue;'
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent');
    this.renderer.setStyle(this.elementRef.nativeElement,'color', 'black');*/
    this.backgroundColor = 'transparent;'
    this.color = 'black';
  }

}
