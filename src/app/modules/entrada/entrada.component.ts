import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from "../../service/api.service";
import { Entrada } from '../../models/entrada';
import {Marca} from "../../models/marca";
import {Fornecedor} from "../../models/fornecedor";
import {Produto} from "../../models/produto";

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.css',
  encapsulation: ViewEncapsulation.None
})
export class EntradaComponent implements OnInit {
  entradas: Entrada[] = [];
  fornecedores: Fornecedor[] = []
  produtos: Produto[] = []
  novaEntrada: Entrada = new Entrada();


  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getEntrada();
    this.getProduto();
    this.getFornecedor();

  }

  getEntrada() {
    this.api.getEntrada().subscribe(
        (response: Entrada[]) => {
          this.entradas = response;
          console.log('Array entradas:', this.entradas);

        },
        (error) => {
          console.log(error);
        }
    );
  }

  addEntrada() {
    this.api.postEntrada(this.novaEntrada).subscribe(
      (response: Entrada) => {
        this.entradas.push(response); // Assuming the API returns only the new entry
        this.novaEntrada = new Entrada(); // Clear the form for a new entry
      },
      (error) => {
        console.log(error);
      }
    );
  }



  getFornecedor() {
    this.api.getFornecedor().subscribe(
      (response: Fornecedor[]) => {
        this.fornecedores = response;
        console.log('Fornecedores:', this.fornecedores);
      },
      (error) => {
        console.log('Erro ao buscar fornecedores:', error);
      }
    );
  }


  getProduto() {
    this.api.getProdutos().subscribe(
      (response: Produto[]) => {
        this.produtos = response;
        console.log('Produtos:', this.produtos);
      },
      (error) => {
        console.log('Erro ao buscar produtos:', error);
      }
    );
  }

}
