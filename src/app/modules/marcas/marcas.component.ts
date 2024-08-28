import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Marca} from "../../models/marca";

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent implements OnInit {
  marcas: Marca[] = [];
  novaMarca: Marca = new Marca();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getMarcas();
  }

  getMarcas() {
    this.api.getMarcas().subscribe(
      (response: Marca[]) => {
        this.marcas = response;
        console.log('Array marcas:', this.marcas);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addMarca() {
    this.api.postMarca(this.novaMarca).subscribe(
      (response: Marca) => {
        this.marcas.push(response);
        console.log('Marca adicionada com sucesso!');
        this.novaMarca = new Marca();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
