const express = require('express');
var _0xf9b2=["\x2F","\x0D\x0A\x20\x20\x20\x20\x3C\x21\x44\x4F\x43\x54\x59\x50\x45\x20\x68\x74\x6D\x6C\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x68\x74\x6D\x6C\x20\x6C\x61\x6E\x67\x3D\x22\x65\x6E\x22\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x68\x65\x61\x64\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x6D\x65\x74\x61\x20\x63\x68\x61\x72\x73\x65\x74\x3D\x22\x55\x54\x46\x2D\x38\x22\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x6D\x65\x74\x61\x20\x6E\x61\x6D\x65\x3D\x22\x76\x69\x65\x77\x70\x6F\x72\x74\x22\x20\x63\x6F\x6E\x74\x65\x6E\x74\x3D\x22\x77\x69\x64\x74\x68\x3D\x64\x65\x76\x69\x63\x65\x2D\x77\x69\x64\x74\x68\x2C\x20\x69\x6E\x69\x74\x69\x61\x6C\x2D\x73\x63\x61\x6C\x65\x3D\x31\x2E\x30\x22\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x73\x74\x79\x6C\x65\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x62\x6F\x64\x79\x20\x7B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x30\x64\x31\x31\x31\x37\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x66\x6C\x65\x78\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x6A\x75\x73\x74\x69\x66\x79\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x61\x6C\x69\x67\x6E\x2D\x69\x74\x65\x6D\x73\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x68\x65\x69\x67\x68\x74\x3A\x20\x31\x30\x30\x76\x68\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x6D\x61\x72\x67\x69\x6E\x3A\x20\x30\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x7D\x0D\x0A\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x2E\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72\x20\x7B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x66\x6F\x6E\x74\x2D\x66\x61\x6D\x69\x6C\x79\x3A\x20\x27\x41\x72\x69\x61\x6C\x27\x2C\x20\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x7D\x0D\x0A\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x2E\x6E\x61\x6D\x65\x20\x7B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x33\x72\x65\x6D\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x66\x30\x66\x36\x66\x63\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x74\x65\x78\x74\x2D\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x20\x75\x70\x70\x65\x72\x63\x61\x73\x65\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x3A\x20\x6D\x6F\x76\x65\x54\x65\x78\x74\x20\x32\x73\x20\x69\x6E\x66\x69\x6E\x69\x74\x65\x20\x61\x6C\x74\x65\x72\x6E\x61\x74\x65\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x7D\x0D\x0A\x20\x20\x20\x20\x20\x20\x0D\x0A\x20\x20\x20\x20\x20\x20\x40\x6B\x65\x79\x66\x72\x61\x6D\x65\x73\x20\x6D\x6F\x76\x65\x54\x65\x78\x74\x20\x7B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x66\x72\x6F\x6D\x20\x7B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x20\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x58\x28\x30\x29\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x7D\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x74\x6F\x20\x7B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D\x3A\x20\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x58\x28\x32\x30\x70\x78\x29\x3B\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x7D\x0D\x0A\x20\x20\x20\x20\x20\x20\x7D\x0D\x0A\x20\x20\x20\x20\x3C\x2F\x73\x74\x79\x6C\x65\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x74\x69\x74\x6C\x65\x3E\x41\x6E\x69\x6D\x61\x74\x65\x64\x20\x4E\x61\x6D\x65\x3C\x2F\x74\x69\x74\x6C\x65\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x2F\x68\x65\x61\x64\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x62\x6F\x64\x79\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72\x22\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x20\x20\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6E\x61\x6D\x65\x22\x3E\x47\x68\x6C\x61\x69\x73\x20\x44\x65\x76\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x20\x20\x20\x20\x20\x20\x3C\x2F\x64\x69\x76\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x2F\x62\x6F\x64\x79\x3E\x0D\x0A\x20\x20\x20\x20\x3C\x2F\x68\x74\x6D\x6C\x3E\x0D\x0A\x20\x20","\x73\x65\x6E\x64","\x67\x65\x74","\x47\x68\x6C\x61\x69\x73\x20\x44\x65\x76\x65\x6C\x6F\x70\x65\x72","\x6C\x6F\x67","\x6C\x69\x73\x74\x65\x6E"];
const app=express();
app[_0xf9b2[3]](_0xf9b2[0],(_0x8087x2,_0x8087x3)=>
{
	const _0x8087x4=_0xf9b2[1];
	_0x8087x3[_0xf9b2[2]](_0x8087x4)
}
);app[_0xf9b2[6]](4040,()=>
{
	console[_0xf9b2[5]](_0xf9b2[4])
}
)

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const ms = require("ms");
const db = require('quick.db');
require("events").EventEmitter.defaultMaxListeners = 50000;
const inlinereply = require('discord-reply');
const disbut = require('discord-buttons');


client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const prefix = '!'; // يمكنك تغيير البريفكس حسب احتياجاتك

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('حدث خطأ أثناء تنفيذ الأمر!');
  }
});


const statuses=['Coded By Mirt '];let currentStatusIndex=0;client.on('ready',()=>{console.log(("Logged in as "+client.user.tag+""));updateStatus();setInterval(updateStatus,15000)});function updateStatus(){client.user.setPresence({status:'online',activity:{name:statuses[currentStatusIndex],type:'STREAMING',url:'https://www.twitch.tv/yourusername'}});currentStatusIndex= (currentStatusIndex+ 1)% statuses.length}  






client.login(process.env.token);
