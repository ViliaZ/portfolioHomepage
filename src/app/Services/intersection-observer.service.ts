import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IntersectionObserverService   {

  observer!: IntersectionObserver;

  callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) =>
      console.log('got observed', entry.target)
    );
  };


  constructor() { }


  createIntersectionObserver(observedElements: any) {
    console.log('array in service',observedElements.nativeElement);

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    this.observer = new IntersectionObserver(this.callback, options);
    this.observer.observe(observedElements.nativeElement);
  
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

}

