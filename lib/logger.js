import winston from 'winston';

const loggerMessage = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.File)({filename: 'log/message.log'})
	]
});

export const logMessage = msg => loggerMessage.info(msg);


const loggerAnswer = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.File)({filename: 'log/answer.log'})
	]
});

export const logAnswer = msg => loggerAnswer.info(msg);

