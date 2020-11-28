import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { CardCategoriaComponent } from "./components/card-categoria/card-categoria.component";
import { ListaCategoriasComponent } from "./pages/lista-categorias/lista-categorias.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/header/header.component";

import { CadastroProdutoComponent } from "./pages/cadastro-produto/cadastro-produto.component";
import { ProdDescrComponent } from "./components/prod-descr/prod-descr.component";
import { ListaProdutosComponent } from "./pages/lista-produtos/lista-produtos.component";
import { DefinirPromocoesComponent } from "./pages/definir-promocao/definir-promocao.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProdDescrPromoComponent } from './components/prod-descr-promo/prod-descr-promo.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    CardCategoriaComponent,
    ProdDescrComponent,
    ListaCategoriasComponent,
    HeaderComponent,
    CadastroProdutoComponent,
    ListaProdutosComponent,
    DefinirPromocoesComponent,
    LoginComponent,
    ProdDescrPromoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
