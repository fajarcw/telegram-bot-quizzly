require("babel-core/register");
require("babel-polyfill");

import fs from 'fs';
import TelegramBot from 'node-telegram-bot-api';

import config from '../config.json';
//import {logMessage, logAnswer} from './logger';

import * as Messages from './messages';
import Chat from './Chat';


const bot = new TelegramBot(config.token, {polling: true});
const chat = {};

const isset = (k, o) => k in o && o[k];

bot.getMe().then((...a)=> {
	console.log(a)
});

bot.on('text', request => {

	let {
		text,
		chat: {id: chatId},
		from
	} = request;

	/**
	 *
	 * @param text
	 * @param data
	 * @returns {*}
	 */
	const sendMessage = (text, data) => {
		if (text.length == 0) text = '☺';
		return bot.sendMessage(chatId, text, data);
	};


	if (chat.hasOwnProperty(chatId)) {
		if (chat[chatId].finish > 3)
			chat[chatId] = 1;
	}
	else {
		let dumpFile = `log/${chatId}/dump.json`,
			logFile = `log/${chatId}/dia.log`;

		if (fs.existsSync(dumpFile) && fs.existsSync(logFile)) {

			let rows = fs.readFileSync(logFile).toString().split("\n");
			let state = '';

			let i = rows.length;
			while (i-->-1) {
				if (rows[i].length > 0) {
					try {
						state = JSON.parse(rows[i]);
						break;
					} catch (e) {
						console.log(e);
					}
				}
			}

			if (state.stop == 1) {
				chat[chatId] = 1;
				sendMessage(
					'Спасибо за уделенное внимание! Тест пройден достойно.',
					{reply_markup: JSON.stringify({hide_keyboard: true})}
				);
			}

			if (state.start == 1 || state.hasOwnProperty('msg')) {
				console.log('Init state from dump');
				try {
					chat[chatId] = new Chat(request, bot, true);
					chat[chatId].init(fs.readFileSync(dumpFile).toString());
					chat[chatId].run();

					if (state.start == 1) {
						//
					}

					if (state.msg) {
						chat[chatId].counter.quiz.number.current = ++state.msg.num;
						chat[chatId].counter.quiz.index = state.msg.num -1;
						chat[chatId].flag.started = true;
						chat[chatId].afterRun(state.msg.num);
					}

				} catch (e) {
					console.log(e);
				}
			}
		}

	}

	switch (text) {
		case '/help':
			sendMessage(Messages.help);
			break;

		case '/start':
			if (chat.hasOwnProperty(chatId)) {
				let txt;

				if (chat[chatId].finish < 1) {
					txt = '❗️ А мы вроде как уже начали... Промотай выше, посмотри лог диалога';
				}
				else {
					txt = 'Ты уже прошел тест. Повторно пройти его можно будет только завтра';
				}

				sendMessage(txt);
				return;
			}

			const getName = from => {
				let a = [];
				if (isset('first_name', from)) a.push(from.first_name);
				if (isset('last_name', from)) a.push(from.last_name);
				if (!a && isset('username', from)) a[0] = from.username;
				return a.join(' ');
			};

			sendMessage(
				Messages.hello(config, getName(from)),
				{reply_markup: JSON.stringify({hide_keyboard: true})}
			)
				.then(() => {
					chat[chatId] = new Chat(request, bot);
					chat[chatId].run();
					sendMessage(Messages.inputAbout);
				})
			;
			break;

		default:
			if (!chat.hasOwnProperty(chatId)) {
				sendMessage(`❗️ Что-то пошло не так. Я сбился с мысли и потерял контекст общения.
Я не знаю как отреагировать на "${text}" в текущем диалоге.
Предлагаю начать все с начала, просто нажми на /start`,
					{reply_markup: JSON.stringify({hide_keyboard: true})}
				);
				return;
			}

			if (chat[chatId].answer) {
				chat[chatId].answer(text.replace(/[\r\n]/g, ' ').trim(), bot, chatId);
			}
	}
});


