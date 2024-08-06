import {Component} from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {


  images:{[key: string]:string} = {
    'sottocastello': 'horse.svg',
    'villa': 'panda.svg',
    'sornico': 'squirrel.svg',
    'sottomonte': 'rabbit.svg',
    'salt': 'lobster.svg'
  }

  games: { name: string, winner?: string, date: string | string[] }[] = [
    {"name": "Calcio", "winner": "villa", "date": "2021-09-01"},
    {"name": "Pallavolo", "winner": "sottocastello", "date": "2021-09-02"},
    {"name": "Morra", "winner": "sornico", "date": "2021-09-03"},
    {"name": "Briscola", "winner": "sottomonte", "date": ["2021-09-04", "2021-09-05"]},
    {"name": "Corsa nei sacchi", "date": "2021-09-06"},
    {"name": "Freccette", "winner": "villa", "date": "2021-09-07"},
    {"name": "Intesa Vincente", "winner": "salt", "date": "2021-09-08"},
    {"name": "Sfilata", "date": ["2021-09-09", "2021-09-10"]},
    {"name": "Camerieri maschile", "winner": "sornico", "date": "2021-09-11"},
    {"name": "Camerieri femminile", "winner": "sottocastello", "date": "2021-09-11"},
    {"name": "Bale Pignote Senior", "winner": "sottomonte", "date": "2021-09-12"},
    {"name": "Bale Pignote Junior", "date": "2021-09-13"},
    {"name": "Taglio del ceppo maschile", "winner": "villa", "date": "2021-09-14"},
    {"name": "Taglio del ceppo femminile", "winner": "salt", "date": ["2021-09-15", "2021-09-16"]},
    {"name": "Strade Mate", "date": "2021-09-17"},
    {"name": "Cibbe Maschile", "winner": "villa", "date": "2021-09-18"},
    {"name": "Cibbe Femminile", "winner": "sornico", "date": "2021-09-18"}
  ].sort((a, b) => {
    if (a.winner && !b.winner) return -1
    else return a.date < b.date ? -1 : 1
  })
}
