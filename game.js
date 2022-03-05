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
    if(this.type === 'classic'){
      this.playClassic()
      this.calculateScore()
    }

    if(this.type === 'malaysian'){
      this.startingScore();
      this.playMalaysian();
      newGame.calculateScore()
    }
  }

  playMalaysian(){
    if(this.players[1].weaponPick === 'bird-img'){
      checkBirdPick()
    }
    if(this.players[1].weaponPick === 'rock-img'){
      checkRockPick()
    }
    if(this.players[1].weaponPick === 'worm-img'){
      checkWormPick()
    }
    if(this.players[1].weaponPick === 'water-img'){
      checkWaterPick()
    }
  }

  playClassic(){
    if(this.players[1].weaponPick === 'rock-img'){
      checkRockPick()
    }
    if(this.players[1].weaponPick === 'paper-img'){
      checkPaperPick()
    }
    if(this.players[1].weaponPick === 'scissor-img'){
      checkScissorPick()
    }
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
    }
    setTimeout(setDefaultScreen, 1250);
    this.startingScores = []
  }
}
