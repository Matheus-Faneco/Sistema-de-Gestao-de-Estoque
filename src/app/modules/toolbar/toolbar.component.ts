import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[]

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
      { label: 'Produtos', icon: 'pi pi-list', routerLink: '/produtos'},
      { label: 'Categorias', icon: 'pi pi-inbox', routerLink: '/categorias' },
      { label: 'Marcas', icon: 'pi pi-user', routerLink: '/marcas' },
      { label: 'Fornecedor', icon: 'pi pi-user', routerLink: '/fornecedor' },
      { label: 'Entrada', icon: 'pi pi-user', routerLink: '/entrada' },
      { label: 'Venda', icon: 'pi pi-user', routerLink: '/venda' },
    ]
  }
}
