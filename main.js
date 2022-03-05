//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DOM Elements~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var manCharater = document.querySelector('.man');
var womenCharater = document.querySelector('.woman');
var gameSelectionPage = document.querySelector('.game-selection');
var chosenCharacter = document.querySelector('.chosen-character');
var computerIcon = document.querySelector('.user-opponent');
var gameplayPage = document.querySelector('.gameplay');
var classicModeButton = document.querySelector('.classic');
var malaysianModeButton = document.querySelector('.malaysian');
var classicRulesButton = document.querySelector('.classic-rules');
var malaysianRulesButton = document.querySelector('.malaysian-rules');
var characterSelectionPage = document.querySelector('.choose-character');
var weapons = document.querySelector('.weapons');
var changeGameButton = document.querySelector('.change-game');
var humanScore = document.querySelector('.human-score');
var computerScore = document.querySelector('.machine-score');
var scoreReset = document.querySelector('.game-reset');
var gameplayTitle = document.querySelector('.gameplay-title');
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


manCharater.addEventListener('click', function(event){
  displayGameSelection();
  assignPlayerChar(event);
  assignComputerChar();
})

womenCharater.addEventListener('click', function(event){
  displayGameSelection();
  assignPlayerChar(event);
  assignComputerChar();
})

classicModeButton.addEventListener('click', function(event){
  displayClassicGame();
  newGame = new Game('classic', players);
  newGame.computerPick();
  newGame.calculateScore()
})

malaysianModeButton.addEventListener('click', function(event){
  displayMalaysianGame();
  newGame = new Game('malaysian', players)
  newGame.computerPick();
  newGame.calculateScore();
})

malaysianRulesButton.addEventListener('click', function(event){
  countClicks(event);
  showRules(event);
  if(malaysianRuleClicks >= 2){
    displayMalaysianGame();
    newGame = new Game('malaysian', players);
    newGame.computerPick();
    newGame.calculateScore();
  }
})

classicRulesButton.addEventListener('click', function(event){
  countClicks(event);
  showRules(event);
  if(classicRuleClicks >= 2){
    displayClassicGame();
    newGame = new Game('classic', players);
    newGame.computerPick();
    newGame.calculateScore();
  }
})

weapons.addEventListener('click', function(event){
  newGame.players[0].weaponPick = event.target.classList;
  newGame.findWinner();
})

changeGameButton.addEventListener('click', function(){
  displayGameSelection();
})

scoreReset.addEventListener('click', function(){
  newGame.resetScore();
  displayScore(newGame.players[0].wins, newGame.players[1].wins);
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function hideElement(htmlElement){
  htmlElement.classList.add('hidden');
}

function showElement(htmlElement){
  htmlElement.classList.remove('hidden');
}

function countClicks(event){
  if(event.target.classList[0] === 'classic-rules'){
    classicRuleClicks++;
  } else if(event.target.classList[0] === 'malaysian-rules'){
    malaysianRuleClicks++;
  }
}

function assignPlayerChar(event){
  var newPlayer = new Player();
  newPlayer.name = event.target.parentElement.classList[0];
  newPlayer.token = event.target.src;
  chosenCharacter.src = event.target.src;
  chosenCharacter.classList.add('game-characters');
  players.push(newPlayer);
}

function assignComputerChar(){
  var computerChar = new Player();
  computerChar.name = 'Computer';
  computerChar.token = './assets/Computer_emoji.png';
  computerIcon.src = computerChar.token;
  players.push(computerChar)
}

function displayGameSelection(){
  weapons.innerHTML = '';
  hideElement(characterSelectionPage);
  showElement(gameSelectionPage);
  hideElement(gameplayPage);
}

function displayGame(){
  showElement(gameplayPage);
  hideElement(gameSelectionPage);
  hideElement(characterSelectionPage);
}

function displayClassicGame(){
  weapons.innerHTML = '';
  displayGame();
  generateClassicGame();
}

function displayMalaysianGame(){
  weapons.innerHTML = '';
  displayGame();
  generateMalaysianGame();
}


function generateWeapon(weaponName){
  var imgClass = weaponName.toLowerCase()
   if(weaponName === 'Paper'){
     return `<button class='weapon-button classic-margin'><img class='paper-img' src='./assets/Paper_emoji.png' alt=''></button>`;
   } else {
     return `<button class='weapon-button'><img class='${imgClass}-img' src='./assets/${weaponName}_emoji.png' alt=''></button>`;
   }
}

function generateGame(){
  var weaponsArray = newGame.type
  for(var i = 0; i < 3; i ++){
    weapons.innerHTML += classicWeapons[i];
  }
}

function generateClassicGame(){
  var classicWeapons = [generateWeapon('Rock'),generateWeapon('Scissor'),generateWeapon('Paper')];
    for(var i = 0; i < 3; i ++){
      weapons.innerHTML += classicWeapons[i];
    }
}

function generateMalaysianGame(){
  var malaysianWeapons = [generateWeapon('Rock'),generateWeapon('Bird'),generateWeapon('Water'),generateWeapon('Worm')];
    for(var i = 0; i < 4; i ++){
      weapons.innerHTML += malaysianWeapons[i];
    }
}

function generateRules(rules){
  return `<button class='classic big-button' style='font-size: 21px'>${rules}</button>`;
}

function showRules(event){
  var rulesSibling = event.target.parentElement.previousElementSibling
  var classicRules = 'Rock > Scissors Rock < Paper Paper < Scissors'
  var malaysianRules = 'Bird > Worm Bird > Water Rock > Bird Water > Rock Worm > Rock'
  event.target.innerText = 'PLAY'
  if(rulesSibling.innerText === 'Classic'){
    rulesSibling.innerHTML = generateRules(classicRules)
  } else if(rulesSibling.innerText === 'Malaysian'){
    rulesSibling.innerHTML = generateRules(malaysianRules)
  }
}

function setDefaultScreen(){
  computerIcon.src = newGame.players[1].token;
  chosenCharacter.src = newGame.players[0].token;
  gameplayTitle.innerText = `Pick your weapon`
}

function changeLooserIcon(winner){
  computerIcon.src = winner.token;
  chosenCharacter.src = winner.token;
}

function playerWon(winner){
  if(winner === 'Draw'){
    gameplayTitle.innerText = 'Its a draw!!'
  } else if(winner.name === 'Computer'){
    gameplayTitle.innerText = `${winner.name} won this round!!`
    changeLooserIcon(winner)
  } else {
    gameplayTitle.innerText = `You won this round!!`
    changeLooserIcon(winner)
  }
}

function displayScore(user, computer){
  computerScore.innerText = `Computer Score: ${computer}`;
  humanScore.innerText = `Your Score: ${user}`;
}
