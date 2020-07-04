import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { MapsComponent } from './components/maps/maps.component';
import { CotactosComponent } from './components/cotactos/cotactos.component';
import { EmailComponent } from './components/email/email.component';
import { PagoComponent } from './components/pago/pago.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { NoticiaComponent } from './components/noticia/noticia.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'actividad', component: ActivitiesComponent },
	{ path: 'maps', component: MapsComponent },
	{ path: 'contacto', component: CotactosComponent },
	{ path: 'email', component: EmailComponent },
	{ path: 'pago', component: PagoComponent },
	{ path: 'novedades', component: NovedadesComponent },
	{ path: 'noticia', component: NoticiaComponent },
	{ path: '**', pathMatch:'full',redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
