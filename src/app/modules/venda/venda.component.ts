import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import { Venda } from '../../models/venda';
import {Produto} from "../../models/produto";

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.css'
})
export class VendaComponent implements OnInit {
  vendas: Venda[] = [];
  produtos: Produto[] = []
  novaVenda: Venda = new Venda();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getVenda();
    this.getProduto();
  }

  getVenda() {
    this.api.getVenda().subscribe(
        (response: Venda[]) => {
          this.vendas = response;
          console.log('Array entradas:', this.vendas);
        },
        (error) => {
          console.log(error);
        }
    );
  }

  addVenda() {
    this.api.postVenda(this.novaVenda).subscribe(
        (response: Venda) => {
          this.vendas.push(response);
          console.log('Marca adicionada com sucesso!');
          this.novaVenda = new Venda();
        },
        (error) => {
          console.log(error);
        }
    );
  }

  getProduto() {
    this.api.getProdutos().subscribe(
      (response: Produto[]) => {
        this.produtos = response;
        console.log('Array produtos:', this.produtos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
