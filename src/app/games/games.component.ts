import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: any[];

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.db.collection('games').valueChanges().subscribe((games: any) => this.games = games);
  }

}
