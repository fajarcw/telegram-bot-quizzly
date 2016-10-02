
export const quiz = {
	js: {
		questions: [
			{
				'question': 'Что выведется в консоль?',
				'img': "./img/js/1.png",
				'answer': 'True',
				'variants': ['True', 'False', 'ReferenceError']
			},
			{
				'question': 'Что выведет алерт?',
				'img': "./img/js/2.png",
				'answer': 'undefined',
				'variants': ['function', 'number', 'object', 'undefined']
			},
			{
				'question': 'Какой будет результат вычесления?',
				'img': "./img/js/3.png",
				'answer': 'true',
				'variants': ['true', 'false', 'TypeError']
			},
			{
				'question': 'Какой будет результат вычесления?',
				'img': "./img/js/4.png",
				'answer': 'false',
				'variants': ['true', 'false', 'TypeError', 'NaN']
			},
			{
				'question': 'Что выведет алерт?',
				'img': "./img/js/5.png",
				'answer': 'function',
				'variants': ['number', 'function', 'undefined', 'string', 'error']
			},
			{
				'question': 'Какой будет результат вычесления?',
				'img': "./img/js/6.png",
				'answer': '2',
				'variants': ['0', '2', '11', '"11"']
			},
			{
				'question': 'Что выведется в алерты?',
				'img': "./img/js/7.png",
				'answer': '3 и 1',
				'variants': ['1 и 2', '1 и 3', '2 и 1', '3 и 1', '2 и 3', '3 и 2']
			},
			{
				'question': 'Что будет выведено в консоль?',
				'img': "./img/js/8.png",
				'answer': '1',
				'variants': ['1', '2', 'undefined']
			},
			{
				'question': 'Что будет выведено в консоль?',
				'img': "./img/js/9.png",
				'answer': '1',
				'variants': ['undefined', '2', '1']
			},
			{
				'question': 'Что будет выведено в консоль?',
				'img': "./img/js/10.png",
				'answer': '1',
				'variants': ['1', '2', 'undefined']
			},
		]
	},
	css: {
		questions: [
			{
				'question': 'Как выбрать все теги <p> на странице?',
				'answer': 'p { }',
				'variants': ['p { }', '#p { }', '.p { }', '<p> { }'],
				'info': 'some info'
			},
			{
				'question': 'Как расшифровывается CSS?',
				'answer': 'Cascading Style Sheets',
				'variants': ['Creative Style Sheets', 'Computer Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets']
			},
			{
				'question': 'Вес какого селектора больше?',
				'answer': '.element .link {...}',
				'variants': [
					'.element a {...}',
					'div.element a {...}',
					'.element .link {...}',
					'div.element p a {...}',
				]
			},
			{
				'question': 'Каким селектором можно выделить те элементы "a", ссылки которых начинаются на https?',
				'answer': 'a[href^="https"]',
				'variants': ['a[href]', 'a[href^="https"]', 'a[href~="https"]', 'a[href$="https"]']
			},
			{
				'question': 'Как выбрать только следущий сестринский элемент?',
				'answer': '.a + .b',
				'variants': ['.a * .b', '.a .b', '.a > .b', '.a + .b']
			},
			{
				'question': 'Без какого свойства псевдоэлементы ::before и ::after не будут добавлены в элемент?',
				'answer': 'content',
				'variants': ['display', 'text-overflow', 'content', 'position']
			},
			{
				'question': 'Какое из приведенных свойств применятся к inline-элементу?',
				'answer': 'margin-left',
				'variants': ['width', 'margin-bottom', 'margin-left', 'height']
			},
			{
				'question': 'Всегда ли псевдокласс :root в html документе ссылается на `<html>` элемент?',
				'answer': 'да',
				'variants': ['да', 'нет', 'иногда', 'зависит от контекста', 'зависит ']
			},
			{
				'question': 'Если тегу p задать свойство font-size: 10rem, будет ли текст меняться в размере, если пользователь будет ресайзить браузер?',
				'answer': 'нет',
				'variants': ['да', 'нет']
			},
			{
				'question': 'Выберите лишнее:',
				'answer': 'hsl',
				'variants': ['vw', 'rem', 'hsl', 'vh']
			},
		]
	}
};
