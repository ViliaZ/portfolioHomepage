import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../Services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() isScrolling: boolean = false;
  constructor(public navigation: NavigationService) { 
    window.addEventListener("scroll", (event) => {
       (window.scrollY > 14) ? this.isScrolling = true : this.isScrolling = false;
  });
  }

  ngOnInit(): void {
  }

}
