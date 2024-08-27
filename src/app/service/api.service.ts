import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto';
import {Marca} from "../models/marca";
import {Categoria} from "../models/categorias";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrlProducts = 'http://127.0.0.1:8000/api/product/';
  private apiUrlBrands = 'http://127.0.0.1:8000/api/brand/';
  private apiUrlCategory = 'http://127.0.0.1:8000/api/category/';

  constructor(private http: HttpClient) {
  }

  public getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrlProducts);
  }

  public postProdutos(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrlProducts, produto);
  }

  public getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.apiUrlBrands);
  }

  public postMarca(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(this.apiUrlBrands, marca);
  }

  public getCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrlCategory);
  }

  public postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrlCategory, categoria);
  }
}
