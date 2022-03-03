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
      // console.log('computer:' +this.players[1].weaponPick)
      // console.log('player:' + this.players[0].weaponPick.value)
      if(this.players[1].weaponPick === 'rock-img' && this.players[0].weaponPick.value !== 'paper-img'){
        this.players[1].wins++
        console.log(this.players[1].wins)
      }
    }
  }

  calculateScore(){
    computerScore.innerText = `Computer Score: ${this.players[1].wins}`;
    humanScore.innerText = `Your Score: ${this.players[0].wins}`;
  }
}
