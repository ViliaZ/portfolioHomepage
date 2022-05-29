import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../Services/navigation.service';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

  public mobileMenuOpen: boolean = false;  // toggle hamburgerMenu
  public isMobile700: boolean = false;

  constructor(
    public navigation: NavigationService,
    private breakpointobserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.observeBreakpoints();
  }

  toggleMenu(closingRequest?: string): void {
    if(closingRequest == 'close' && !!this.mobileMenuOpen){
      this.mobileMenuOpen = false;
    } else{
      this.mobileMenuOpen ? this.mobileMenuOpen = false : this.mobileMenuOpen = true;
    }
  }

  observeBreakpoints(): any {
    this.breakpointobserver.observe('(max-width: 700px)').subscribe((result) => {
      !!result.matches ? this.isMobile700 = true : this.isMobile700 = false;
    });
  }


}
