import { Component } from '@angular/core';
import { ServcioRestService } from '../servcio-rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class materiasComponent {
  public listMaterias: any = [];
  public materiaForm: FormGroup;

  constructor(private restService: ServcioRestService, private fb: FormBuilder) {
    this.materiaForm = this.fb.group({
      nombreMateria: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.cargaData()
  }

  public cargaData() {
    this.restService.get('http://localhost:3000/api/v1/materia').subscribe(respuesta => {
      this.listMaterias = respuesta;
    });
  };

  public formularioVisible: boolean = false;
  public materiaSeleccionado: any;

  public mostrarFormularioEdicion(materia: any) {
    if (this.formularioVisible == false) {
      this.formularioVisible = true;
    }
    else {
      this.formularioVisible = false;
    }
    this.materiaSeleccionado = materia;
    this.materiaForm.setValue({
      nombreMateria: materia.nombreMateria,
    });
  }

  public actualizarmateria() {
    const datosActualizados = this.materiaForm.value;
    const idmateria = this.materiaSeleccionado.idMateria;

    this.restService.patch(`http://localhost:3000/api/v1/materia/${idmateria}`, datosActualizados).subscribe(
      (respuesta) => {
        console.log('materia actualizado', respuesta);
      },
      (error) => {
        console.error('Error al actualizar el materia', error);
      }
    );
    alert("materia actualizado");
    this.cargaData();
  }


  public delete(id: number) {
    this.restService.delete(`http://localhost:3000/api/v1/materia/${id}`).subscribe((respuesta) => {
      console.log('eliminado', respuesta)
    });
    alert('materia eliminado');
    this.cargaData();
  };

  public agregar() {
    if (this.formularioVisible == false) {
      this.formularioVisible = true;
      const nuevamateria = this.materiaForm.value;
      this.restService.post('http://localhost:3000/api/v1/materia', nuevamateria).subscribe((respuesta) => {
        console.log('materia agregado', respuesta)
      },
        (error) => {
          console.error('Error al crear el materia', error);
        }
      );
    }
    else {
      this.formularioVisible = false;
    }
    alert('materia creado con éxito');
    this.cargaData();
  };
};
