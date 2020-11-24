import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";

//firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "./environments/environment";
//fimfirebase

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [AppComponent, CardCategoriaComponent, ProdDescrComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
