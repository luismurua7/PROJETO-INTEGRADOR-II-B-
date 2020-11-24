import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdDescrComponent } from "./pages/details/prod-descr/prod-descr.component";
import { ListaCategoriasComponent } from "./pages/lista-categorias/lista-categorias.component";

const routes: Routes = [
  { path: "home", component: ListaCategoriasComponent }, // inicio
  { path: "details", component: ProdDescrComponent } // produto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
