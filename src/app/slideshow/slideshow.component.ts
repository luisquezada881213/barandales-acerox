import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  photos: Array<string>;

  constructor() {
    this.photos = []
  }

  ngOnInit(): void {
    for(let i=2; i<=54; i++){
      this.photos.push(`../../assets/img/${i}.jpg`)
    }
  }

}
