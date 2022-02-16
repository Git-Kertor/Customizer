const Discord = require("discord.js");
const { prefix } = require("../config.js");

var fs = require('fs');
var path = require('path');
var runePath = path.join(__dirname, '../runes.txt');

var dataR = fs.readFileSync(runePath);
var dataS = dataR.toString().split("\n");

let commands = {};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
  name: "runes",
  description: "randomRunes",
  execute: (message, args) => {   
    var teamSize = parseInt(args[0]);
    var str = "";
    str += "Team One: ";
    for(let i = 0; i < teamSize; i++) {
      str += splits[getRandomInt(dataS.length)];
      if(i < teamSize - 1) {str += ", ";}
    }
    str += "\nTeam Two: ";
    for(let i = 0; i < teamSize; i++) {
      str += splits[getRandomInt(dataS.length)];
      if(i < teamSize - 1) {str += ", ";}
    }
    message.channel.send(str);
  },
}
