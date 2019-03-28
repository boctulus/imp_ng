import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/shared/slider/slider.service';

@Component({
  selector: 'static-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides : Array<any> = [
    {'title':'TITULO 1','text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo iusto placeat aliquid tempore harum, similique!','img_url':'../assets/img/imgContacto.png'},
    {'title':'TITULO 2','text':'Lorem ipsum iusto placeat aliquid tempore harum, similique!','img_url':'http://i9.photobucket.com/albums/a88/creaticode/2_zps6ccd36bd.jpg'},
    {'title':'TITULO 3','text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dicta laudantium voluptatem minima! Dolorum tempore dolores excepturi omnis provident. Commodi quis aperiam maiores, dolore a perferendis!','img_url':'http://i9.photobucket.com/albums/a88/creaticode/4_zps611bc9f9.jpg'},
    {'title':'TITULO 4','text':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolore dignissimos laudantium.','img_url':'http://i9.photobucket.com/albums/a88/creaticode/3_zps70e4fcc5.jpg'}
  ];

  constructor(private _sliderService : SliderService) { }

  ngOnInit() {
    this._sliderService.setSlides(this.slides, 4000);
  }

}
