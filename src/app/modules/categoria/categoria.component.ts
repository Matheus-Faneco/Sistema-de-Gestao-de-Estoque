import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Categoria } from '../../models/categorias';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[] = [];
  novaCategoria: Categoria = new Categoria();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCategoria();
  }

  getCategoria() {
    this.api.getCategoria().subscribe(
      (response: Categoria[]) => {
        this.categorias = response;
        console.log('Array categorias:', this.categorias);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addCategoria() {
    this.api.postCategoria(this.novaCategoria).subscribe(
      (response: Categoria) => {
        this.categorias.push(response);
        console.log('Categoria adicionada com sucesso!');
        this.novaCategoria = new Categoria();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
