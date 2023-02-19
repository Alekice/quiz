const quizData = [
	{
		question_id: "q1",
		number: 1,
		title: "На что вам нужна сертификация?",
		answer_alias: "subject",
		answers: [
			{
				answer_title: "На продукцию/товары",
				type: "radio"
			},
			{
				answer_title: "На услуги или компанию",
				type: "radio"
			},
			{
				answer_title: "Мне нужна другая сертификация",
				type: "radio"
			},
			{
				answer_title: "Мне не нужна сертификация, я тут случайно",
				type: "radio"
			}
		]
	},
	{
		question_id: "q2",
		number: 2,
		title: "Какая у вас продукция?",
		answer_alias: "goods",
		answers: [
			{
				answer_title: "Пищевая продукция",
				type: "radio"
			},
			{
				answer_title: "Текстиль",
				type: "radio"
			},
			{
				answer_title: "Одежда",
				type: "radio"
			},
			{
				answer_title: "Косметика и парфюмерия",
				type: "radio"
			},
			{
				answer_title: "Вещевая продукция (рюкзаки, ремни, аксессуары и т.п.)",
				type: "radio"
			},
			{
				answer_title: "Электронное оборудование",
				type: "radio"
			},
			{
				answer_title: "Укажите свой вариант ответа",
				type: "text"
			}
		]
	},
	{
		question_id: "q3",
		number: 2,
		title: "На какие услуги нужна сертификация?",
		answer_alias: "services",
		answers: [
			{
				answer_title: "Услуги автосервиса (СТО)",
				type: "radio"
			},
			{
				answer_title: "Услуги общественного питания",
				type: "radio"
			},
			{
				answer_title: "Гостиничные услуги",
				type: "radio"
			},
			{
				answer_title: "Нужна сертификация ИСО",
				type: "radio"
			},
			{
				answer_title: "Впишите свой вариант",
				type: "text"
			}
		]
	},
	{
		question_id: "q4",
		number: 2,
		title: "Напишите, какая вам нужна сертификация?",
		answer_alias: "custom",
		answers: [
			{
				answer_title: "Например, нужна сертификация ИСО",
				type: "textarea"
			}
		]
	},
	{
		question_id: "q5",
		number: 3,
		title: "У вас оформлено юридическое лицо?",
		answer_alias: "entyty",
		answers: [
			{
				answer_title: "Да",
				type: "radio"
			},
			{
				answer_title: "Нет",
				type: "radio"
			},
			{
				answer_title: "Я самозанятый",
				type: "radio"
			},
			{
				answer_title: "В процессе оформления",
				type: "radio"
			}
		]
	}
];
