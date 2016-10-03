export const quiz = {
	questions: [
		{
			'question': 'Что выведется в консоль?',
			'img': "http://telegram.funnycode.ga/img/js/1.png",
			'answer': 0,
			'variants': ['True', 'False', 'ReferenceError']
		},
		{
			'question': 'Что выведет алерт?',
			'img': "http://telegram.funnycode.ga/img/js/2.png",
			'answer': 3,
			'variants': ['function', 'number', 'object', 'undefined']
		},
		{
			'question': 'Какой будет результат вычесления?\n\n```\nNumber("1") -1 == 0;\n```',
			//'img': "http://telegram.funnycode.ga/img/js/3.png",
			'answer': 0,
			'variants': ['true', 'false', 'TypeError']
		},
		{
			'question': 'Какой будет результат вычесления?\n\n```\n(true + false) > 2 + true\n```',
			//'img': "http://telegram.funnycode.ga/img/js/4.png",
			'answer': 1,
			'variants': ['true', 'false', 'TypeError', 'NaN']
		},
		{
			'question': 'Что выведет алерт?',
			'img': "http://telegram.funnycode.ga/img/js/5.png",
			'answer': 1,
			'variants': ['number', 'function', 'undefined', 'string', 'error']
		},
		{
			'question': 'Какой будет результат вычесления?\n\n```\n"1" - - "1"\n```',
			//'img': "http://telegram.funnycode.ga/img/js/6.png",
			'answer': 1,
			'variants': ['0', '2', '11', '"11"']
		},
		{
			'question': 'Что выведется в алерты?',
			'img': "http://telegram.funnycode.ga/img/js/7.png",
			'answer': 3,
			'variants': ['1 и 2', '1 и 3', '2 и 1', '3 и 1', '2 и 3', '3 и 2']
		},
		{
			'question': 'Вес какого селектора больше?',
			'answer': 2,
			'variants': [
				'.element a {...}',
				'div.element a {...}',
				'.element .link {...}',
				'div.element p a {...}',
			]
		},
		{
			'question': 'Каким селектором можно выделить те элементы "a", ссылки которых начинаются на https?',
			'answer': 1,
			'variants': ['a[href]', 'a[href^="https"]', 'a[href~="https"]', 'a[href$="https"]']
		},
		{
			'question': 'Как выбрать только следущий сестринский элемент?',
			'answer': 3,
			'variants': ['.a * .b', '.a .b', '.a > .b', '.a + .b']
		},
		{
			'question': 'Без какого свойства псевдоэлементы `::before` и `::after` не будут добавлены в элемент?',
			'answer': 2,
			'variants': ['display', 'text-overflow', 'content', 'position']
		},
		{
			'question': 'Какое из приведенных свойств применятся к inline-элементу?',
			'answer': 2,
			'variants': ['width', 'margin-bottom', 'margin-left', 'height']
		},
		{
			'question': 'Всегда ли псевдокласс :root в html документе ссылается на `<html>` элемент?',
			'answer': 0,
			'variants': ['да', 'нет', 'иногда', 'зависит от контекста', 'зависит от браузера']
		}
	]
};
