import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title:string =""
  @Input() plataform:string[] = []
  @Input() price:string =""
  @Input() format:string=""
  @Input() label_text: string = ""
  @Input() img:string=""
  @Input() label_mode: string = "flex"
  constructor() { }

  ngOnInit(): void {
  }

}
