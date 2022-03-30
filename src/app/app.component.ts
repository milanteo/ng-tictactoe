import { Component } from '@angular/core';

export interface Player { 
  name: string, 
  sign: string 
}

export class Game {

  constructor(){
    this.players = [
      { name: 'Player 1', sign: 'X' },
      { name: 'Player 2', sign: 'O' }
    ];

    this.turn = this.players[0];

    this.board = [
      { x: 0, y: 0, move: null },
      { x: 1, y: 0, move: null },
      { x: 2, y: 0, move: null },
      { x: 0, y: 1, move: null },
      { x: 1, y: 1, move: null },
      { x: 2, y: 1, move: null },
      { x: 0, y: 2, move: null },
      { x: 1, y: 2, move: null },
      { x: 2, y: 2, move: null }
    ]; 
  }

  turn: Player;
  players: Array<Player>;
  board: Array<{ x: number, y: number, move: Player | null }>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  game: Game = new Game();

  restartGame() {
    this.game = new Game();
  }

}
