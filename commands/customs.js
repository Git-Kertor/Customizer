const Discord = require("discord.js");
const { prefix } = require("../config.js");

module.exports = {
  name: "customs",
  description: "respone",
  execute: (message, args) => {    
    message.channel.send("Did someone say customs?");
  },
}
