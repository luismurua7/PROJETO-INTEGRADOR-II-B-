import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";

//pages
import { ProdDescrComponent } from "./pages/details/prod-descr/prod-descr.component";
import { CardCategoriaComponent } from "./pages/inicio/card-categoria/card-categoria.component";
//fimpages

const routes: Routes = [
  { path: "", component: CardCategoriaComponent }, // inicio
  { path: "details", component: ProdDescrComponent } // produto
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [AppComponent, CardCategoriaComponent, ProdDescrComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
