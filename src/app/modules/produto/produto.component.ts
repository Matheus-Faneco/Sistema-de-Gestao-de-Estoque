import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';  // Corrigir o caminho do import
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']  // Corrigir styleUrl para styleUrls
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];  // Define a propriedade para armazenar os produtos
  marcaSelecionada: Produto[];
  constructor(private api: ApiService) { }  // Injeção do serviço no construtor

  ngOnInit() {
    this.getApi();
  }

  getApi() {
    this.api.getProdutos().subscribe(
      (response: Produto[]) => {
        this.produtos = response;  // Armazena a resposta na propriedade produtos
        console.log('Array produtos:', this.produtos);
      },
      (error) => {
        console.log(error);  // Exibe o erro no console
      }
    );
  }
  protected readonly Produto = Produto;
}
