import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardData } from '../CardData.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() data: CardData;

  @Output() cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}