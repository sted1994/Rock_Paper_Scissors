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
  assignCharacters(event);
});

womenCharater.addEventListener('click', function(event){
  displayGameSelection();
  assignCharacters(event);
});

classicModeButton.addEventListener('click', function(event){
  newGame = new Game('classic', players);
  displayGame();
  generateGame();
  displayScore(newGame.userPlayer.wins, newGame.computerPlayer.wins);
});

malaysianModeButton.addEventListener('click', function(event){
  newGame = new Game('malaysian', players)
  displayGame();
  generateGame();
  displayScore(newGame.userPlayer.wins, newGame.computerPlayer.wins);
});

malaysianRulesButton.addEventListener('click', function(event){
  countClicks(event);
  showRules(event);
  if(malaysianRuleClicks >= 2){
    newGame = new Game('malaysian', players);
    displayGame();
    generateGame();
    displayScore(newGame.userPlayer.wins, newGame.computerPlayer.wins);
  };
});

classicRulesButton.addEventListener('click', function(event){
  countClicks(event);
  showRules(event);
  if(classicRuleClicks >= 2){
    newGame = new Game('classic', players);
    displayGame();
    generateGame();
    displayScore(newGame.userPlayer.wins, newGame.computerPlayer.wins);
  };
});

weapons.addEventListener('click', function(event){
  if(newGame.disableMouse === false){
    newGame.userPlayer.weaponPick = event.target.classList;
    newGame.findWinner();
  };
});

changeGameButton.addEventListener('click', function(){
  displayGameSelection();
});

scoreReset.addEventListener('click', function(){
  newGame.resetScore();
  displayScore(newGame.userPlayer.wins, newGame.computerPlayer.wins);
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function hideElement(htmlElement){
  htmlElement.classList.add('hidden');
};

function showElement(htmlElement){
  htmlElement.classList.remove('hidden');
};

function countClicks(event){
  if(event.target.classList[0] === 'classic-rules'){
    classicRuleClicks++;
  } else if(event.target.classList[0] === 'malaysian-rules'){
    malaysianRuleClicks++;
  };
};

function assignCharacters(event){
  var newPlayer = new Player();
  var computerChar = new Player();
  newPlayer.name = event.target.parentElement.classList[0];
  newPlayer.token = event.target.src || event.target.firstChild.src;
  chosenCharacter.src = event.target.src || event.target.firstChild.src;
  chosenCharacter.classList.add('game-characters');
  computerChar.name = 'Computer';
  computerChar.token = './assets/Computer_emoji.png';
  computerIcon.src = computerChar.token;
  players.push(newPlayer);
  players.push(computerChar);
};

function displayGameSelection(){
  weapons.innerHTML = '';
  hideElement(characterSelectionPage);
  showElement(gameSelectionPage);
  hideElement(gameplayPage);
};

function displayGame(){
  showElement(gameplayPage);
  hideElement(gameSelectionPage);
  hideElement(characterSelectionPage);
};

function generateWeapon(weaponName){
     return `<button class='${weaponName} weapon-button'><img class='${weaponName}' src='./assets/${weaponName}_emoji.png' alt=''></button>`;
};

function generateGame(){
  weapons.innerHTML = '';
  var weaponsArray = gameWeapons[newGame.type];
  for(var i = 0; i < weaponsArray.length; i ++){
    generateWeapon(weaponsArray[i]);
    weapons.innerHTML += generateWeapon(weaponsArray[i]);
  };
};

function generateRules(rules){
  if(rules === "Bird > Worm Bird > Water Rock > Bird Water > Rock Worm > Rock"){
    return `<button class='rules big-button' style='font-size: 24px'>${rules}</button>`;
  }
  return `<button class='rules big-button' style='font-size: 21px'>${rules}</button>`;
};

function showRules(event){
  var rulesSibling = event.target.parentElement.previousElementSibling;
  var classicRules = 'Rock > Scissors Rock < Paper Paper < Scissors';
  var malaysianRules = 'Bird > Worm Bird > Water Rock > Bird Water > Rock Worm > Rock';
  event.target.innerText = 'PLAY';
  if(rulesSibling.innerText === 'Classic'){
    rulesSibling.innerHTML = generateRules(classicRules);
  } else if(rulesSibling.innerText === 'Malaysian'){
    rulesSibling.innerHTML = generateRules(malaysianRules);
  };
};

function setDefaultScreen(){
  newGame.disableMouse = false;
  weapons.innerHTML = "";
  computerIcon.src = newGame.computerPlayer.token;
  chosenCharacter.src = newGame.userPlayer.token;
  gameplayTitle.innerText = `Pick your weapon`;
  generateGame();
};

function changeLooserIcon(winner){
  computerIcon.src = winner.token;
  chosenCharacter.src = winner.token;
};

function playerWon(winner){
  if(winner === 'Draw'){
    gameplayTitle.innerText = 'Its a draw!!';
  } else if(winner.name === 'Computer'){
    gameplayTitle.innerText = `${winner.name} won this round!!`;
    changeLooserIcon(winner);
  } else {
    gameplayTitle.innerText = `You won this round!!`;
    changeLooserIcon(winner);
  };
};

function displayScore(user, computer){
  computerScore.innerText = `Computer Score: ${computer}`;
  humanScore.innerText = `Your Score: ${user}`;
};

function displayChoices(userPick, computerPick){
  newGame.disableMouse = true;
  weapons.innerHTML = "";
  weapons.innerHTML += generateWeapon(userPick);
  weapons.innerHTML += generateWeapon(computerPick);
};
