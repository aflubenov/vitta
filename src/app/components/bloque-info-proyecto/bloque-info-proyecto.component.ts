import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bloque-info-proyecto',
  templateUrl: './bloque-info-proyecto.component.html',
  styleUrls: ['./bloque-info-proyecto.component.scss']
})
export class BloqueInfoProyectoComponent implements OnInit {

    @Input() imgUrl:string = "";
    @Input() title:string = "";
    @Input() description:string = "";
    @Input() items:string[] = [];
    @Input() alignRight:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
