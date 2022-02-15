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
  name: "champion",
  description: "randomChampion",
  execute: (message, args) => {    
    message.channel.send(splits[getRandomInt(splits.length)]);
  },
}