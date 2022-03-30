import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Game } from '../app.component';

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

  playerMove(cell:any){
    if(!cell.move){

      cell.move = this.game.turn;

      this.game.turn = this.game.players.find(player => player.sign != this.game.turn.sign)!;

    }else{

      this.snack.open("Don't touch this!");

    }
  }

}

