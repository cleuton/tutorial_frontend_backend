import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { DetalheNoticiaComponent } from './detalhe-noticia/detalhe-noticia.component';

const routes: Routes = [
  { path: '', component: ListaNoticiasComponent },
  { path: 'detalhes', component: DetalheNoticiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
