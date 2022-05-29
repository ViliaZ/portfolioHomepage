import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'imprint', component: ImprintComponent },
];

const config = {
  /* instead of use extraOptions for Router */
  onSameUrlNavigation:
    'reload' /**fix to rescroll to same anchor url after scrolling */,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 0],
};


@NgModule({
  imports: [RouterModule.forRoot(routes, <ExtraOptions>config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
