import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides : Array<any> = [
    {'title':'TITULO 1','text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo iusto placeat aliquid tempore harum, similique!','img_url':'http://i9.photobucket.com/albums/a88/creaticode/1_zpsc6871490.jpg'},
    {'title':'TITULO 2','text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo iusto placeat aliquid tempore harum, similique!','img_url':'http://i9.photobucket.com/albums/a88/creaticode/2_zps6ccd36bd.jpg'},
    {'title':'TITULO 3','text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dicta laudantium voluptatem minima! Dolorum tempore dolores excepturi omnis provident. Commodi quis aperiam maiores, dolore a perferendis!','img_url':'http://i9.photobucket.com/albums/a88/creaticode/4_zps611bc9f9.jpg'},
    {'title':'TITULO 4','text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore dignissimos laudantium.','img_url':'http://i9.photobucket.com/albums/a88/creaticode/3_zps70e4fcc5.jpg'}
  ];

  interval = 2500;
  timer : any;
  currentSlider = 0;
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
