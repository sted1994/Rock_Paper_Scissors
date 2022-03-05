class Game{
  constructor(type, players){
    this.players = players;
    this.type = type;
    this.weapons = gameWeapons[this.type];
    this.startingScores = [];
  }

  computerPick(){
      this.players[1].weaponPick = this.weapons[Math.floor(Math.random() * this.weapons.length)]
  }

  startingScore(){
    var cpuWins = this.players[1].wins;
    var playerWins = this.players[0].wins;
    this.startingScores.push(playerWins);
    this.startingScores.push(cpuWins)
  }

  findWinner(){
    this.computerPick();
    this.startingScore();
    this.checkPick(this.players[0].weaponPick.value, this.players[1].weaponPick);
    this.calculateScore();
  }

  calculateScore(){
    displayScore(this.players[0].wins, this.players[1].wins)
    if (!this.startingScores[1] && !this.startingScores[0]){
      return
    } else if (this.startingScores[1] < this.players[1].wins){
      playerWon(this.players[1])
    } else if(this.startingScores[0] < this.players[0].wins){
      playerWon(this.players[0])
    }else{
      playerWon('Draw')
    }
    setTimeout(setDefaultScreen, 1250);
    this.startingScores = []
  }

  resetScore(){
    newGame.players[0].wins = 0;
    newGame.players[1].wins = 0;
  }

  checkPick(playerPick, computerPick){
    if(playerPick === computerPick){
      return
    } else if(weaponsWeaknesses[playerPick].includes(computerPick)){
      newGame.players[1].wins++
    } else {
      newGame.players[0].wins++
    }
  }
}
