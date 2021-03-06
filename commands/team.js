const Discord = require("discord.js");
const { prefix } = require("../config.js");

var fs = require('fs');
var path = require('path');
var truePath = path.join(__dirname, '../champions.txt');

var data = fs.readFileSync(truePath);
splits = data.toString().split("\n");

let commands = {};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = {
  name: "team",
  description: "randomTeamComp",
  execute: (message, args) => {    
    if(args.length > 1) {
      args = args.sort(() => Math.random() - Math.random());
      var str = "";
      str += "Team One: ";
      for(let i = 0; i < args.length / 2; i++) {
        str += args[i];
      if(i < args.length / 2 - 1) {str += ", ";}
      }
      str += "\nTeam Two: "
      for(let i = args.length / 2; i < args.length; i++) {
        str += args[i];
      if(i < args.length - 1) {str += ", ";}
    }
      message.channel.send(str);
      return;
    }
    args[0] = parseInt(args[0]);
    var shuffled_one = splits.sort(() => Math.random() - Math.random()).slice(0, args);
    var shuffled_two = splits.sort(() => Math.random() - Math.random()).slice(0, args);
    var str = "";
    str += "Team One: "
    for(let i = 0; i < shuffled_one.length; i++) {
      str += shuffled_one[i];
      if(i < shuffled_one.length - 1) {str += ", ";}
    }
    str += "\nTeam Two: "
    for(let i = 0; i < shuffled_two.length; i++) {
      str += shuffled_two[i];
      if(i < shuffled_two.length - 1) {str += ", ";}
    }
    str += " ";
    message.channel.send(str);
  },
}
