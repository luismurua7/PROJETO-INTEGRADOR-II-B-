import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroProdutoComponent } from "./pages/cadastro-produto/cadastro-produto.component";
import { ProdDescrComponent } from "./pages/details/prod-descr/prod-descr.component";
import { ListaCategoriasComponent } from "./pages/lista-categorias/lista-categorias.component";

const routes: Routes = [
  { path: "", component: ListaCategoriasComponent },
  { path: "details", component: ProdDescrComponent },
  { path: "cadastro", component: CadastroProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
