import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  interval = 2500;
  timer : any;
  currentSlider = 0
  cantSliders : number;
  panels : any;
  slider : any;
  controls : any;
  active: boolean;

  constructor() { }

  ngOnInit() {
    this.slider =  $('#slider');
    this.panels = this.slider.find('.slider-wrapper > li');
    this.controls = $('.control-buttons');
    this.cantSliders = this.panels.length;
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

  interact(next? : number){
    if (!this.active)
      return;

    let buttons = this.controls.children();  

    $(this.panels[this.currentSlider]).removeClass('current-slide');
    $(buttons[this.currentSlider]).removeClass('active');
    this.goNext(next);
    $(this.panels[this.currentSlider]).addClass('current-slide');
    $(buttons[this.currentSlider]).addClass('active');
  }

  goNext(next? : number){
    if(typeof next != 'undefined'){
      //console.log('Click');
      //console.log('Next: '+ next.toString());
      this.currentSlider = next; 
      clearInterval(this.timer);
      this.timer = setInterval(()=>{this.interact();}, this.interval);

    }else
    this.currentSlider++;

    if (this.currentSlider>= this.cantSliders){
      this.currentSlider = 0;
    }
  }  
  
}
