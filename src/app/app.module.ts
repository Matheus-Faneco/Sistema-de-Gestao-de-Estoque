import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartConfiguration } from 'chart.js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import {CardModule} from "primeng/card";
import {ChartModule} from "primeng/chart";
import { ProdutoComponent } from './modules/produto/produto.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./service/api.service";
import { ToolbarComponent } from './modules/toolbar/toolbar.component';
import {ToolbarModule} from "primeng/toolbar";
import {Button, ButtonDirective} from "primeng/button";
import {ChipsModule} from "primeng/chips";
import {TabMenuModule} from "primeng/tabmenu";
import {PrimeIcons} from "primeng/api";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import { CategoriaComponent } from './modules/categoria/categoria.component';
import { MarcasComponent } from './modules/marcas/marcas.component';
import {FormsModule} from "@angular/forms";
import {MultiSelectModule} from "primeng/multiselect";
import {ListboxModule} from "primeng/listbox";
import {InputTextareaModule} from "primeng/inputtextarea";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatOption, MatSelect} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProdutoComponent,
    ProdutoComponent,
    ToolbarComponent,
    CategoriaComponent,
    MarcasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ChartModule,
    HttpClientModule,
    ToolbarModule,
    ButtonDirective,
    Button,
    ChipsModule,
    TabMenuModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    MultiSelectModule,
    ListboxModule,
    InputTextareaModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelect,
    MatOption,
  ],
  providers: [ApiService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
