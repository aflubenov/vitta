import {Component, OnInit} from '@angular/core';
import {CarrouselItem} from 'src/app/components/carousel/carousel.component';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

    constructor() {}

    carrouselItems: CarrouselItem[] = [
        {
            longTitle: "Vista de la urbanización",
            shortTitle: "Urbanización",
            imageUrl: 'assets/images/slide01.jpg',
            itemNumber: '01'
        },
        {
            longTitle: "Segunda vista",
            shortTitle: "Segunda",
            imageUrl: 'assets/images/slide02.jpg',
            itemNumber: '02'
        },
        {
            longTitle: "Tercera vista",
            shortTitle: "Tercera",
            imageUrl: 'assets/images/slide04.jpg',
            itemNumber: '03'
        }
    ];

    ngOnInit(): void {
    }

}
