import {Component, OnInit} from '@angular/core';

export interface menuItem {
    name: string,
    link: string,
    isActive: boolean
}
@Component({
    selector: 'app-logoymenu',
    templateUrl: './logoymenu.component.html',
    styleUrls: ['./logoymenu.component.scss']
})
export class LogoymenuComponent implements OnInit {

    constructor() {}

    menuItems: menuItem[] = [
        {
            name: "Home",
            link: "#home",
            isActive: true
        },
        {
            name: "El proyecto",
            link: "#proyecto",
            isActive: false,
        },
        {
            name: "Conectate",
            link: "#conectate",
            isActive: false
        },
        {
            name: "Ubicación",
            link: "#ubicacion",
            isActive: false
        },
        {
            name: "Servicios",
            link: "#servicios",
            isActive: false
        }
    ]
    ngOnInit(): void {
    }

    setActive(p: menuItem) {
        for(let i = 0; i < this.menuItems.length; i ++) {
            this.menuItems[i].isActive = false;
            if(this.menuItems[i].name == p.name) {
                this.menuItems[i].isActive = true;
            }
        }
    }
}
