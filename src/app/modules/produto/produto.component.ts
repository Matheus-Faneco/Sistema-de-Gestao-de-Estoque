import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Produto } from '../../models/produto';
import { ApiService } from '../../service/api.service';
import {Marca} from "../../models/marca";
import {Categoria} from "../../models/categorias";
import {DialogConfirmComponent} from "../../dialog-confirm/dialog-confirm.component";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  produtoSelecionado: Produto = new Produto();
  marcas: Marca[] = [];
  categorias: Categoria[] = [];

  constructor(private api: ApiService, private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.getApi();
    this.getMarcas();
    this.getCategorias();
  }

  getApi() {
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

  getMarcas() {
    this.api.getMarcas().subscribe(
      (response: Marca[]) => {
        this.marcas = response;
        console.log('Marcas:', this.marcas);
      },
      (error) => {
        console.log('Erro ao buscar marcas:', error);
      }
    );
  }

  getCategorias() {
    this.api.getCategoria().subscribe(
      (response: Categoria[]) => {
        this.categorias = response;
        console.log('Categorias:', this.categorias);
      },
      (error) => {
        console.log('Erro ao buscar categorias:', error);
      }
    );
  }

  addProduto() {
    this.api.postProdutos(this.produtoSelecionado).subscribe(
      (response: Produto) => {
        this.produtos.push(response);
        console.log('Produto adicionado com sucesso!');
        this.produtoSelecionado = new Produto();
      },
      (error) => {
        console.log('Erro ao adicionar produto:', error);
      }
    );
  }

  deleteProduto(id: number): void {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '250px',
      data: { message: 'Você tem certeza que deseja excluir este produto?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.api.deleteProduto(id).subscribe(
          response => {
            console.log('Dados deletados', response);
            this.produtos = this.produtos.filter(produto => produto.id !== id);
          },
          error => console.error('Erro ao deletar dados', error)
        );
      }
    });
  }
}
