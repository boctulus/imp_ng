import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  slides : Array<any>;

  constructor() { }

  setSlides(_slides:Array<any>){
    this.slides = _slides;
  }

  getSlides(){
    return this.slides;
  }

  addSlide(slide){
    this.slides.push(slide);
  }

  clear(){
    this.slides = [];
  }

}
