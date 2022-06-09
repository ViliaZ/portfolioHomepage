
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from '../Services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() projectIndex: any;  // projectArray in projectsService
  @ViewChild('joinIMG') joinIMG: ElementRef | undefined;
  @ViewChild('tokenIMG') tokenIMG: ElementRef | undefined;

  public mobile500: boolean = false;
  public mobile800: boolean = false;
  public mobile1000: boolean = false;
  public desktop1000: boolean = false;

  constructor(
    public projectsService: ProjectsService,
    private breakpointobserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
  }

  observeBreakpoints(): any {
    this.breakpointobserver.observe(['(max-width: 500px)', '(max-width: 800px)', '(min-width: 1000px)', '(max-width: 1000px)'])
      .subscribe((state: BreakpointState) => {

        let joinImage = this.joinIMG?.nativeElement;

        if (state.breakpoints['(max-width: 500px)'] == true) {
          this.mobile500 = true;
          joinImage.style.transform = "translateY(1em)";
        }
        if (state.breakpoints['(min-width: 1000px)'] == true) {
          this.desktop1000 = true;
        }
        if (state.breakpoints['(max-width: 1000px)'] == true) {
          this.mobile1000 = true;
        }
        if (state.breakpoints['(max-width: 800px)'] == true) {
          this.mobile800 = true;
        }
      });
  }

}



