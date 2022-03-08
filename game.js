class Game{
  constructor(type, players){
    var weapons = {
      classic: ['rock', 'paper', 'scissor'],
      malaysian: ['rock','bird','water','worm'],
    };
    this.weapons = weapons[type];
    this.type = type;
    this.userPlayer = players[0];
    this.computerPlayer = players[1];
    this.disableMouse = false;
  };

  computerPick(){
    var randomIndex = Math.floor(Math.random() * this.weapons.length)
    var weapon = this.weapons[randomIndex]
    this.computerPlayer.takeTurn(weapon)
  }


  findWinner(){
    this.computerPick();
    this.checkPick(this.userPlayer.weaponPick.value, this.computerPlayer.weaponPick);
    displayScore(this.userPlayer.wins, this.computerPlayer.wins);
    this.showWinner();
  };

  showWinner(){
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
      playerWon('Draw');
      return;
    } else if(weaponsWeaknesses[playerPick].includes(computerPick)){
      this.computerPlayer.wins++;
      playerWon(this.computerPlayer);
    } else {
      this.userPlayer.wins++;
      playerWon(this.userPlayer)
    };
  };
};
