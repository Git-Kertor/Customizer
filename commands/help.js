const Discord = require("discord.js");

const { prefix } = require("../config.js");

let commands = {};

module.exports = {
  name: "help",
  description: "commands",
  execute: (message, args) => {
    message.channel.send("Customs?");
  },
  setCommands: (newCommands) => {
    commands = newCommands;
  }
}