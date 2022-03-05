var classicRuleClicks = 0;
var malaysianRuleClicks = 0;
var newGame;
var players = [];
var gameWeapons = {
  classic: ['rock', 'paper', 'scissor'],
  malaysian: ['rock','bird','water','worm'],
};

var weaponsWeaknesses = {
  'rock': ['paper', 'water', 'worm'],
  'paper': ['scissors'],
  'scissor': ['rock'],
  'bird': ['rock'],
  'water': ['bird'],
  'worm': ['bird', 'water'],
}
