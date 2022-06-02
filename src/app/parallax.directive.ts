import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})

// Original Source: https://medium.com/fove/angular-parallax-d1c2de9f07a6
// modified by me: breakpointobserver to adjust responsiveness (NEEDS improvement!!)
// consider trying Combination with IntersectionObserver for adjusting responsiveness  

export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1
  initialTop: number = 0;

  // implemented by me:
  responsiveFaktor: number = 17;  // changes with breakpoint

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
        console.log('breakpoint: 1000px');
        
      }
       else if (state.breakpoints['(min-width: 850px)'] == true) {
        this.responsiveFaktor = 19;
      }
       else if (state.breakpoints['(min-width: 675px)'] == true) {
        this.responsiveFaktor = 25;
      }
      else if (state.breakpoints['(min-width: 550px)'] == true) {
        this.responsiveFaktor = 29;
      }
      else if (state.breakpoints['(min-width: 400px)'] == true) {
        this.responsiveFaktor = 41;
      }     
     else  {
        this.responsiveFaktor = 52;
      }
    });
  }

  @HostListener("window:scroll", ["$event"])

  onWindowScroll(event: Event) {  // "responsiveFaktor" is visually tested, not mathematically evaluated 
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio) / this.responsiveFaktor) + 'rem'
  }

}