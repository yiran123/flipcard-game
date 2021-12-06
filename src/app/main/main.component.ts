import { Component, OnInit } from '@angular/core';
import { CardData } from '../CardData.interface';
import { RestartDialogComponent } from '../restart-dialog/restart-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  cardImages = ['10C', '10D', '2S', '2H', '3D'];
  cards: CardData[] = [];
  flippedCards: CardData[] = [];
  matchedCount: number = 0;

  shuffleArray(anArray: any[]): any[] {
    return anArray
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.setupCards();
  }
  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default',
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
    });

    this.cards = this.shuffleArray(this.cards);
    console.log(this.cards);
  }

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length === 2) {
        this.checkForCardMatch();
      }
    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState =
        cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.cardImages.length) {
          const dialogRef = this.dialog.open(RestartDialogComponent, {
            disableClose: true,
          });

          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }
    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }
}
