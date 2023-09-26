import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {
  @Input() title:string=""
  @Input() plataform:string[] = []
  @Input() price:string =""
  @Input() format:string=""
  @Input() label_text: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
