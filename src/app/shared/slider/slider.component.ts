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
  interval = 2500;
  timer : any;
  currentSlider = 0;
  cantSliders : number;
  panels : any;
  slider : any;
  controls : any;
  active: boolean;

  constructor(private _sliderService : SliderService) { }

  ngOnInit() {
    this.slides = this._sliderService.getSlides();

    this.slider =  $('#slider');
    this.panels = this.slider.find('.slider-wrapper > li');
    this.controls = $('.control-buttons');
    this.cantSliders = this.slides.length;
    this.active = true;

    this.timer = setInterval(()=>{this.interact();}, this.interval);

    $("body").on("mouseenter", "div.caption", ()=>{
      this.active = false;
    });

    $("body").on("mouseleave", "div.caption", ()=>{
      this.active = true;
    });

    $("body").on("click", "ul.control-buttons > li:not(.active)", (e)=>{
      var index = parseInt(e.target.id.substr(3));
      this.interact(index);
    });
  }

  // se simplifica enormemente!
  interact(next? : number){
    if (!this.active)
      return;

    this.goNext(next);
  }

  goNext(next? : number){
    if(typeof next != 'undefined'){
      this.currentSlider = next; 

      // reseteo el timer
      clearInterval(this.timer);
      this.timer = setInterval(()=>{this.interact();}, this.interval);
    }else
      this.currentSlider++;

    if (this.currentSlider>= this.cantSliders){
      this.currentSlider = 0;
    }
  }  
  
}
