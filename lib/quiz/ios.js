export const quiz = {
	questions: [
		{
			'question': 'Что из перечисленного не является протоколом?',
			'answer': 1,
			'variants': ['AnyObject', 'AnyType', 'AnyClass', 'Any']
		},
		{
			'question': 'Какое из утверждений является верным:' +
						'\n\n*1.* В расширениях классов допустимо объявлять статические поля' +
						'\n\n*2.* В расширениях типов допустимо объявлять статические поля' +
						'\n\n*3.* В расширениях классов допустимо объявлять поля уровня класса' +
						'\n\n*4.* В расширениях типов допустимо объявлять поля уровня типа',
			'answer': 0,
			'variants': [
				'1',
				'2',
				'3',
				'4',
				'все перечисленное',
				'ничего из перечисленного'
			]
		},
		{
			'question': 'Какое из полей объявлено с ошибкой на [картинке](http://telegram.funnycode.ga/img/ios/1.png?v=3)?',
			//'img': 'http://telegram.funnycode.ga/img/ios/1.png?v=3',
			'useimg': 1,
			'answer': 0,
			'variants': [
				'все корректно',
				'val1',
				'val3',
				'val4',
			]
		},
		{
			'question': 'Что будет в поле message?\n\n' +
				'```\n' +
				'var val: Bool?!\n' +
				'var message = true == val ? "field setted" : "field not setted"' +
				'\n```\n',
			'answer': 3,
			'variants': [
				'field setted',
				'field not setted',
				'код не скомпилируется',
				'упадет при выполнении'
			]
		},
		{
			'question': `В примере на [картинке](http://telegram.funnycode.ga/img/ios/2.png?v=3) для компилятора достаточно, чтобы типы для generic-функции были выведены автоматически?

*1.* Да и \`where T: Any\` можно убрать',
*2.* Да, но  \`where T: Any\` убрать нельзя',
*3.* Нет, будет ошибка компиляции, т.к. \`T\` неоднозначен',
*4.* Нет, будет ошибка компиляции из-за несоответствия типов
`,
			//'img': 'http://telegram.funnycode.ga/img/ios/2.png?v=3',
			'useimg': 1,
			'answer': 0,
			'variants': [
				'1',
				'2',
				'3',
				'4'
			]
		},
		{
			'question': 'Каким образом можно передавать данные от одного контроллера к другому?\n' +
						'\n*1.* делегат' +
						'\n*2.* синглтон' +
						'\n*3.* наследование' +
						'\n*4.* userDefaults',
			'answer': 4,
			'variants': [
				'только делегат',
				'только синглтон',
				'только наследование',
				'только userDefaults',
				'1,2 и 4', '1,2 и 3', '1 и 2', '2 и 3', '3 и 4',
				'всеми перечисленными'
			]
		},
		{
			'question': 'Каким образом можно проверить, что класс на [картинке](http://telegram.funnycode.ga/img/ios/3.png?v=3) реализует функцию `call` протокола `Callable`?\n' +
						'\n*1.* `instance.call != nil`' +
						'\n\n*2.* `instance.respondsToSelector( #selector(Callable.call) )`' +
						'\n\n*3.* `if let _ = instance.call{ … }`' +
						'\n\n*4.* `instance.call?() == nil`',
			//'img': 'http://telegram.funnycode.ga/img/ios/3.png?v=3',
			'useimg': 1,
			'answer': 0,
			'variants': [
				'1 и 2',
				'2 и 3',
				'3 и 4',
				'все перечисленные способы'
			]
		},
		{
			'question': 'Правильно ли определено перечисление на [картинке](http://telegram.funnycode.ga/img/ios/4.png?v=3)?',
			'img': 'http://telegram.funnycode.ga/img/ios/4.png?v=3',
			'answer': 0,
			'variants': ['да', 'нет']
		},
		{
			'question': `Как правильно посчитать длину строки в swift?

\`var str: String\`

*1.* \`str.length\`
*2.* \`str.characters.count\`
*3.* \`count(str)\`
*4.* \`str.lengthOfBytesUsingEncoding( NSString.defaultCStringEncoding() )\`
`,
			'answer': 1,
			'variants': [
				'1',
				'2',
				'3',
				'4'
			]
		},
		{
			'question': `Что будет выведено командой print на [картинке](http://telegram.funnycode.ga/img/ios/5.png?v=3)?

*1.* init count = 2, array count = 4
*2.* init count = 4, array count = 4
*3.* не скомпилируется
`,
			//'img': 'http://telegram.funnycode.ga/img/ios/5.png?v=3',
			'useimg': 1,
			'answer': 0,
			'variants': [
				'1',
				'2',
				'3',
			]
		}
	]
};
