export const quiz = {
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
};
