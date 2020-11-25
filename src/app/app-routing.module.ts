import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroProdutoComponent } from "./pages/cadastro-produto/cadastro-produto.component";
import { DefinirPromocoesComponent } from "./pages/definir-promocao/definir-promocao.component";
import { ListaCategoriasComponent } from "./pages/lista-categorias/lista-categorias.component";
import { ListaProdutosComponent } from "./pages/lista-produtos/lista-produtos.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  { path: "", component: ListaCategoriasComponent },
  { path: "produtos", component: ListaProdutosComponent },
  { path: "cadastro", component: CadastroProdutoComponent },
  { path: "promocao", component: DefinirPromocoesComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
