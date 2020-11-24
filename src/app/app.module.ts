import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from "@angular/fire";
import { FormsModule } from "@angular/forms";
import { Routes } from "@angular/router";

import { environment } from "./environments/environment";
import { AppComponent } from "./app.component";
import { ProdDescrComponent } from "./pages/details/prod-descr/prod-descr.component";
import { CardCategoriaComponent } from "./pages/inicio/card-categoria/card-categoria.component";

const routes: Routes = [
  { path: "", component: CardCategoriaComponent }, // inicio
  { path: "details", component: ProdDescrComponent } // produto
];

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CardCategoriaComponent, ProdDescrComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
