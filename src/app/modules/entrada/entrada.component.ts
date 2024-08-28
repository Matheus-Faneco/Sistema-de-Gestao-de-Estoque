import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import { Entrada } from '../../models/entrada';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.css'
})
export class EntradaComponent implements OnInit {
  entradas: Entrada[] = [];
  novaEntrada: Entrada = new Entrada();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getEntrada();
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
          this.entradas.push(response);
          console.log('Marca adicionada com sucesso!');
          this.novaEntrada = new Entrada();
        },
        (error) => {
          console.log(error);
        }
    );
  }
}
