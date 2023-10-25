import { Component } from '@angular/core';
import { ServcioRestService } from '../servcio-rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  public listAlumnos: any = [];
  public alumnoForm: FormGroup;

  constructor(private restService: ServcioRestService, private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cargaData()
  }

  public cargaData() {
    this.restService.get('http://localhost:3000/api/v1/alumno').subscribe(respuesta => {
      this.listAlumnos = respuesta;
    });
  };

  public formularioVisible: boolean = false;
  public alumnoSeleccionado: any;

  public mostrarFormularioEdicion(alumno: any) {
    if (this.formularioVisible == false) {
      this.formularioVisible = true;
    }
    else {
      this.formularioVisible = false;
    }
    this.alumnoSeleccionado = alumno;
    this.alumnoForm.setValue({
      nombres: alumno.nombres,
      apellidos: alumno.apellidos,
      telefono: alumno.telefono,
      direccion: alumno.direccion
    });
  }

  public actualizarAlumno() {
    const datosActualizados = this.alumnoForm.value;
    const idAlumno = this.alumnoSeleccionado.idAlumnos;

    this.restService.patch(`http://localhost:3000/api/v1/alumno/${idAlumno}`, datosActualizados).subscribe(
      (respuesta) => {
        console.log('Alumno actualizado', respuesta);
      },
      (error) => {
        console.error('Error al actualizar el alumno', error);
      }
    );
    alert("Alumno actualizado");
    this.cargaData();
  }


  public delete(id: number) {
    this.restService.delete(`http://localhost:3000/api/v1/alumno/${id}`).subscribe((respuesta) => {
      console.log('eliminado', respuesta)
    });
    alert('Alumno eliminado');
    this.cargaData();
  };

  public agregar() {
    const nuevoAlumno = this.alumnoForm.value;
    this.restService.post('http://localhost:3000/api/v1/alumno', nuevoAlumno).subscribe((respuesta) => {
      console.log('alumno agregado', respuesta)
    },
      (error) => {
        console.error('Error al crear el alumno', error);
      }
    );
    alert('Alumno creado con éxito');
    this.cargaData();
  };
};