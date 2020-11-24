import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

//firebase
import { environment } from "./environments/environment";
//fimfirebase

//pages
import { ProdDescrComponent } from "./pages/details/prod-descr/prod-descr.component";
import { CardCategoriaComponent } from "./components/card-categoria/card-categoria.component";
import { ListaCategoriasComponent } from "./pages/lista-categorias/lista-categorias.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/header/header.component";
//fimpages

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    CardCategoriaComponent,
    ProdDescrComponent,
    ListaCategoriasComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
