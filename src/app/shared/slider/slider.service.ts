import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  slides : Array<any>;
  interval: number;

  constructor() { }

  setSlides(_slides:Array<any>, time? : number){
    this.slides = _slides;
    
    if(typeof time != 'undefined')
      this.setInterval(time);
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

  setInterval(time){
    this.interval = time;
  }

  getInterval(){
    return this.interval;
  }

}
