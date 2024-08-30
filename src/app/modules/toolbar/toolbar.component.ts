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
      { label: 'Dashboard', icon: 'pi-chart-line', routerLink: '/dashboard' },
      { label: 'Produtos', icon: 'pi-box', routerLink: '/produtos'},
      { label: 'Categorias', icon: 'pi pi-inbox', routerLink: '/categorias' },
      { label: 'Marcas', icon: 'pi pi-user', routerLink: '/marcas' },
      { label: 'Fornecedor', icon: 'pi pi-user', routerLink: '/fornecedor' },
      { label: 'Entrada', icon: 'pi pi-user', routerLink: '/entrada' },
      { label: 'Venda', icon: 'pi pi-user', routerLink: '/venda' },
    ]
  }
}
