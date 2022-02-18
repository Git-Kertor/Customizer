const Discord = require("discord.js");

const { prefix } = require("../config.js");

let commands = {};

module.exports = {
  name: "help",
  description: "commands",
  execute: (message, args) => {
    message.channel.send("!champion for a random champion\n!runes (x) for random runes\n!team (x) for random teams");
  },
  setCommands: (newCommands) => {
    commands = newCommands;
  }
}
