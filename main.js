//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DOM Elements~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var manCharater = document.querySelector('.man');
var womenCharater = document.querySelector('.woman')
var gameSelectionPage = document.querySelector('.game-selection');
var chosenCharacter = document.querySelector('.chosen-character');
var gameplayPage = document.querySelector('.gameplay');
var classicModeButton = document.querySelector('.classic');
var malaysianModeButton = document.querySelector('.malaysian');
var classicRulesButton = document.querySelector('.classic-rules');
var malaysianRulesButton = document.querySelector('.malaysian-rules');
var classicButtons = document.querySelectorAll('.game-modes');
var characterSelectionPage = document.querySelector('.choose-character');
var scissorImg = document.querySelector('.scissor-img');
var rockImg = document.querySelector('.rock-img');
var paperImg = document.querySelector('.paper-img');
var weapons = document.querySelector('.weapons')
var changeGameButton = document.querySelector('.change-game')
var allWeapons = document.querySelectorAll('.weapon-button')
var allWeaponstest = document.querySelectorAll('.weapons')
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
manCharater.addEventListener('click', function(){
  displayGameSelection(event);
  assignPlayerChar(event);
  makeNewPlayer(event);
})

womenCharater.addEventListener('click', function(){
  displayGameSelection(event);
  assignPlayerChar(event);
  makeNewPlayer(event);
})

classicModeButton.addEventListener('click', function(event){
  displayClassicGame()
})

malaysianModeButton.addEventListener('click', function(event){
  displayMalaysianGame()
})

malaysianRulesButton.addEventListener('click', function(event){
  countClicks(event);
  showRules(event)
  if(malaysianRuleClicks >= 2){
    displayMalaysianGame();
  }
})

classicRulesButton.addEventListener('click', function(event){
  countClicks(event);
  showRules(event)
  if(classicRuleClicks >= 2){
    displayClassicGame();
  }
})

weapons.addEventListener('click', function(event){
  console.log(event.target)
})

changeGameButton.addEventListener('click', function(){
  countClicks(event);
  displayGameSelection();
})

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var classicRuleClicks = 0;
var malaysianRuleClicks = 0;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function hideElement(htmlElement){
  htmlElement.classList.add('hidden');
}

function showElement(htmlElement){
  htmlElement.classList.remove('hidden');
}

function countClicks(event){
  if(event.target.classList[0] === 'classic-rules'){
    classicRuleClicks++
  } else if(event.target.classList[0] === 'malaysian-rules'){
    malaysianRuleClicks++
  }
}

function assignPlayerChar(event){
  chosenCharacter.src = event.target.src;
  chosenCharacter.classList.add('game-characters');
}

function displayGameSelection(event){
  weapons.innerHTML = ""
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
  weapons.innerHTML = "";
  displayGame()
  generateClassicGame();
}

function displayMalaysianGame(){
  weapons.innerHTML = ""
  displayGame()
  generateMalaysianGame();
}

function makeNewPlayer(event){
  var newPlayer = new Player()
  newPlayer.name = event.target.parentElement.classList[0];
  newPlayer.token = event.target.src;
}

function generateRules(rules){
  return `<button class="classic big-button" style="font-size: 20px">${rules}</button>`
}

function generateWeapon(weaponName){
  var imgClass = weaponName.toLowerCase()
   if(weaponName === "Paper"){
     return `<button class="weapon-button classic-margin"><img class="paper-img" src="./assets/Paper_emoji.png" alt=""></button>`
   } else {
     return `<button class="weapon-button"><img class="${imgClass}-img" src="./assets/${weaponName}_emoji.png" alt=""></button>`
   }
}

function generateClassicGame(){
  var classicWeapons = [generateWeapon('Rock'),generateWeapon('Scissor'),generateWeapon('Paper')]
    for(var i = 0; i < 3; i ++){
      weapons.innerHTML += classicWeapons[i]
    }
}

function generateMalaysianGame(){
  var malaysianWeapons = [generateWeapon('Rock'),generateWeapon('Bird'),generateWeapon('Water'),generateWeapon('Worm')]
    for(var i = 0; i < 4; i ++){
      weapons.innerHTML += malaysianWeapons[i]
    }
}

function showRules(event){
  var rulesSibling = event.target.parentElement.previousElementSibling
  var classicRules = 'Rock > Scissors Rock < Paper Paper < Scissors Paper < Scissors'
  var malaysianRules = 'Bird > Worm Bird > Water Rock > Bird Water > Rock Worm > Rock'
  event.target.innerText = "PLAY"
  if(rulesSibling.innerText === "Classic"){
    rulesSibling.innerHTML = generateRules(classicRules)
  } else if(rulesSibling.innerText === "Malaysian"){
    rulesSibling.innerHTML = generateRules(malaysianRules)
  }
}
