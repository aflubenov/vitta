import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-seccion-proyecto',
    templateUrl: './seccion-proyecto.component.html',
    styleUrls: ['./seccion-proyecto.component.scss']
})
export class SeccionProyectoComponent implements OnInit {

    constructor() {}
    @Input() anchorId: string = "";
    
    ngOnInit(): void {
    }

}
