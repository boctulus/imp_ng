import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SliderService } from './slider.service';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides : Array<any>;
  interval : number;
  timer : any;
  currentSlider = 0;
  active : boolean;

  constructor(private _sliderService : SliderService) { }

  ngOnInit() {
    this.slides = this._sliderService.getSlides();
    this.interval = this._sliderService.getInterval();
    this.active = true;
    this.timer = setInterval(()=>{this.goNext();}, this.interval);

    $("body").on("mouseenter", "div.caption", ()=>{
      this.active = false;
    });

    $("body").on("mouseleave", "div.caption", ()=>{
      this.active = true;
    });

    $("body").on("click", "ul.control-buttons > li:not(.active)", (e)=>{
      var index = parseInt(e.target.id.substr(3));
      this.goNext(index);
    });
  }

  goNext(next? : number){
    if (!this.active)
      return;

    if(typeof next != 'undefined'){
      this.currentSlider = next; 

      // reseteo el timer
      clearInterval(this.timer);
      this.timer = setInterval(()=>{this.goNext();}, this.interval);
    }else
      this.currentSlider++;

    if (this.currentSlider>= this.slides.length){
      this.currentSlider = 0;
    }
  }  
  
}
