import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSquare]'
})
export class SquareDirective {

  constructor(private elmRef: ElementRef<HTMLInputElement>,
    private renderer2: Renderer2) { }

  ngAfterViewInit(){
    const value = Number(this.elmRef.nativeElement.value);
    if(!Number.isNaN(value)){
      this.renderer2.setProperty(this.elmRef.nativeElement, 'value', value * value);
    }
  }

}
