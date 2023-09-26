import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})

export class GameCardComponent implements OnInit {
  @Input() img_url: string = ""

  constructor() { }

  ngOnInit(): void {
    console.log(this.img_url);
  }
  
}
