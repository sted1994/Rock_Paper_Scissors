class Game{
  constructor(){
    this.players = [];
    this.game = '';
    this.classisWeapons = ['rock-img', 'paper-img', 'scissor-img'];
    this.malaysianWeapons = ['rock-img','bird-img','water-img','worm-img']
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
      if(this.players[1].weaponPick === 'rock-img'){
        if(this.players[0].weaponPick.value === 'paper-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          console.log('its a draw')
        } else {
          this.players[1].wins++
        }
      }

      if(this.players[1].weaponPick === 'paper-img'){
        if(this.players[0].weaponPick.value === 'scissor-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          console.log('its a draw')
        } else {
          this.players[1].wins++
        }
      }

      if(this.players[1].weaponPick === 'scissor-img'){
        if(this.players[0].weaponPick.value === 'rock-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          console.log('its a draw')
        } else {
          this.players[1].wins++
        }
      }
      newGame.calculateScore()
    }

    if(this.game === 'malaysian'){
      console.log(this.players[1].weaponPick)
      if(this.players[1].weaponPick === 'bird-img'){
        if(this.players[0].weaponPick.value === 'worm-img' || this.players[0].weaponPick.value === 'water-img'){
          this.players[1].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          console.log('its a draw')
        } else {
          this.players[0].wins++
        }
      }

      if(this.players[1].weaponPick === 'rock-img'){
        if(this.players[0].weaponPick.value === 'water-img' || this.players[0].weaponPick.value === 'worm-img'){
          this.players[0].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          console.log('its a draw')
        } else {
          this.players[1].wins++
        }
      }

      if(this.players[1].weaponPick === 'worm-img'){
        if(this.players[0].weaponPick.value === 'rock-img'){
          this.players[1].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          console.log('its a draw')
        } else {
          this.players[0].wins++
        }
      }

      if(this.players[1].weaponPick === 'water-img'){
        if(this.players[0].weaponPick.value === 'rock-img' || this.players[0].weaponPick.value === 'worm-img'){
          this.players[1].wins++
        } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
          console.log('its a draw')
        } else {
          this.players[0].wins++
        }
      }
      newGame.calculateScore()
    }
  }

  calculateScore(){
    computerScore.innerText = `Computer Score: ${this.players[1].wins}`;
    humanScore.innerText = `Your Score: ${this.players[0].wins}`;
  }
}
