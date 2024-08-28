import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {ProdutoComponent} from "./modules/produto/produto.component";
import {CategoriaComponent} from "./modules/categoria/categoria.component";
import {MarcasComponent} from "./modules/marcas/marcas.component";
import {FornecedorComponent} from "./modules/fornecedor/fornecedor.component";
import {EntradaComponent} from "./modules/entrada/entrada.component";
import {VendaComponent} from "./modules/venda/venda.component";

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "produtos", component: ProdutoComponent},
  {path: "categorias", component: CategoriaComponent},
  {path: "marcas", component: MarcasComponent},
  {path: "fornecedor", component: FornecedorComponent},
  {path: "entrada", component: EntradaComponent},
  {path: "venda", component: VendaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
