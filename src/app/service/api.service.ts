import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto';
import {Marca} from "../models/marca";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrlProducts = 'http://127.0.0.1:8000/api/product/';// URL da API
  private apiUrlBrands = 'http://127.0.0.1:8000/api/brand/';// URL da API

  constructor(private http: HttpClient) {
  }

  public getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrlProducts);
  }

  public getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.apiUrlBrands);
  }

  public postMarca(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(this.apiUrlBrands, marca);
  }
}
