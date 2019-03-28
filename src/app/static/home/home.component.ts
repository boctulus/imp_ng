import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/shared/slider/slider.service';

@Component({
  selector: 'static-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides : Array<any> = [
    {'title':'Imprimo Ya','text':'texto texto','img_url':'../assets/img/banner1.jpg'},
    {'title':'TITULO 2','text':'texto 2!','img_url':'../assets/img/anner2.jpg'},
    {'title':'TITULO 3','text':'texto 3!','img_url':'../assets/img/banner3.jpg'},
    {'title':'TITULO 4','text':'texto 4','img_url':'../assets/img/banner4.jpg'}
  ];

  constructor(private _sliderService : SliderService) { }

  ngOnInit() {
    this._sliderService.setSlides(this.slides, 4000);
  }

}
