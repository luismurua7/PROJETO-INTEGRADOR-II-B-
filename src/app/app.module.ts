import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CardCategoriaComponent } from "./card-categoria/card-categoria.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CardCategoriaComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
