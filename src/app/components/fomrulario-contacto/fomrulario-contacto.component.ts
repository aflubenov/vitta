import {Component, OnInit} from '@angular/core';
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';

@Component({
    selector: 'app-fomrulario-contacto',
    templateUrl: './fomrulario-contacto.component.html',
    styleUrls: ['./fomrulario-contacto.component.scss']
})
export class FomrularioContactoComponent implements OnInit {

    public sendingEmail: boolean = false;

    constructor() {}

    ngOnInit(): void {
    }

    private marcarObligatorio(pControl) {
        let elemento = window.document.getElementsByName(pControl)[0];
        let tooltip = window.document.getElementsByName("campoobligatorio")[0];

        tooltip.style.setProperty("opacity", "100");

        (<any>window).Popper.createPopper(elemento, tooltip, {
            placement: 'bottom',
        });
    }

    private validarFormulario(p: HTMLFormElement): boolean {

        /** validaciones */
        if (!p.nombre.value) {
            this.marcarObligatorio("nombre");
            return false;
        }

        if (!p.email.value && !p.celular.value) {
            this.marcarObligatorio("emailycelular");
            return false;
        }

        if (!p.mensaje.value) {
            this.marcarObligatorio("mensaje");
            return false;
        }
        if (!p.celularchk.checked && !p.emailchk.checked) {
            this.marcarObligatorio("celyemailchk");
            return false;
        }

        return true;
    }

    private limpiarFormulario(p: HTMLFormElement): void {
        p.nombre.value = "";
        p.email.value = "";
        p.celular.value = "";
        p.mensaje.value = "";
        p.celularchk.checked = false;
        p.emailchk.checked = false;
    }

    enviarForm(e: Event): boolean {
        e.preventDefault();

        let formulario: HTMLFormElement = e.target as HTMLFormElement;


        if (!this.validarFormulario(formulario)) {
            return false;
        }

        formulario.celularchk.value = formulario.celularchk.checked ? "si" : "no"
        formulario.emailchk.value = formulario.emailchk.checked ? "si" : "no"

        this.sendingEmail = true;
        emailjs.sendForm('comevol_id', 'template_kdxkep7', e.target as HTMLFormElement, 'user_yQWReIKlmIa21BNdihHgc')
            .then((result: EmailJSResponseStatus) => {
                alert('Gracias por tu interés, en breve nos estaremos contactando.');
                this.sendingEmail = false;
                this.limpiarFormulario(formulario);
            }, (error) => {
                console.log(error.text);
            });

        return false;
    }
}
