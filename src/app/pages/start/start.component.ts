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
            longTitle: "Bosque Zen & Relax",
            shortTitle: "Zen & Relax",
            imageUrl: 'assets/images/slide01.jpg',
            itemNumber: '01'
        },
        {
            longTitle: "Calles Internas",
            shortTitle: "Calles",
            imageUrl: 'assets/images/slide02.jpg',
            itemNumber: '02'
        },
        {
            longTitle: "Centro Comercial",
            shortTitle: "Shopping",
            imageUrl: 'assets/images/slide03.jpg',
            itemNumber: '03'
        },
        {
            longTitle: "Circuito Deportivo",
            shortTitle: "Deportes",
            imageUrl: 'assets/images/slide04.jpg',
            itemNumber: '04'
        },
        {
            longTitle: "Circulación",
            shortTitle: "Circulación",
            imageUrl: 'assets/images/slide05.jpg',
            itemNumber: '05'
        },
        {
            longTitle: "Guardería Náutica Deportiva",
            shortTitle: "Guardería",
            imageUrl: 'assets/images/slide06.jpg',
            itemNumber: '06'
        },
        {
            longTitle: "Ingreso Controlado",
            shortTitle: "Ingreso",
            imageUrl: 'assets/images/slide07.jpg',
            itemNumber: '07'
        },
        {
            longTitle: "Ingreso Exclusivo",
            shortTitle: "Ingreso",
            imageUrl: 'assets/images/slide08.jpg',
            itemNumber: '08'
        },
        {
            longTitle: "Parque para Mascotas",
            shortTitle: "Parques",
            imageUrl: 'assets/images/slide09.jpg',
            itemNumber: '09'
        },
        {
            longTitle: "Parques Interactivos",
            shortTitle: "Parques",
            imageUrl: 'assets/images/slide10.jpg',
            itemNumber: '10'
        },
        {
            longTitle: "Parques para Niños",
            shortTitle: "Parques",
            imageUrl: 'assets/images/slide11.jpg',
            itemNumber: '11'
        },
    ];

    ngOnInit(): void {
    }

}
