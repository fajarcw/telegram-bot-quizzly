import fs from 'fs';
import winston from 'winston';

import config from '../config.json';
import {isValidEmail} from './helpers';
import {answers, errorMessages} from './messages';

//import {quiz} from './quiz/php';
var quiz = require(config.file).quiz;

const skipText = ['/next', '/skip', 'следующий', 'пропустить'];

/**
 *
 */
export default class Chat {

	/**
	 *
	 * @type {{id: number, first_name: string, last_name: string, username: string, phone: string, mail: string}}
	 */
	user = {
		id: 0,
		first_name: '',
		last_name: '',
		username: '',
		phone: '',
		mail: ''
	};

	/**
	 *
	 * @type {{quiz: {number: {current: number, total: number}}, error: {mail: number, phone: number}}}
	 */
	counter = {
		quiz: {
			number: {
				current: 0,
				total: 0
			},
			index: 0
		},
		error: {
			mail: 0,
			phone: 0
		}
	};

	/**
	 *
	 * @type {{started: boolean}}
	 */
	flag = {
		started: false
	};

	/**
	 *
	 * @type {Array}
	 */
	questions = [];

	/**
	 *
	 * @type {null}
	 */
	question = null; // generator

	finish = 0;

	/**
	 *
	 * @param request
	 * @param bot
	 */
	constructor(request, bot, fromDump = false) {

		const {
			chat: {id: chatId},
			from
		} = request;

		this.user = from;
		this.user.mail = '';
		this.user.phone = '';

		this.fromDump = fromDump;

		this.run = func=> {
			this.workdir = `log/${chatId}`;
			this.loadQuestions();
			this.logInit('dia.log');

			if (!fs.existsSync(this.workdir)) {
				fs.mkdirSync(this.workdir);
			}
		}
	}

	/**
	 *
	 * @param obj
	 */
	init(obj) {
		let state = JSON.parse(obj);

		for (let k in state) {
			this[k] = state[k];
		}
	}

	/**
	 *
	 */
	afterRun(n) {
		for (let i = 1; i <= this.counter.quiz.number.total; i++) {
			this.question.next();
			if (n == i) return;
		}
	}


	/**
	 *
	 * @param text
	 * @param bot
	 * @param chatId
	 * @returns {Promise.<TResult>|*}
	 */
	answer(text, bot, chatId) {

		var sender;

		const sendMessage = (text, data) => {
			if (text.length == 0) text = '☺';
			return bot.sendMessage(chatId, text, data);
		};

		// Auth mail
		if (!this.user.mail) {

			let mail = text.toLowerCase();

			if (!isValidEmail(mail)) {
				sendMessage(
					errorMessages.mail[
						++this.counter.error.mail == errorMessages.mail.length - 1
							? this.counter.error.mail = 0
							: this.counter.error.mail
						]
				);
				return;
			}
			this.user.mail = mail;
			this.log({mail});
		}

		// Auth phone
		if (!this.user.phone) {

			let phone = text.replace(/[^\d]/g, '');
			if (phone.length < 10) {
				//if (0) {
				if (this.counter.error.phone == errorMessages.phone.length - 1) {
					sendMessage('Ну ок, уговорил. Проходи тест, но ты тогда будешь вне турнирной таблицы.');
					this.user.phone = '99999999999';
				}
				else {
					sendMessage(errorMessages.phone[this.counter.error.phone++]);
					return;
				}
			}
			else {
				this.user.phone = phone;
				this.log({phone});
			}

			// Send first question
			sender = sendMessage('Теперь я готов задать первый вопрос. Поехали!');
			this.log({
				start: 1,
				user: this.user
			});

			if (!this.fromDump) this.dump();
		}


		// Started
		if (this.flag.started && this.finish < 1) {

			let currentQuestion = this.questions[this.counter.quiz.index++];
			currentQuestion.stat.stop = +new Date;

			if (skipText.indexOf(text.toLowerCase()) > -1) { // Skip question
				sender = sendMessage('Окей, пропускаем вопрос');

				this.log({
					msg: {
						num: this.counter.quiz.number.current,
						text,
						stat: currentQuestion.stat,
						skip: 1
					}
				});
			}
			else { // Get answer
				let txt = '';

				// Check exists answer in answers array
				if (currentQuestion.variants.indexOf(text) < 0) {
					txt = 'Интересная точка зрения :)';

					this.log({
						msg: {
							num: this.counter.quiz.number.current,
							text,
							stat: currentQuestion.stat
						}
					});
				}
				else {
					let answt = 'good';

					if (currentQuestion.variants[currentQuestion.answer] == text) {
						console.log('OK');
						currentQuestion.right = currentQuestion.stat.stop - currentQuestion.stat.start;
						this.log({
							msg: {
								num: this.counter.quiz.number.current,
								text,
								stat: currentQuestion.stat,
								right: currentQuestion.right
							}
						});
					}
					else {
						answt = 'wrong';
						this.log({
							msg: {
								num: this.counter.quiz.number.current,
								text,
								stat: currentQuestion.stat
							}
						});
					}

					txt = answers[answt][Math.round(Math.random() * 10)];
				}

				sender = sendMessage(txt);
			}
		}
		else {
			this.flag.started = true;
		}

		// Finish
		if (this.counter.quiz.number.current === this.counter.quiz.number.total) {
			if (!this.finish) {
				sendMessage(
					'У меня закончились вопросы. Мы обрабатываем результаты.\n' +
					'Тем временем ты можешь пройти другие наши тесты или пообщаться с нашими специалистами у стенда Tutu.ru.\n\n' +
					'Так же ты можешь попробовать себя в других наших тестах:\n' +
					'Если ты окажешься среди победителей, то мы с тобой свяжемся и вручим тебе приз' +
					'Повторное прохождение теста возможно через 24 часа',
					{reply_markup: JSON.stringify({hide_keyboard: true})}
				);

				this.log({stop: 1});

				this.finish = 1;
			}
			else {
				if (++this.finish < 3) sendMessage('Диалог окончен, спасибо что приняли участие =)');
				else return;
			}
		}
		else {
			if (this.fromDump) {
				//++this.counter.quiz.number.current;
				//this.question.next();
			}

			// Send question
			if (!sender)
				sender = sendMessage('Эхе хей, отвечай быстрей!!!');

			sender
				.then($=> {
					let quiz = this.question.next().value;
					sendMessage(
						`✅ Вопрос ${++this.counter.quiz.number.current} из ${this.counter.quiz.number.total}\n\n${quiz.text}`,
						quiz.data
					);
				});

		}
	}

