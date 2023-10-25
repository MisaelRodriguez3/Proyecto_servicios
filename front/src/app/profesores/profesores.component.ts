import { Component } from '@angular/core';
import { ServcioRestService } from '../servcio-rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class profesoresComponent {
  public listProfesores: any = [];
  public profesorForm: FormGroup;

  constructor(private restService: ServcioRestService, private fb: FormBuilder) {
    this.profesorForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cargaData()
  }

  public cargaData() {
    this.restService.get('http://localhost:3000/api/v1/profesor').subscribe(respuesta => {
      this.listProfesores = respuesta;
    });
  };

  public formularioVisible: boolean = false;
  public profesoreseleccionado: any;

  public mostrarFormularioEdicion(profesor: any) {
    if (this.formularioVisible == false) {
      this.formularioVisible = true;
    }
    else {
      this.formularioVisible = false;
    }
    this.profesoreseleccionado = profesor;
    this.profesorForm.setValue({
      nombres: profesor.nombres,
      apellidos: profesor.apellidos,
      telefono: profesor.telefono,
      direccion: profesor.direccion
    });
  }

  public actualizarprofesor() {
    const datosActualizados = this.profesorForm.value;
    const idprofesor = this.profesoreseleccionado.idprofesores;

    this.restService.patch(`http://localhost:3000/api/v1/profesor/${idprofesor}`, datosActualizados).subscribe(
      (respuesta) => {
        console.log('profesor actualizado', respuesta);
      },
      (error) => {
        console.error('Error al actualizar el profesor', error);
      }
    );
    alert("profesor actualizado");
    this.cargaData();
  }


  public delete(id: number) {
    this.restService.delete(`http://localhost:3000/api/v1/profesor/${id}`).subscribe((respuesta) => {
      console.log('eliminado', respuesta)
    });
    alert('profesor eliminado');
    this.cargaData();
  };

  public agregar() {
    const nuevoprofesor = this.profesorForm.value;
    this.restService.post('http://localhost:3000/api/v1/profesor', nuevoprofesor).subscribe((respuesta) => {
      console.log('profesor agregado', respuesta)
    },
      (error) => {
        console.error('Error al crear el profesor', error);
      }
    );
    alert('profesor creado con éxito');
    this.cargaData();
  };
};