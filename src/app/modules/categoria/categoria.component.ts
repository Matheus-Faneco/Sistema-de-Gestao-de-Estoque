import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  nomeCategoria: string;
  descricao: string;
  protected readonly AnimationTimeline = AnimationTimeline;
}
