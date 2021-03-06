import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionarEstudiantesComponent } from './modulos/gestionar-estudiantes/gestionar-estudiantes.component';
import { GestionarEnfermedadesComponent } from './modulos/gestionar-enfermedades/gestionar-enfermedades.component';
import { HttpClientModule } from '@angular/common/http';
import { GuardarEstudiantesComponent } from './modulos/guardar-estudiantes/guardar-estudiantes.component';
import { GuardarEnfermedadesComponent } from './modulos/guardar-enfermedades/guardar-enfermedades.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalConfirmarEliminarComponent } from './modulos/modal-confirmar-eliminar/modal-confirmar-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionarEstudiantesComponent,
    GestionarEnfermedadesComponent,
    GuardarEstudiantesComponent,
    GuardarEnfermedadesComponent,
    ModalConfirmarEliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
