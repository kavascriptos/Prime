const { MessageEmbed, ClientEvents } = require('discord.js'),
 log = require('../Functions/PrimeLogger');

module.exports = {
	name: 'error',
	once: false,
    /**   
     * @param {ClientEvents} error
     */
	execute(error) {

        log('error', e);
                 
	},
};