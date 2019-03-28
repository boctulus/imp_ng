import { Component, OnInit, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { SliderService } from './slider.service';
import { trigger, style, transition, animate, group, state } from '@angular/animations';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('fadeIn', [
      state('In', style({
        opacity: 1
      })),
      state('Out', style({
        opacity: 0
      })),
      transition('*=>In', animate('1500ms 1500ms ease-in'))
    ]),
    trigger('fadeOut', [
      state('In', style({
        opacity: 1
      })),
      state('Out', style({
        opacity: 0
      })),
      transition('*=>Out', animate('1500ms 1500ms ease-out'))
    ])
  ] 
})
export class SliderComponent implements AfterViewInit {
  slides : Array<any>;
  interval : number;
  timer : any;
  currentSlider = 0;
  active : boolean;
  currentState = 'In';

  constructor(private _sliderService : SliderService) { }

  ngOnInit() {
    this.slides = this._sliderService.getSlides();
    this.interval = this._sliderService.getInterval();
    this.active = true;
    this.timer = setInterval(()=>{this.goNext();}, this.interval);
  }

  goNext(next? : number){
    if (!this.active)
      return;

    this.currentState = this.currentState == 'Out' ? 'In' : 'Out';

    if(typeof next != 'undefined'){
      this.currentSlider = next; 

      // reseteo el timer
      clearInterval(this.timer);
      this.timer = setInterval(()=>{
        this.goNext();
      }, this.interval);
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
