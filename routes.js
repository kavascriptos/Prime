const path = require('path');
const log = require('./Functions/PrimeLogger');
const Config = require('./config.json');
const { MessageEmbed } = require("discord.js");
const axios = require('axios');
const db = require('quick.db');
const Topgg = require('@top-gg/sdk');
const weebhook = new Topgg.Webhook(Config.TOPGGWEBHOOK);

module.exports = async function(discord, app, express, port) {

//  const express = require('express')
//  const app = express()

app.use(express.json());
app.use(express.raw())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));
//folder "public" mitoonid file haye site berizid va ba danesh express.js site o bot ro hamzaman start bezanid.

   



    app.get('/', function(req, res) {
        return res.sendFile(path.join(__dirname, '/public/test.html'));
      });

  

    
    app.listen(80, () => {
     log('api', `Running On https://localhost:${port}`)
    })
    

}
