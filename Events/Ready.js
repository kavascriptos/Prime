const { Client } = require('discord.js'),
 log = require('../Functions/PrimeLogger');

module.exports = {
	name: 'ready',
	once: false,
    /**
     * @param {Client} bot 
     */
	execute(bot) {

		log('ready', `Prime Handler V13 Connected To Discord API / Login as ${bot.user.tag}`);
	    log('newz', 'Prefix : /');

	},
};