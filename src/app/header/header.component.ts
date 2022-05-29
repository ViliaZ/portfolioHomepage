import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../Services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public navigation: NavigationService) { }

  ngOnInit(): void {
  }

}
