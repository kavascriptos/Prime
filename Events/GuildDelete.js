const { Guild, MessageEmbed } = require('discord.js'),
 log = require('../Functions/PrimeLogger'),
 Config = require('../config.json');

module.exports = {
	name: 'guildDelete',
	once: false,
    /**
     * @param {Guild} guild 
     */
	execute(guild, bot) {

        if (!guild.available) return;
	    log('leave', `Guild Name : ${guild.name} | Guild ID : ${guild.id} | Owner ID : ${guild.ownerId}`);

	},
};