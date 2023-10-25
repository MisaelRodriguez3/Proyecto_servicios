import { Component, OnInit } from '@angular/core';
import { ServcioRestService } from '../servcio-rest.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  public listCategorias: any[] = [];

  constructor(private restService: ServcioRestService) { }

  ngOnInit() {
    this.cargaData();
  }

  public cargaData() {
    this.restService.get('http://localhost:3000/api/v1/meal').subscribe((respuesta: any) => {
      this.listCategorias = respuesta.categories;
    });
  }
}
