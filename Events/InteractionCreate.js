const { MessageEmbed, Interaction, Permissions } = require('discord.js'),
 log = require('../Functions/PrimeLogger');

module.exports = {
	name: 'guildDelete',
	once: false,
    /**
     * @param {Interaction} interaction 
     */
	async execute(interaction) {

        if (!interaction.guild.available) return;
        // ye permission checker sade
        if (!interaction.channel.permissionsFor(interaction.guild.me).has([Permissions.FLAGS.USE_EXTERNAL_EMOJIS,
        Permissions.FLAGS.ATTACH_FILES, Permissions.FLAGS.EMBED_LINKS], true)) {
            return await interaction.reply(
                ':x: | No permission',
            );
        }
        if (interaction.isCommand()) {
    
            if (!bot.commands.has(interaction.commandName)) return;
            const command = bot.commands.get(interaction.commandName);
            if (!command) return;
    
            try {
                await command.execute(interaction, bot);
                // inja harchi bara ranking bekhayd bezarid!
            } catch (error) {
                console.error(`[${chalk.red('INTERACTION')}] - ` + error);
                const Bug = new MessageEmbed()
                    .setColor('RED')
                    .setDescription('**خطا در اجرای کامند**');
                return await interaction.reply({ embeds: [Bug], ephemeral: true });
                // mitoonid inja az ye webhook (bara inke khodetoon ham khabardar beshid az error) estefade konid.
            }
        }
    

	},
};