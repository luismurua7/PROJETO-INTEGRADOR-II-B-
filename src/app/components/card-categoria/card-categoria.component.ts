import { Component, Input } from "@angular/core";

@Component({
  selector: "card-categoria",
  templateUrl: "./components/card-categoria/card-categoria.component.html",
  styleUrls: ["./components/card-categoria/card-categoria.component.css"]
})
export class CardCategoriaComponent {
  @Input() public nomeCategoria: string;
  @Input() public imgSrc: string;
}
