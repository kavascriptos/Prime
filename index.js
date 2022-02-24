const { Client, Intents, Collection } = require('discord.js'),
	bot = new Client({ intents: [Intents.FLAGS.GUILDS] }),
	fs = require('fs');

/*
logger sade!
*/
const log = require('./Functions/PrimeLogger'),
	Config = require('./config.json');

const commandz = [];
bot.commands = new Collection();


/*
Nokati dar mored code zir

1. (Commands) ro mitoonid taghir bedid bayad to kol in gesmat esm folder ro bznid
2. sabk in handler ine ke toye folder ham bayad folder bzanid :
	Commands
		|_ Fun Commands
							|_ magik.js
							|_ fun.js
		|_ Admin Commands
								|_ ban.js
								|_ test.js
*/
const commandsFolder = fs.readdirSync('./Commands');
for (const folder of commandsFolder) {
	const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./Commands/${folder}/${file}`);
		if (command.readdata === true) {
			log('reading', `Loading ${file}(s) from ./Commands/${folder}`);
			commandz.push(command.data);
			bot.commands.set(command.data.name, command);
		}
	}
}
///////////////////////////////////////////////////////
const eventFiles = fs.readdirSync('./Events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./Events/${file}`);
	if (event.once) {
		bot.once(event.name, (...args) => event.execute(...args));
	} else {
		bot.on(event.name, (...args) => event.execute(...args));
	}
}


/*
code zir :
full etelaat to file khodeshe
*/
require('./ControlPanel')(bot);
/*
function routes bara rah endakhtan site shomast hamzaman ba bot bara masaref API o ...
etelaat bishtaro to routes.js bbnid
*/
require('./Routes')(bot, 80)


process.on('unhandledRejection', (error, p) => {
	log('unhandle', `Error : ${error}\nMessage : ${error.message}`);
	console.dir(error.stack);
});


bot.login(Config.TOKEN);
