import { Component } from '@angular/core';

@Component({
    selector : 'game-start',
    templateUrl : `app/game.component.html`,
    styles : [ `./main.component.css`, `../styles.css` ]
})


export class GameComponent {
    header: string = 'Welcome to the Modern Bluff Game !';
    rules: string = 'click here for Rules';
}