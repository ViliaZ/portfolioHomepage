import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(public router: Router) {}

  forceNavigate(name: string) {
    this.router
      .navigate(['/'], { fragment: name })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  scroll() {
    if (this.router.url !== '/imprint') {
      let nav:any = document.getElementById('nav')
      
      if (window.scrollY >= window.innerHeight) {
        nav.style.top = '0';
      } else {
       nav.style.top =
          window.innerHeight - window.scrollY + 'px';
      }
    }
  }

  _visibilityChangeHandler(event: any) {
    //console.log(event);
  }
}
