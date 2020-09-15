import { Component, OnInit, Input } from '@angular/core';

export interface CarrouselItem {
    longTitle: string,
    shortTitle: string,
    imageUrl: string,
    itemNumber: string
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() carrouselItems: CarrouselItem[] = [ ];
  @Input() anchorId:string = "";

  ngOnInit(): void {
  }

}
