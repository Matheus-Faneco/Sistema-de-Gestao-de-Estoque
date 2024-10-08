import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto';
import {Marca} from "../models/marca";
import {Categoria} from "../models/categorias";
import {Entrada} from "../models/entrada";
import {Venda} from "../models/venda";
import {Fornecedor} from "../models/fornecedor";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrlProducts = 'http://127.0.0.1:8000/api/product/';
  private apiUrlBrands = 'http://127.0.0.1:8000/api/brand/';
  private apiUrlCategory = 'http://127.0.0.1:8000/api/category/';
  private apiUrlSupplier = 'http://127.0.0.1:8000/api/supplier/';
  private apiUrlInflow = 'http://127.0.0.1:8000/api/inflow/';
  private apiUrlOutflow = 'http://127.0.0.1:8000/api/outflow/';

  constructor(private http: HttpClient) {
  }

  public getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrlProducts);
  }

  public postProdutos(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrlProducts, produto);
  }

  public deleteProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlProducts}${id}/`);
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

  public getEntrada(): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(this.apiUrlInflow);
  }

  public postEntrada(entrada: Entrada): Observable<Entrada> {
    return this.http.post<Entrada>(this.apiUrlInflow, entrada);
  }

  public getVenda(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.apiUrlOutflow);
  }

  public postVenda(venda: Venda): Observable<Venda> {
    return this.http.post<Venda>(this.apiUrlOutflow, venda);
  }

  public getFornecedor(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.apiUrlSupplier);
  }

  public postFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.apiUrlSupplier, fornecedor);
  }

}
