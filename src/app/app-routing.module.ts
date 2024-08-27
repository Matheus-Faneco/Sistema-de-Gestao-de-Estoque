import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {ProdutoComponent} from "./modules/produto/produto.component";
import {CategoriaComponent} from "./modules/categoria/categoria.component";
import {MarcasComponent} from "./modules/marcas/marcas.component";

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "produtos", component: ProdutoComponent},
  {path: "categorias", component: CategoriaComponent},
  {path: "marcas", component: MarcasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
