import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import { Venda } from '../../models/venda';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrl: './venda.component.css'
})
export class VendaComponent implements OnInit {
  vendas: Venda[] = [];
  novaVenda: Venda = new Venda();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getVenda();
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
}
