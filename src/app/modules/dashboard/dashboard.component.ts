import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Entrada } from "../../models/entrada";
import { Venda } from '../../models/venda';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataEntrada: Entrada[] = [];
  dataVenda: Venda[] = [];
  data: ChartData<'line'>;
  options: ChartOptions<'line'>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getEntrada();
    this.getVendas()


    // Dashboard
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
          }
        }
      }
    };
  }


  atualizarGrafico() {
    const documentStyle = getComputedStyle(document.documentElement);
    this.data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [
        {
          label: 'Entrada de produtos',
          data: this.dataEntrada.map(entry => entry.quantity),
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
        },
        {
          label: 'Venda de Produtos',
          data: this.dataVenda.map(entry => entry.quantity),
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4
        }
      ]
    };
  }

  getEntrada() {
    this.api.getEntrada().subscribe(
      (response: Entrada[]) => {
        this.dataEntrada = response;
        this.atualizarGrafico();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getVendas() {
    this.api.getVenda().subscribe(
      (response: Venda[]) => {
        this.dataVenda = response;
        this.atualizarGrafico();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}


