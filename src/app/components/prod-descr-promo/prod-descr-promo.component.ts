import { Component, Input } from "@angular/core";

@Component({
  selector: "app-prod-descr-promo",
  templateUrl: "./prod-descr-promo.component.html",
  styleUrls: ["./prod-descr-promo.component.css"]
})
export class ProdDescrPromoComponent {
  @Input() public nomeProduto: string;
  @Input() public imgSrc: string;
  @Input() public descricao: string;
  @Input() public preco: string;
  @Input() public local: string;
}