	/**
	 *
	 * @param logFile
	 */
	logInit(logFile) {
		this.logFile = `${this.workdir}/${logFile}`;
		this.logger = new (winston.Logger)({
			transports: [
				new (winston.transports.Console)(),
				new (winston.transports.File)({filename: this.logFile})
			]
		});
	}

	/**
	 *
	 * @param msg
	 * @returns {*}
	 */
	log(msg) {
		return this.logger.info(msg)
	}

	/**
	 *
	 */
	serialize() {
		return JSON.stringify({
			user: this.user,
			counter: this.counter,
			questions: this.questions,
		});
	}

	/**
	 *
	 */
	dump() {
		let dump = this.serialize(),
			path = `${this.workdir}/dump.json`;

		fs.writeFile(path, dump, err => {
			if (err) return console.log(err);
			console.log('Dump was saved on disk');
		});
	}

	/**
	 *
	 * @param questions
	 * @returns {Array}
	 */
	getQuestions(questions) {
		let list = [];

		//for (let q of questions) {
		for (let i in questions) {
			let keyboard = [],
				a = [],
				q = questions[i];

			for (let k of q.variants) {
				if (k.length > 8) {
					keyboard.push([k]);
				}
				else {
					if (a.length > 4) {
						keyboard.push(a);
						a = [];
					}
					a.push(k);
				}
			}

			if (a.length > 0) keyboard.push(a);
			keyboard.push(['Пропустить']);


			list.push({
				i: parseInt(i),
				text: q.question,
				data: {
					resize_keyboard: true,
					reply_markup: JSON.stringify({keyboard}),
					parse_mode: 'Markdown'
				},
				answer: q.answer,
				variants: q.variants,
				stat: {
					start: 0,
					stop: 0
				},
				//right: ''
			});
		}

		return list;
	}

	/**
	 *
	 */
	* getQuestion() {
		for (let q in this.questions) {
			this.questions[q].stat.start = +new Date;
			yield this.questions[q];
		}
	}


	/**
	 *
	 */
	loadQuestions() {

		if (this.questions.length == 0) {
			let questions = this.getQuestions(quiz.questions.sort(()=>.5 - Math.random()));
			this.counter.quiz.number.total = questions.length;
			this.questions = questions;
		}

		this.question = this.getQuestion();
	}
}

