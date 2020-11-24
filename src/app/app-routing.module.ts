import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroProdutoComponent } from "./pages/cadastro-produto/cadastro-produto.component";
import { ListaCategoriasComponent } from "./pages/lista-categorias/lista-categorias.component";
import { ListaProdutosComponent } from "./pages/lista-produtos/lista-produtos.component";

const routes: Routes = [
  { path: "", component: ListaCategoriasComponent },
  { path: "details", component: ListaProdutosComponent },
  { path: "cadastro", component: CadastroProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
