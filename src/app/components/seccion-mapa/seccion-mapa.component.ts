import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-seccion-mapa',
    templateUrl: './seccion-mapa.component.html',
    styleUrls: ['./seccion-mapa.component.scss']
})
export class SeccionMapaComponent implements OnInit {

    @Input() anchorId: string = ""; 
    constructor() {}


    ngOnInit(): void {
    }

}
