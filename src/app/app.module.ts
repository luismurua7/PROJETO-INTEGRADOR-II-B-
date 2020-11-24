import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

import { ProdDescrComponent } from "./pages/details/prod-descr/prod-descr.component";
import { CardCategoriaComponent } from "./components/card-categoria/card-categoria.component";
import { ListaCategoriasComponent } from "./pages/lista-categorias/lista-categorias.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { CadastroProdutoComponent } from "./pages/cadastro-produto/cadastro-produto.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    CardCategoriaComponent,
    ProdDescrComponent,
    ListaCategoriasComponent,
    HeaderComponent,
    CadastroProdutoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
