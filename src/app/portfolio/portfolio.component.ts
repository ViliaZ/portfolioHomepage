import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IntersectionObserverService } from '../Services/intersection-observer.service';
import { ProjectsService } from '../Services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  @ViewChild('observed') observedElements!: any;

  constructor(
    public intersectionObserver: IntersectionObserverService,
    public projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.intersectionObserver.createIntersectionObserver(this.observedElements);
    
  }




}
