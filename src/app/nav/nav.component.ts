import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../Services/navigation.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public mobileMenuOpen: boolean = false; // toggle hamburgerMenu
  public isMobile700!: boolean;

  constructor(
    public navigation: NavigationService,
    private breakpointobserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.observeBreakpoints();
  }

  observeBreakpoints(): void {
    this.breakpointobserver
      .observe('(max-width: 700px)')
      .subscribe((result) => {
        if (result.matches == true) {
          this.isMobile700 = true;
        } else {
          this.isMobile700 = false;
        }
      });
  }

  toggleMenu(request?: string): void {
    if(!this.isMobile700){ return }
    else if (request == 'close' && this.mobileMenuOpen) {
      this.mobileMenuOpen = false;
    } else {
      this.mobileMenuOpen == false
        ? (this.mobileMenuOpen = true)
        : (this.mobileMenuOpen = false);
    }
  }
}
