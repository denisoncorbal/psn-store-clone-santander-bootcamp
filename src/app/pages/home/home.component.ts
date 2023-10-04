import { Component, OnInit } from "@angular/core";
import { Game } from "src/app/model/game";
import { FakeDataService } from "src/app/services/fake-data.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private fakeData: FakeDataService
  ) { }

  games: Game[] = [];
  ps5Games: Game[] = [];
  digitalGames: Game[] = [];

  ngOnInit(): void {
    this.games = this.fakeData.getAllGames();
    this.ps5Games = this.fakeData.getGameByType("PS5");
    this.digitalGames = this.fakeData.getGameByLabel("DIGITAL");
  }

}