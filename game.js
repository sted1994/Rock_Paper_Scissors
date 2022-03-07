class Game{
  constructor(type, players){
    this.type = type;
    this.weapons = {
      classic: ['rock', 'paper', 'scissor'],
      malaysian: ['rock','bird','water','worm'],
    };
    this.userPlayer = players[0];
    this.computerPlayer = players[1];
    this.disableMouse = false;
    this.wea
  };

  findStartingScore(){
    this.computerPlayer.initialWins= this.computerPlayer.wins;
    this.userPlayer.initialWins = this.userPlayer.wins;
  };

  findWinner(){
    this.computerPlayer.takeTurn();
    this.findStartingScore();
    this.checkPick(this.userPlayer.weaponPick.value, this.computerPlayer.weaponPick);
    displayScore(this.userPlayer.wins, this.computerPlayer.wins);
    this.showWinner();
  };

  showWinner(){
     if (this.computerPlayer.initialWins < this.computerPlayer.wins){
      playerWon(this.computerPlayer);
    } else if(this.userPlayer.initialWins < this.userPlayer.wins){
      playerWon(this.userPlayer);
    }else{
      playerWon('Draw');
    };
    displayChoices(this.userPlayer.weaponPick, this.computerPlayer.weaponPick);
    setTimeout(setDefaultScreen, 1700);
  };

  resetScore(){
    this.userPlayer.wins = 0;
    this.computerPlayer.wins = 0;
  };

  checkPick(playerPick, computerPick){
    var weaponsWeaknesses = {
      'rock': ['paper', 'water', 'worm'],
      'paper': ['scissor'],
      'scissor': ['rock'],
      'bird': ['rock'],
      'water': ['bird'],
      'worm': ['bird', 'water'],
    }
    
    if(playerPick === computerPick){
      return;
    } else if(weaponsWeaknesses[playerPick].includes(computerPick)){
      this.computerPlayer.wins++;
    } else {
      this.userPlayer.wins++;
    };
  };
};
