import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-seccion-serviciosy-diferenciales',
    templateUrl: './seccion-serviciosy-diferenciales.component.html',
    styleUrls: ['./seccion-serviciosy-diferenciales.component.scss']
})
export class SeccionServiciosyDiferencialesComponent implements OnInit {

    @Input() anchorId: string = "";
    constructor() {}

    ngOnInit(): void {
    }

}
