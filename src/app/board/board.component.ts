import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Game, Player } from '../app.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  animations: [
    trigger(
        'fadeAnimation', 
        [
            transition(
                ':enter', 
                [
                    style({ opacity: 0 }),
                    animate('1s ease-out', style({ opacity: 1 }))
                ]
            ),
            transition(
                ':leave', 
                [
                    style({ opacity: 1 }),
                    animate('1s ease-in', style({ opacity: 0 }))
                ]
            )
        ]
    )
  ]
})
export class BoardComponent implements OnInit {

  @Input() game!: Game;

  constructor(
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  playerMove(cell: { x: number, y: number, player: Player | null }){
    if(!cell.player){

      cell.player = this.game.turn;

      this.winnerCheck(cell);

    }else{

      this.snack.open("Don't touch this!");

    }
  }

  winnerCheck(cell: any): void{

    if(
      // row victory check
      this.game.board
        .filter(bCell => bCell.y == cell.y && bCell.player?.sign == this.game.turn.sign).length == 3 ||
      // column victory check
      this.game.board
        .filter(bCell => bCell.x == cell.x && bCell.player?.sign == this.game.turn.sign).length == 3 ||
      // left to right diagonal victory check
      this.game.board
        .filter(bCell => bCell.x == bCell.y && bCell.player?.sign == this.game.turn.sign).length == 3 ||
      // right to left diagonal victory check
      this.game.board
        .filter(bCell => bCell.x + bCell.y == 2 && bCell.player?.sign == this.game.turn.sign).length == 3
    ){

      this.game.outcome.push(this.game.turn);

    // draw outcome check
    }else if(this.game.board.filter(bCell => !bCell.player).length == 0){
      
      this.game.outcome = this.game.players;

    // next turn
    }else{
      this.game.turn = this.game.players.find(player => player.sign != this.game.turn.sign)!;
    }


  }

}

