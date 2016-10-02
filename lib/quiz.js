

export const quiz = {
	php: {
		questions: [
			{
				'question': "Какой будет результат работы кода?\n\n```\n$str = 'День ITшника';\necho mb_strlen($str) <=> strlen($str);\n```",
				'answer': 3,
				'variants': ['12', '0', '21', '-1', '1', 'ошибка']
			},
			{
				'question': "Какой будет результат работы кода?\n\n`var_dump(in_array(0, ['cf', 'cats']));`\n",
				'answer': 1,
				'variants': ['bool(false)', 'bool(true)', 'warning']
			},
			{
				'question': 'Какой будет результат работы кода?\n\n```\n$a = 07;\n$b = 08;\necho $a . $b;\n```',
				'answer': 3,
				'variants': ['0708', '78', '708', 'ошибка']
			},
			{
				'question': "Что будет в переменной $b?\n\n```\n$a = ['a','b','c'];\nforeach ($a as $b)\n\t$b++;\n```",
				'answer': 1,
				'variants': ['1', 'd', '3', '4']
			},
			{
				'question': "Что будет в переменной $list?\n\n```\n$list = [2,9];\nforeach ($list as $num)\n\t$list[] = ++$num;\n```\n",
				'answer': 1,
				'variants': ['[2,9,3,10,4,11]', '[2,9,3,10]', '[2,9]', 'Бесконечный цикл']
			},
			{
				'question': "Что будет в переменной $list?\n\n```\n$list = [2,9];\n\nfor ($i=0; $i<count($list); $i++)\n\t$list[] = $list[$i];\n```",
				'answer': 2,
				'variants': ['[2,9,3,10,4,11]', '[2,9,3,10]', '[2,9]', 'Бесконечный цикл']
			}
		]
	},
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
	},
	logic: {
		questions: [
			{
				'question': 'Каким числом можно продолжить приведенную ниже последовательность:\n 0 0 1 2 2 4 3 6 4 8 5 ?',
				'answer': '10',
				'variants': ['6', '8', '10', '12', '14']
			},
			{
				'question': 'Вы соревнуетесь в беге на короткую дистанцию и обгоняете бегуна, занимающего вторую позицию.\nНа каком месте вы оказываетесь в этот момент?',
				'answer': 'На втором',
				'variants': ['На первом', 'На втором', 'На третьем', 'На четвертом']
			},
			{
				'question': 'Какой буквой можно продолжить такую последовательность: ю я ы ъ ш щ ч ц',
				'answer': 'с',
				'variants': ['р', 'с', 'т', 'у', 'ф']
			},
			{
				'question': 'В магазине одежды дважды последовательно уценили свитер - на 30% и на 10%. Эквивалентная разовая скидка составила бы:',
				'answer': '37%',
				'variants': ['34%', '36%', '37%', '38%', '40%']
			},
			{
				'question': 'Какая из приведенных ниже дробей самая маленькая?',
				'answer': '11/20',
				'variants': ['11/20', '5/6', '5/7', '2/3', '3/4']
			},
			{
				'question': 'Если определенным образом переставить буквы МАЕИНЯРГ, то получится название:',
				'answer': 'страны',
				'variants': ['животного', 'штата', 'города', 'страны', 'океана']
			},
			{
				'question': 'Выберите любое двузначное число. Сложите составляющие его цифры. Затем вычтите получившееся число из исходного. Какой вы получите результат?',
				'answer': '36',
				'variants': ['34', '32', '36', '33', '35', '31']
			}
		]
	}
};
