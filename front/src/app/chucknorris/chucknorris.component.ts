import { Component } from '@angular/core';
import { ServcioRestService } from '../servcio-rest.service';
import { AnimationPlayer } from '@angular/animations';

@Component({
  selector: 'app-chucknorris',
  templateUrl: './chucknorris.component.html',
  styleUrls: ['./chucknorris.component.css']
})
export class ChucknorrisComponent {
  public chucknorris: any;

  constructor(private restService: ServcioRestService) { }

  ngOnInit() {
    this.cargaData();
  }

  public cargaData() {
    this.restService.get('http://localhost:3000/api/v1/chucknorris').subscribe((respuesta: any) => {
      this.chucknorris = respuesta;
    });
  }
}