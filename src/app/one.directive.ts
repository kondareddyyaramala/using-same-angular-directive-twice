import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dir]'
})
export class OneDirective {

  constructor(private elmRef: ElementRef, private renderer2: Renderer2) { 
    console.log('Directive Initialized')
  }

  ngAfterViewInit(){
    this.renderer2.setProperty(this.elmRef.nativeElement, 'value', 'New Value');
  }

}
