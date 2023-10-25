import { Component } from '@angular/core';
import { ServcioRestService } from '../servcio-rest.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent {
  public listCharacters: any[] = [];

  constructor(private restService: ServcioRestService) { }

  ngOnInit() {
    this.cargaData();
  }

  public cargaData() {
    this.restService.get('http://localhost:3000/api/v1/rickandmorty').subscribe((respuesta: any) => {
      this.listCharacters = respuesta;
    });
  }
}
