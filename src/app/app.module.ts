import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ScrollAnimationComponent } from './scroll-animation/scroll-animation.component';
import { ImgOpentoworkComponent } from './img-opentowork/img-opentowork.component';
import { ProjectComponent } from './project/project.component';
import { ParallaxDirective } from './parallax.directive';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    HeaderComponent,
    SkillsComponent,
    ImprintComponent,
    PortfolioComponent,
    LandingpageComponent,
    AboutComponent,
    KeyboardComponent,
    ScrollAnimationComponent,
    ImgOpentoworkComponent,
    ProjectComponent,
    ParallaxDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    LayoutModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
