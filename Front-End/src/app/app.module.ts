import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxDataTableModule } from "angular-9-datatable";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { MapsComponent } from './components/maps/maps.component';
import { CotactosComponent } from './components/cotactos/cotactos.component';
import { EmailComponent } from './components/email/email.component';
import { LoginComponent } from './components/login/login.component';
import { AfiliadoComponent } from './components/afiliado/afiliado.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ServicioComponent } from './components/servicio/servicio.component';

import { PagoComponent } from './components/pago/pago.component';
import { NoticiaComponent } from './components/noticia/noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ActivitiesComponent,
    MapsComponent,
    CotactosComponent,
    EmailComponent,
    LoginComponent,
    PagoComponent,
    
    ServicioComponent,
    UsuarioComponent,
    NoticiaComponent,
    AfiliadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDataTableModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
