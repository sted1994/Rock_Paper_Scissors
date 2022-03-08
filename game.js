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
    var winner = this.checkWinner(this.userPlayer.weaponPick.value, this.computerPlayer.weaponPick);
    this.setWinner(winner)
    return winner;
  };

  setWinner(winner){
    if(winner){
      winner.wins++
    }
  }

  resetScore(){
    this.userPlayer.wins = 0;
    this.computerPlayer.wins = 0;
  };

  checkWinner(playerPick, computerPick){
    var weaponsWeaknesses = {
      rock: ['paper', 'water', 'worm'],
      paper: ['scissor'],
      scissor: ['rock'],
      bird: ['rock'],
      water: ['bird'],
      worm: ['bird', 'water'],
    }
    if(playerPick === computerPick){
      return;
    } else if(weaponsWeaknesses[playerPick].includes(computerPick)){
      return this.computerPlayer;
    } else {
      return this.userPlayer;
    };
  };
};
