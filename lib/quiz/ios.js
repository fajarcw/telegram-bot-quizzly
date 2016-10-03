export const quiz = {
	questions: [
		{
			'question': 'Что из перечисленного не является протоколом?',
			'answer': 1,
			'variants': ['AnyObject', 'AnyType', 'AnyClass', 'Any']
		},
		{
			'question': 'Какое из утверждений является верным:',
			'answer': 0,
			'variants': [
				'В расширениях классов допустимо объявлять статические поля',
				'В расширениях типов допустимо объявлять статические поля',
				'В расширениях классов допустимо объявлять поля уровня класса',
				'В расширениях типов допустимо объявлять поля уровня типа',
			]
		},
		{
			'question': 'Какое из полей объявлено с ошибкой?',
			'img': 'http://telegram.funnycode.ga/img/ios/1.png',
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
				'var val: Bool?!' +
				'var message = true == val' +
				'\t? "field setted"' +
				'\t: "field not setted"' +
				'\n```\n',
			'answer': 3,
			'variants': [
				'“field setted"',
				'“field not setted"',
				'код не скомпилируется',
				'упадет при выполнении'
			]
		},
		{
			'question': 'В примере ниже для компилятора достаточно, чтобы типы для generic-функции были выведены автоматически?',
			'img': 'http://telegram.funnycode.ga/img/ios/2.png',
			'answer': 0,
			'variants': [
				'Да и  "where T: Any" можно убрать',
				'Да, но  "where T: Any" убрать нельзя',
				'Нет, будет ошибка компиляции, т.к. T неоднозначен',
				'Нет, будет ошибка компиляции из-за несоответствия типов'
			]
		},
		{
			'question': 'Каким образом можно передавать данные от одного контроллера к другому?',
			'answer': [0,1,3],
			'variants': [
				'делегат',
				'синглтон',
				'наследование',
				'userDefaults'
			]
		},
		{
			'question': 'Каким образом можно проверить, что класс реализует функцию call  протокола Callable?',
			'img': 'http://telegram.funnycode.ga/img/ios/3.png',
			'answer': [0,2],
			'variants': [
				'instance.call != nil',
				'instance.respondsToSelector(#selector(Callable.call))',
				'if let _ = instance.call{ … }',
				'instance.call?() == nil'
			]
		},
		{
			'question': 'Правильно ли определено перечисление',
			'img': 'http://telegram.funnycode.ga/img/ios/4.png',
			'answer': 0,
			'variants': ['да', 'нет']
		},
		{
			'question': 'Как правильно посчитать длину строки в swift?\n\n`var str: String`\n',
			'answer': 1,
			'variants': [
				'str.length',
				'str.characters.count',
				'count(str)',
				'str.lengthOfBytesUsingEncoding(NSString.defaultCStringEncoding())'
			]
		},
		{
			'question': 'Что будет выведено командой print?',
			'img': 'http://telegram.funnycode.ga/img/ios/5.png',
			'answer': 0,
			'variants': [
				'init count = 2, array count = 4',
				'init count = 4, array count = 4',
				'не скомпилируется',
			]
		}
	]
};
