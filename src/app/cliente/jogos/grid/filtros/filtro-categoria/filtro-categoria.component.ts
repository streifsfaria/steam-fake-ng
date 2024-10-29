import { Component } from '@angular/core';
import { Categoria } from '../../../../../models/categoria';
import { CategoriaService } from '../../../../../services/categoria.service';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtro-categoria',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './filtro-categoria.component.html',
  styleUrl: './filtro-categoria.component.css'
})
export class FiltroCategoriaComponent {
  categoriasDisponiveis!: Categoria[];
  categoria!: Categoria[];

  constructor(private categoriaService: CategoriaService){
    this.categoriaService.obterTodas().subscribe({
      next: (categorias) => this.categoriasDisponiveis = categorias,
      error: (erro) => {
        alert("ocorreu um erro ao carregar as Categotias")
        console.error(erro)
      }
    });
  }
}
