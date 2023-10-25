import { Component } from '@angular/core';
import { ServcioRestService } from './servcio-rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-servicios';

  public visibleAlumnos: boolean = false;
  public visibleMaterias: boolean = false;
  public visibleProfesor: boolean = false;
  public visibleRick: boolean = false;
  public visibleComida: boolean = false;
  public visibleChuk: boolean = false;

  public mostrarFormulario0() {
    if (this.visibleAlumnos == false) {
      this.visibleAlumnos = true;
    }
    else {
      this.visibleAlumnos = false;
    }
  }

  public mostrarFormulario() {
    if (this.visibleMaterias == false) {
      this.visibleMaterias = true;
    }
    else {
      this.visibleMaterias = false;
    }
  }

  public mostrarFormulario2() {
    if (this.visibleProfesor == false) {
      this.visibleProfesor = true;
    }
    else {
      this.visibleProfesor = false;
    }
  }

  public mostrarFormulario3() {
    if (this.visibleRick == false) {
      this.visibleRick = true;
    }
    else {
      this.visibleRick = false;
    }
  }

  public mostrarFormulario4() {
    if (this.visibleComida == false) {
      this.visibleComida = true;
    }
    else {
      this.visibleComida = false;
    }
  }

  public mostrarFormulario5() {
    if (this.visibleChuk == false) {
      this.visibleChuk = true;
    }
    else {
      this.visibleChuk = false;
    }
  }
}
