import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgOpentoworkComponent } from './img-opentowork.component';

describe('ImgOpentoworkComponent', () => {
  let component: ImgOpentoworkComponent;
  let fixture: ComponentFixture<ImgOpentoworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgOpentoworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgOpentoworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
