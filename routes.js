const path = require('path'),
  log = require('./Functions/PrimeLogger'),
  Config = require('./config.json'),
  { Client } = require("discord.js"),
  express = require('express'),
  axios = require('axios'),
  db = require('quick.db'),
  Topgg = require('@top-gg/sdk'),
  weebhook = new Topgg.Webhook(Config.TOPGGWEBHOOK);

/** 
 * @param {Client} bot 
 * @param {Number} port 
 */
module.exports = async function (bot, port) {

  //  const express = require('express')
  const app = express();

  app.use(express.json());
  app.use(express.raw())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.static("public"));
  //folder "public" mitoonid file haye site berizid va ba danesh express.js site o bot ro hamzaman start bezanid.


  app.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname, '/public/test.html'));
  });


  app.listen(80, () => {
    log('api', `Running On https://localhost:${port}`)
  })


}
