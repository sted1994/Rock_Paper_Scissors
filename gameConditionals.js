function checkRockPick(){
  if(this.players[0].weaponPick.value === 'paper-img' || this.players[0].weaponPick.value === 'water-img' || this.players[0].weaponPick.value === 'worm-img'){
    this.players[0].wins++
  } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
  } else {
    this.players[1].wins++
  }
}

function checkPaperPick(){
  if(this.players[0].weaponPick.value === 'scissor-img'){
    this.players[0].wins++
  } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
  } else {
    this.players[1].wins++
  }
}

function checkScissorPick(){
  if(this.players[0].weaponPick.value === 'rock-img'){
    this.players[0].wins++
  } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
  } else {
    this.players[1].wins++
  }
}

function checkBirdPick(){
  if(this.players[0].weaponPick.value === 'worm-img' || this.players[0].weaponPick.value === 'water-img'){
    this.players[1].wins++
  } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
  } else {
    this.players[0].wins++
  }
}

function checkWormPick(){
  if(this.players[0].weaponPick.value === 'rock-img'){
    this.players[1].wins++
  } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
  } else {
    this.players[0].wins++
  }
}


function checkWaterPick(){
  if(this.players[0].weaponPick.value === 'rock-img' || this.players[0].weaponPick.value === 'worm-img'){
    this.players[1].wins++
  } else if (this.players[1].weaponPick === this.players[0].weaponPick.value){
  } else {
    this.players[0].wins++
  }
}
