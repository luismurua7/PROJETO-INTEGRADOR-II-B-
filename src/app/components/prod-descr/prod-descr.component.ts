import { Component, Input } from "@angular/core";

@Component({
  selector: "prod-descr",
  templateUrl: "./prod-descr.component.html",
  styleUrls: ["./prod-descr.component.css"]
})
export class ProdDescrComponent {
  @Input() public nomeProduto: string;
  @Input() public imgSrc: string;
  @Input() public descricao: string;
  @Input() public preco: string;
}
