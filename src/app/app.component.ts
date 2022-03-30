import { Component } from '@angular/core';

export class Game {

  constructor(){
    this.players = [
      { name: 'Player 1', sign: 'X', turn: false },
      { name: 'Player 1', sign: 'O', turn: true }
    ];
  }

  players: Array<{ name: string, sign: string, turn: boolean }>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  game: Game = new Game();

}
