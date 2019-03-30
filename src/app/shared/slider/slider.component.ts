import { Component, OnInit, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { SliderService } from './slider.service';
import { trigger, style, transition, animate, group, state } from '@angular/animations';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  // animate ('duration delay easing')
  animations: [
    trigger('fade', [
      state('s0', style({
        opacity: 0
      })),
      state('s1', style({
        opacity: 1
      })),
      state('s2', style({
        opacity: 0
      })),
      transition('void => *', animate('1500ms 0ms ease-out')),
      transition('s0 => s1', animate('1500ms 0ms ease-out')),
      transition('s1 => s2', animate('1500ms 0ms ease-out'))
    ])
  ]
})
export class SliderComponent implements AfterViewInit {
  slides : Array<any>;
  interval : number;
  timer : any;
  currentSlider = 0;
  active : boolean;
  state = 's1';

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

    this.state = 's0';

    setTimeout(()=>{
      if (this.state=='s0') this.state = 's1'; else if (this.state=='s1' && this.active) this.state = 's2';
    },2000);

    setTimeout(()=>{
      if (this.state=='s0') this.state = 's1'; else if (this.state=='s1' && this.active) this.state = 's2';
    },3000);

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
