import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Servicio } from '../paginas/servicio/servicio';
import { Inicio } from '../paginas/inicio/inicio';
import { Quienesomos } from '../paginas/quienesomos/quienesomos';
import { Contacto } from '../paginas/contacto/contacto';


export const routes: Routes = [
  { path: '', component: Inicio, title: 'Inicio' },
  { path: 'quienesomos', component: Quienesomos, title: 'Quiénes Somos' },
  { path: 'servicio', component: Servicio, title: 'Servicios' },
  { path: 'contacto', component: Contacto, title: 'Contactos' },
  { path: '**', redirectTo: '' }
];