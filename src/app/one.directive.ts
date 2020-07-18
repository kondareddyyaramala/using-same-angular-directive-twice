import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeContentDir]'
})
export class ChangeContentDirective {

  constructor(private elmRef: ElementRef<HTMLElement>, 
    private renderer2: Renderer2) { 
  }

  ngAfterViewInit(){
    console.log('Children nodes ::: ', this.elmRef.nativeElement.childNodes);
    this.renderer2.setValue(this.elmRef.nativeElement.childNodes.item(0), 'This is new value');
  }

}
