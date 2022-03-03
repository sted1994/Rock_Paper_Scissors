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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var newPlayer = new Player()
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
  hideElement(characterSelectionPage);
  showElement(gameSelectionPage);
  hideElement(gameplayPage);
}

function displayClassicGame(){
  showElement(gameplayPage);
  hideElement(gameSelectionPage);
  hideElement(characterSelectionPage);
}

function displayMalaysianGame(){
  displayClassicGame();
  paperImg.src = "./assets/Bird_emoji.png"
  scissorImg.src = "./assets/Water_emoji.png"
  console.log(scissorImg.classList)
  scissorImg.parentElement.classList.remove('classic-margin')
  console.log(scissorImg.classList)
  weapons.innerHTML += `
  <button class="weapon-button"><img class="paper-img" src="./assets/Worm_emoji.png" alt=""></button>`

}

function makeNewPlayer(event){
  newPlayer.name = event.target.parentElement.classList[0];
  newPlayer.token = event.target.src;
}

function showRules(event, classicRulesClick){
  var rulesSibling = event.target.parentElement.previousElementSibling
  var classicRules = 'Rock > Scissors Rock < Paper Paper < Scissors Paper < Scissors'
  var malaysianRules = 'Bird > Worm Bird > Water Rock > Bird Water > Rock Worm > Rock'
  event.target.innerText = "PLAY"
  if(rulesSibling.innerText === "Classic"){
    rulesSibling.innerHTML = `
    <button class="classic big-button" style="font-size: 20px">${classicRules}</button>`
  } else if(rulesSibling.innerText === "Malaysian"){
    rulesSibling.innerHTML =`
    <button class="classic big-button" style="font-size: 25px">${malaysianRules}</button>`
  }
}
