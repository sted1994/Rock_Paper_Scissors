class Game{
  constructor(){
    this.players = [];
    this.game = '';
    this.classisWeapons = ['rock-img', 'paper-img', 'scissor-img'];
    this.malaysianWeapons = ['rock-img','bird-img','water-img','worm-img'];
    this.startingScores = [];
  }

  computerPick(){
    if(this.game === 'malaysian'){
      this.players[1].weaponPick = this.malaysianWeapons[Math.floor(Math.random() * this.malaysianWeapons.length)]
    } else {
      this.players[1].weaponPick = this.classisWeapons[Math.floor(Math.random() * this.classisWeapons.length)]
    }
  }

  findWinner(){
    this.computerPick();
    if(this.game === 'classic'){
      this.startingScore();
      if(this.players[1].weaponPick === 'rock-img'){
        if(this.players[0].weaponPick.value === 'paper-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          // console.log('its a draw')
        } else {
          this.players[1].wins++
        }
      }

      if(this.players[1].weaponPick === 'paper-img'){
        if(this.players[0].weaponPick.value === 'scissor-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          // console.log('its a draw')
        } else {
          this.players[1].wins++
        }
      }

      if(this.players[1].weaponPick === 'scissor-img'){
        if(this.players[0].weaponPick.value === 'rock-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          // console.log('its a draw')
        } else {
          this.players[1].wins++
        }
      }
      newGame.calculateScore()
    }

    if(this.game === 'malaysian'){
      this.startingScore();
      if(this.players[1].weaponPick === 'bird-img'){
        if(this.players[0].weaponPick.value === 'worm-img' || this.players[0].weaponPick.value === 'water-img'){
          this.players[1].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          // console.log('its a draw')
        } else {
          this.players[0].wins++
        }
      }

      if(this.players[1].weaponPick === 'rock-img'){
        if(this.players[0].weaponPick.value === 'water-img' || this.players[0].weaponPick.value === 'worm-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          // console.log('its a draw')
        } else {
          this.players[1].wins++
        }
      }

      if(this.players[1].weaponPick === 'worm-img'){
        if(this.players[0].weaponPick.value === 'rock-img'){
          this.players[1].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          // console.log('its a draw')
        } else {
          this.players[0].wins++
        }
      }

      if(this.players[1].weaponPick === 'water-img'){
        if(this.players[0].weaponPick.value === 'rock-img' || this.players[0].weaponPick.value === 'worm-img'){
          this.players[1].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          // console.log('its a draw')
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
      console.log('computerWon')
    } else if(this.startingScores[0] < this.players[0].wins){
      console.log('playerWon')
    }else{
      console.log('its a draw')
    }
    playerWon(this.players[0])
    setTimeout(setDefaultIcons, 1000);
    this.startingScores = []
  }
}
