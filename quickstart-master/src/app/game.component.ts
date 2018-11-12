import { Component } from '@angular/core';

@Component({
    selector : 'game-start',
    templateUrl : `app/game.component.html`,
    styleUrls : [`./main.component.css`]
})


export class GameComponent {
    header: string = 'Welcome to the Modern Bluff Game !';
    rules: string = 'click here for Rules';
    values: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    suits: string[] = ["clubs", "diamonds", "hearts", "spades"];
    cards: [];
    hand: [];
    player1: [];
    computer: [];
    playerWon: false;
    computerWon: false;
}