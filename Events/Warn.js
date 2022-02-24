const { MessageEmbed, ClientEvents } = require('discord.js'),
 log = require('../Functions/PrimeLogger');

module.exports = {
	name: 'warn',
	once: false,
    /**   
     * @param {ClientEvents} warn
     */
	execute(warn) {

        log('error', warn);
                 
	},
};