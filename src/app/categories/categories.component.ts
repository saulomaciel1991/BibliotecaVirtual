import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  categorias: String[] = ["Administração", "Artes", "Auto Ajuda", "Aventura", "Biografias e Memórias", "Ciências", "Concurso Público", "Contos e Crônicas", "Direito", "Economia","Esportes",
    "Ficção Cientifica", "Filosofia", "Geografia e Historia", "Humor", "Linguística","Medicina","Poesia","Policial","Psicologia",
    "Religião","Romance","Teoria e Crítica","Técnolohia","Terror e Suspense","Turismo"];

  ngOnInit() {

  }

}
