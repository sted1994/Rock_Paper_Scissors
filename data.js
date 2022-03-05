var classicRuleClicks = 0;
var malaysianRuleClicks = 0;
var newGame;
var players = [];
var gameWeapons = {
  classic: ['rock-img', 'paper-img', 'scissor-img'],
  malaysian: ['rock-img','bird-img','water-img','worm-img'],
};

var weaponsWeaknesses = {
  'rock-img': ['paper-img', 'water-img', 'worm-img'],
  'paper-img': ['scissors-img'],
  'scissors-img': ['rock-img'],
  'bird-img': ['rock-img'],
  'water-img': ['bird-img'],
  'worm-img': ['bird-img', 'water-img'],
}
