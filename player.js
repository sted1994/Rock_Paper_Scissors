class Player{
  constructor(){
    this.name;
    this.initialWins;
    this.wins = 0;
    this.token;
    this.weaponPick;
  }

  takeTurn(){
    this.weaponPick = newGame.weapons[newGame.type][Math.floor(Math.random() * newGame.weapons[newGame.type].length)]
  }
}
