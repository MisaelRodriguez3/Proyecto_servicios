import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';
import { MealComponent } from './meal/meal.component';
import { ChucknorrisComponent } from './chucknorris/chucknorris.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { materiasComponent } from './materias/materias.component';
import { profesoresComponent } from './profesores/profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    RickandmortyComponent,
    MealComponent,
    ChucknorrisComponent,
    AlumnosComponent,
    materiasComponent,
    profesoresComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
