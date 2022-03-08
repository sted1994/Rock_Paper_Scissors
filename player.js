class Player{
  constructor(){
    this.name;
    this.wins = 0;
    this.token;
    this.weaponPick;
  }

  takeTurn(weapon){
      this.weaponPick = weapon;
  }

}
