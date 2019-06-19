const Discord = require('discord.js');
const config = require('./config');
const client = new Discord.Client();
client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', (message) => {
	if (message.content == '!help') {
		let m =
			'fsb-ledger. Developed by BuffMan \n\n Examples commands: \n' +
			'`!boughtshare aapl 200 197.32` -> Logs 200 shares of AAPL bought at 197.32 \n' +
			'`!boughtoption tsla 6/24 10p` -> Logs TSLA put option with 10 strike expiring 6/24 \n' +
			'`!bo spy adbe 9/20 300c` -> Logs ADBE call option with 300 strike expiring on 9/20 \n' +
			'`!bs tsla 5 208.3` -> Logs 5 shares of TSLA bought at 208.3';
		('Contact BuffMan for more info and feature requests :)');
		message.channel.send(m);
	} else if (message.content.startsWith('!boughtoption') || message.content.startsWith('!bo ')) {
		console.log('OPTIONS');
		let params = message.content.split(' ').filter((s) => {
			return s.length > 0 && s != '!boughtoption' && s != '!bo';
		});
		console.log(params);
		//check params
		let safeToProceed = true;
		if (params[2]) {
			if (!params[2].includes('c') && !params[2].includes('p')) {
				safeToProceed = false;
			}
		}
		if (params[1]) {
			if (!params[1].includes('/')) {
				safeToProceed = false;
			}
		}

		if (params.length < 3) safeToProceed = false;
		if (safeToProceed) {
			let ticker = 'Ticker: **' + params[0].toUpperCase() + '** \n';
			let exp = 'Expiration: **' + params[1] + '** \n';
			let strike = 'Strike: **' + params[2] + '** \n';
			let m =
				'<@' +
				message.member.user.id +
				'> has entered a new _option_ position: \n' +
				ticker +
				exp +
				strike +
				'\n';
			// message.channel.send(m);
			client.channels.get(config.LEDGER_CHANNEL_ID).send(m);
		}
	} else if (message.content.startsWith('!boughtshare') || message.content.startsWith('!bs ')) {
		console.log('SHARES');
		let params = message.content.split(' ').filter((s) => {
			return s.length > 0 && s != '!boughtshare' && s != '!bs';
		});
		console.log(params);
		//check params
		let safeToProceed = true;
		if (params[2]) {
			if (!isNumber(params[2])) {
				console.log(params);
				safeToProceed = false;
			}
		}
		if (params[1]) {
			if (!isNumber(params[1])) {
				safeToProceed = false;
			}
		}
		console.log(safeToProceed);
		if (safeToProceed) {
			let ticker = 'Ticker: **' + params[0].toUpperCase() + '** \n';
			let amount = 'Amount: **' + params[1] + '** \n';
			let price = 'Price: **' + params[2] + '** \n';
			let m =
				'<@' +
				message.member.user.id +
				'> has entered a new _stock_ position: \n' +
				ticker +
				amount +
				price +
				'\n';
			// message.channel.send(m);
			client.channels.get(config.LEDGER_CHANNEL_ID).send(m);
		}
	}
});

function isNumber(input) {
	var RE = /^-{0,1}\d*\.{0,1}\d+$/;
	return RE.test(input);
}

client.login(config.BOT_TOKEN);
