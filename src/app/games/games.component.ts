import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>Estos son los juegos favoritos de {{usernameGames}}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {

  @Input() usernameGames = '';
  @Output() addFacoriteEvent = new EventEmitter<string>();


  fav(gameName: string,){
    this.addFacoriteEvent.emit(gameName);
  }


  games = [
    {
      id: 1,
      name: 'Uncharted 4',
    },
    {
      id: 2,
      name: 'Farcry 5',
    },
    {
      id: 3,
      name: 'GTA 5',
    },
    {
      id: 4,
      name: 'Call of Duty 4',
    },
  ];
}
