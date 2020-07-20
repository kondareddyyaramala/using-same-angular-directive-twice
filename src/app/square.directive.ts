import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appSquare]'
})
export class SquareDirective {
  @Input('appSquare') multiply: number;

  constructor(private elmRef: ElementRef<HTMLInputElement>,
    private renderer2: Renderer2) { }

  ngAfterViewInit() {
    const value = Number(this.elmRef.nativeElement.value);
    console.log(this.multiply);
    if (!Number.isNaN(value)) {
      this.renderer2.setProperty(this.elmRef.nativeElement, 'value', value * value);
    }
  }
}
