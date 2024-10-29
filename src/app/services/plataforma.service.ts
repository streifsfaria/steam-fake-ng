import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plataforma } from '../models/plataforma';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {

  constructor() { }

  obterTodas(): Observable<Plataforma[]>{
    let plataformas = [
      {nome: "Mobile"},
      {nome: "Nintendo"},
      {nome: "PC"},
      {nome: "PlayStation"},
      {nome: "Xbox"},
    ]
    plataformas.sort((a, b) => a.nome.localeCompare(b.nome));
    return of(plataformas);
  }
}
