import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1
  initialTop: number = 0;
  responsiveFaktor: number = 17;  // changes with responsiveness

  constructor(
    private eleRef: ElementRef,
    private breakpointobserver: BreakpointObserver
  ) {
    this.observeBreakpoints();
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  observeBreakpoints(): any {
    this.breakpointobserver.observe(['(min-width: 1000px)','(min-width: 850px)','(min-width: 675px)','(min-width: 550px)','(min-width: 400px)'])
      .subscribe((state: BreakpointState) => {
      if (state.breakpoints['(min-width: 1000px)'] == true) {
        this.responsiveFaktor = 17;
        console.log('min 1000 px');
      }
       else if (state.breakpoints['(min-width: 850px)'] == true) {
        this.responsiveFaktor = 19;
        console.log('800px');
      }

       else if (state.breakpoints['(min-width: 675px)'] == true) {
        this.responsiveFaktor = 25;
        console.log('675px');
      }
      else if (state.breakpoints['(min-width: 550px)'] == true) {
        this.responsiveFaktor = 29;
        console.log('550px');

      }
      else if (state.breakpoints['(min-width: 400px)'] == true) {
        this.responsiveFaktor = 41;
        console.log('400px');

      }     
     else  {
        this.responsiveFaktor = 52;
        console.log('max 399');
      }
    });
  }


  @HostListener("window:scroll", ["$event"])

  onWindowScroll(event: Event) {  // variable adjusts for responsiveness (is visually tested, what looked best :))  
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio) / this.responsiveFaktor) + 'rem'
  }

}