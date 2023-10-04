import { Injectable } from "@angular/core";
import { Game } from "../model/game";
import FakeGames from "./fake-games";


@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  private games: Game[] = FakeGames;

  constructor() { }

  getAllGames(){
    return this.games;
  }

  getGameByType(type: string){
    return this.games.filter((g)=>g.type.includes(type));
  }

  getGameByLabel(label: string){
    return this.games.filter((g)=>g.label.includes(label));
  }
}
