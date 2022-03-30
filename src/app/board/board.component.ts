import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../app.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
