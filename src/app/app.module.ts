import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { StartComponent } from './pages/start/start.component';
import { LogoymenuComponent } from './components/logoymenu/logoymenu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SeccionProyectoComponent } from './components/seccion-proyecto/seccion-proyecto.component';
import { SeccionMapaComponent } from './components/seccion-mapa/seccion-mapa.component';
import { SeccionFilosofiaComponent } from './components/seccion-filosofia/seccion-filosofia.component';
import { SeccionBeneficiosComponent } from './components/seccion-beneficios/seccion-beneficios.component';
import { SeccionServiciosyDiferencialesComponent } from './components/seccion-serviciosy-diferenciales/seccion-serviciosy-diferenciales.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { SeccionSitaComponent } from './components/seccion-sita/seccion-sita.component';
import { FomrularioContactoComponent } from './components/fomrulario-contacto/fomrulario-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    StartComponent,
    LogoymenuComponent,
    CarouselComponent,
    SeccionProyectoComponent,
    SeccionMapaComponent,
    SeccionFilosofiaComponent,
    SeccionBeneficiosComponent,
    SeccionServiciosyDiferencialesComponent,
    PiePaginaComponent,
    SeccionSitaComponent,
    FomrularioContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
