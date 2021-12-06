import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CardData } from "../CardData.interface";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-game-card",
  templateUrl: "./game-card.component.html",
  styleUrls: ["./game-card.component.scss"],
  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "none",
        })
      ),
      state(
        "flipped",
        style({
          transform: "perspective(600px) rotateY(180deg)",
        })
      ),
      state(
        "matched",
        style({
          transform: "perspective(600px) rotateY(180deg)",
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
      transition("* => matched", [animate("400ms")]),
    ]),
  ],
})
export class GameCardComponent implements OnInit {
  @Input() data: CardData;

  @Output() cardClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
