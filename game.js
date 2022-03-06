class Game{
  constructor(type, players){
    this.type = type;
    this.weapons = gameWeapons[this.type];
    this.userPlayer = players[0];
    this.computerPlayer = players[1];
  }

  computerPick(){
      this.computerPlayer.weaponPick = this.weapons[Math.floor(Math.random() * this.weapons.length)]
  }

  startingScore(){
    this.computerPlayer.initialWins= this.computerPlayer.wins;
    this.userPlayer.initialWins = this.userPlayer.wins;
  }

  findWinner(){
    this.computerPick();
    this.startingScore();
    this.checkPick(this.userPlayer.weaponPick.value, this.computerPlayer.weaponPick);
    displayScore(this.userPlayer.wins, this.computerPlayer.wins)
    this.calculateScore();
  }



  calculateScore(){
    if (this.computerPlayer.initialWins === undefined && this.userPlayer.initialWins === undefined){
      return
    } else if (this.computerPlayer.initialWins < this.computerPlayer.wins){
      playerWon(this.computerPlayer)
    } else if(this.userPlayer.initialWins < this.userPlayer.wins){
      playerWon(this.userPlayer)
    }else{
      playerWon('Draw')
    }
    displayChoices(this.userPlayer.weaponPick, this.computerPlayer.weaponPick)
    setTimeout(setDefaultScreen, 1750);
  }

  resetScore(){
    this.userPlayer.wins = 0;
    this.computerPlayer.wins = 0;
  }

  checkPick(playerPick, computerPick){
    console.log(computerPick)
    console.log(playerPick)
    if(playerPick === computerPick){
      return
    } else if(weaponsWeaknesses[playerPick].includes(computerPick)){
      this.computerPlayer.wins++
    } else {
      this.userPlayer.wins++
    }
  }
}
