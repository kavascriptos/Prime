const { Guild, MessageEmbed, Client } = require('discord.js'),
 log = require('../Functions/PrimeLogger'),
 Config = require('../config.json');

module.exports = {
	name: 'guildCreate',
	once: false,
    /**
     * @param {Guild} guild 
     * @param {Client} bot
     */
	execute(guild, bot) {

        if (!guild.available) return;
        log('join', `Guild Name : ${guild.name} | Guild ID : ${guild.id} | Owner ID : ${guild.ownerId}`);
        bot.channels.cache.get(Config.JoinServerChannel)
            .send({
                embeds: [
                    new MessageEmbed()
                        .setColor('GREEN')
                        .setThumbnail(guild.iconURL({ dynamic: true }))
                        .setTitle(`> New Server : **${guild.name}**`)
                        .setFooter({ text: 'Prime Handler', iconURL: bot.user.displayAvatarURL({ size: 512, dynamic: false }) }),
                ],
            });

	},
};