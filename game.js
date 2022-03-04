class Game{
  constructor(type, players){
    // var weapons = {
    //   classic: ['rock-img', 'paper-img', 'scissor-img'],
    //   malaysian: ['rock-img','bird-img','water-img','worm-img'],
    // };
    this.players = players;
    this.type = type;
    this.weapons = gameWeapons[this.type];
    this.startingScores = [];
  }

  computerPick(){
      this.players[1].weaponPick = this.weapons[Math.floor(Math.random() * this.weapons.length)]
  }

  findWinner(){
    this.computerPick();
    this.startingScore();
    if(this.type === 'classic'){
      if(this.players[1].weaponPick === 'rock-img'){
        if(this.players[0].weaponPick.value === 'paper-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
        } else {
          this.players[1].wins++
        }
      }

      if(this.players[1].weaponPick === 'paper-img'){
        if(this.players[0].weaponPick.value === 'scissor-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
        } else {
          this.players[1].wins++
        }
      }

      if(this.players[1].weaponPick === 'scissor-img'){
        if(this.players[0].weaponPick.value === 'rock-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
        } else {
          this.players[1].wins++
        }
      }
      newGame.calculateScore()
    }

    if(this.type === 'malaysian'){
      this.startingScore();
      if(this.players[1].weaponPick === 'bird-img'){
        if(this.players[0].weaponPick.value === 'worm-img' || this.players[0].weaponPick.value === 'water-img'){
          this.players[1].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
        } else {
          this.players[0].wins++
        }
      }

      if(this.players[1].weaponPick === 'rock-img'){
        if(this.players[0].weaponPick.value === 'water-img' || this.players[0].weaponPick.value === 'worm-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
        } else {
          this.players[1].wins++
        }
      }

      if(this.players[1].weaponPick === 'worm-img'){
        if(this.players[0].weaponPick.value === 'rock-img'){
          this.players[1].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
        } else {
          this.players[0].wins++
        }
      }

      if(this.players[1].weaponPick === 'water-img'){
        if(this.players[0].weaponPick.value === 'rock-img' || this.players[0].weaponPick.value === 'worm-img'){
          this.players[1].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
        } else {
          this.players[0].wins++
        }
      }
      newGame.calculateScore()
    }
  }

  startingScore(){
    var cpuWins = this.players[1].wins;
    var playerWins = this.players[0].wins;
    this.startingScores.push(playerWins);
    this.startingScores.push(cpuWins)
  }
  calculateScore(){
    displayScore(this.players[0].wins, this.players[1].wins)
    if (this.startingScores[1] === undefined && this.startingScores[0] === undefined){
      return
    } else if (this.startingScores[1] < this.players[1].wins){
      playerWon(this.players[1])
    } else if(this.startingScores[0] < this.players[0].wins){
      playerWon(this.players[0])
    }else{
      console.log('its a draw')
    }
    setTimeout(setDefaultScreen, 1250);
    this.startingScores = []
  }
}
