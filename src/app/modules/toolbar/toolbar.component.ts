import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[]

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', routerLink: '/dashboard' },
      { label: 'Produtos', routerLink: '/produtos'},
      { label: 'Categorias', routerLink: '/categorias' },
      { label: 'Marcas', routerLink: '/marcas' },
      { label: 'Fornecedor', routerLink: '/fornecedor' },
      { label: 'Entrada', routerLink: '/entrada' },
      { label: 'Venda',  routerLink: '/venda' },
    ]
  }
}
