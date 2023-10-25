import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServcioRestService {

  constructor(private http: HttpClient) { }
  public get(url: string) {
    return this.http.get(url)
  }

  /*public getById(url: string, id: number) {
    const elemento = `${url}/${id}`;
    return this.http.get(elemento);
  }*/

  public post(url: string, data: any) {
    return this.http.post(url, data);
  }

  public patch(url: string, data: any, options?: any) {
    const elemento = `${url}`;
    return this.http.patch(elemento, data, options);
  }

  public delete(url: string) {
    return this.http.delete(url)
  }

}