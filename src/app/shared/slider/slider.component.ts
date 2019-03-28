import { Component, OnInit, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { SliderService } from './slider.service';
import { trigger, style, transition, animate, group, state } from '@angular/animations';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('fade', [
      state('In', style({
        opacity: 1
      })),
      state('Out', style({
        opacity: 0
      })),
      transition('Out=>In', animate('3500ms 500ms ease-out')),
      transition('In=>Out', animate('3500ms 500ms ease-out'))
    ])  
  ] 
})
export class SliderComponent implements AfterViewInit {
  slides : Array<any>;
  interval : number;
  timer : any;
  currentSlider = 0;
  active : boolean;
  currentState = 'Out';

  constructor(private _sliderService : SliderService) { }

  ngOnInit() {
    this.slides = this._sliderService.getSlides();
    this.interval = this._sliderService.getInterval();
    this.active = true;
    this.timer = setInterval(()=>{this.goNext();}, this.interval);

    // parche para la primera diapositiva
    setTimeout(()=>{
      this.currentState = this.currentState == 'Out' ? 'In' : 'Out';
    },500);
  }

  goNext(next? : number){
    if (!this.active)
      return;

    this.currentState = this.currentState == 'Out' ? 'In' : 'Out';  

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

  ngAfterViewInit(){

    let $li = document.querySelector('ul.control-buttons').querySelectorAll('li');

    $li.forEach( li => li.addEventListener('click', e => {
      let target : any = event.target || event.srcElement || event.currentTarget;
      let index = parseInt(target.id.substr(3));
      this.goNext(index);
    }));

    document.querySelectorAll('div.caption').forEach(caption => caption.addEventListener('mouseenter', e => {
      this.active = false;
    })); 

    document.querySelectorAll('div.caption').forEach(caption => caption.addEventListener('mouseleave', e => {
      this.active = true;
    })); 

  }
  
  
}
