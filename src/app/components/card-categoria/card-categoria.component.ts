import { Component, Input } from "@angular/core";

@Component({
  selector: "card-categoria",
  templateUrl: "./card-categoria.component.html",
  styleUrls: ["./card-categoria.component.css"]
})
export class CardCategoriaComponent {
  @Input() public nomeCategoria: string;
  @Input() public imgSrc: string;
}
