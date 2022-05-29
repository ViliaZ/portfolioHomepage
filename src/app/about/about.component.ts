import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../Services/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public mobileMenuOpen: boolean = false;  // toggle hamburgerMenu
  public isMobile500: boolean = false;
  public isMobile1000: boolean = false;

  constructor(
    public navigation: NavigationService,
    private breakpointobserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.observeBreakpoints();
  }

  observeBreakpoints(): any {
    this.breakpointobserver.observe(['(max-width: 1000px)', '(max-width: 500px)']).subscribe((state: BreakpointState) => {
      console.log('state', state.breakpoints['(max-width: 1000px)']);
      if (state.breakpoints['(max-width: 1000px)'] == true) {
        this.isMobile1000 = true;
      }
      if (state.breakpoints['(max-width: 500px)'] == true) {
        this.isMobile500 = true;
      }
    });
  }
}
