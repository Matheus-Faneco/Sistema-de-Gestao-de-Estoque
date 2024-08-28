import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Fornecedor} from "../../models/fornecedor";

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css'
})
export class FornecedorComponent implements OnInit {
  fornecedores: Fornecedor[] = [];
  novoFornecedor: Fornecedor = new Fornecedor();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getFornecedor();
  }

  getFornecedor() {
    this.api.getFornecedor().subscribe(
      (response: Fornecedor[]) => {
        this.fornecedores = response;
        console.log('Array fornecedores:', this.fornecedores);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addFornecedor() {
    this.api.postFornecedor(this.novoFornecedor).subscribe(
      (response: Fornecedor) => {
        this.fornecedores.push(response);
        console.log('Fonecedores adicionados com sucesso!');
        this.novoFornecedor = new Fornecedor();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
