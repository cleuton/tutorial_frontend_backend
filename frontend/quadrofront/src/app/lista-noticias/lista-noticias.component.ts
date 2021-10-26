import { Component, OnInit } from '@angular/core';
import { Noticia } from '../noticia';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {
  
  noticias!: Noticia[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.noticias = [];
    this.http.get<any>("/api/").subscribe(dados => {
      this.noticias = dados._embedded.api;
    });
  }

}
