console.log(quizData)

class Quiz {
    constructor(quizContainerSelector, data, numberOfQuestions, options) {
        this.quizContainer = document.querySelector(quizContainerSelector);
        this.data = data;
        this.dataLength = numberOfQuestions;
        this.options = options;
        this.counter = 0;
        this.init();
        this.events();
    }

    init() {
        console.log("init!");
        this.createQuestion(this.data[this.counter], this.dataLength, this.options);
    }

    events() {
        this.quizContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("quiz-question__answer") || e.target.classList.contains("quiz-question__input-text")) {
                this.customInputCheckToggle(e);
            }

            if (e.target === this.quizContainer.querySelector("[data-btn-next]")) {
                this.nextQuestion();
            }
        })
    }

    createQuestion(questionData, numberOfQuestions, options) {
        const { title, number, answer_alias } = questionData;
        const { nextBtnText } = options;

        let quizContent = document.createElement("div");
        quizContent.classList.add("quiz__content");

        let quizHeader = document.createElement("div");
        quizHeader.classList.add("quiz__header");
        quizHeader.innerHTML = `<p class="count">Шаг ${number} из ${numberOfQuestions}</p>`;

        let quizQuestion = document.createElement("div");
        quizQuestion.classList.add("quiz-question");
        quizQuestion.innerHTML = `<p class="quiz-question__title">${title}</p>`;

        let quizQuestionAnswers = document.createElement("div");
        quizQuestionAnswers.classList.add("quiz-question__answers");

        questionData.answers.forEach(answer => {
            let answerWrapper = document.createElement("div");
            answerWrapper.classList.add("quiz-question__answer");

            if (answer.type === "text") {
                answerWrapper.classList.add("quiz-question__answer_text");
                answerWrapper.innerHTML = `
                    <input type="${answer.type}" maxlength="80" data-valid="false" class="quiz-question__input-text" name="${answer_alias}" placeholder="${answer.answer_title}" value="">
                    `;
            } else if (answer.type === "textarea") {
                answerWrapper.classList.add("quiz-question__answer_textarea");
                answerWrapper.innerHTML = `
                    <textarea class="quiz-question__textarea" maxlength="1000" data-valid="false" name="${answer_alias}" placeholder="${answer.answer_title}"></textarea>
                    `;
            } else {
                answerWrapper.innerHTML = `
                    <input type="${answer.type}" data-valid="false" class="quiz-question__input" name="${answer_alias}" value="${answer.answer_title}">
                    <span class="custom-${answer.type}"></span>
				    <span>${answer.answer_title}</span>
                    `;
            }

            // answerWrapper.addEventListener("click", this.customInputCheckToggle);

            quizQuestionAnswers.append(answerWrapper);
        });

        quizQuestion.append(quizQuestionAnswers);

        let button = document.createElement("button");
        button.type = "button";
        button.classList.add("quiz-question__button");
        button.setAttribute("data-btn-next", "");
        button.textContent = nextBtnText;

        quizQuestion.append(button);

        quizContent.append(quizHeader);
        quizContent.append(quizQuestion);

        this.quizContainer.innerHTML = "";

        this.quizContainer.append(quizContent);
    }

    nextQuestion() {
        if (this.isValid()) {
            this.counter++;

            console.log(`question #${this.counter}`);
            this.createQuestion(this.data[this.counter], this.dataLength, this.options);

            if (this.counter + 1 === this.dataLength) {
                this.quizContainer.querySelector("[data-btn-next]").remove();
                this.quizContainer.querySelector(".quiz-question").innerHTML +=
                `<button type="submit" class="quiz-question__button" data-btn-submit="">${this.options.sendBtnText}</button>`;
            }
        }
    }

    isValid() {
		let isValid = false;

        if (this.quizContainer.querySelector(".quiz-question__textarea")) {
            (this.quizContainer.querySelector(".quiz-question__textarea").value) ? isValid = true : false;
        }

		let elements = this.quizContainer.querySelectorAll("input");
        console.log(elements)

		elements.forEach(element => {
			switch (element.type) {
				case "text":
					(element.value) ? isValid = true : false;
				case "checkbox":
					(element.checked) ? isValid = true : false;
				case "radio":
					(element.checked) ? isValid = true : false;
			}
		});

		return isValid;
	}

    customInputCheckToggle(e) {

        let item = e.target;
        console.log(item)
        if (item.classList.contains("quiz-question__answer")) {
            let input = item.querySelector(".quiz-question__input");
            let type = input.type;

            if (type === "radio") {
                this.quizContainer.querySelectorAll(".custom-radio").forEach(el => el.closest(".quiz-question__answer").classList.remove("checked"));
            }

            if (this.quizContainer.querySelector(".quiz-question__answer_text")) {
                this.quizContainer.querySelector(".quiz-question__answer_text").classList.remove("checked");
                this.quizContainer.querySelector(".quiz-question__input-text").value = "";
            }

            item.classList.toggle("checked");
            input.click();
        } else if (item.classList.contains("quiz-question__input-text")) {
            this.quizContainer.querySelectorAll(".custom-radio").forEach(el => {
                el.closest(".quiz-question__answer").querySelector(".quiz-question__input").checked = false;
                el.closest(".quiz-question__answer").classList.remove("checked");
            });

            this.quizContainer.querySelectorAll(".custom-checkbox").forEach(el => {
                el.closest(".quiz-question__answer").querySelector(".quiz-question__input").checked = false;
                el.closest(".quiz-question__answer").classList.remove("checked");
            });
            item.closest(".quiz-question__answer_text").classList.add("checked");
        } else if (item.classList.contains("quiz-question__textarea")) {
            item.closest(".quiz-question__answer_textarea").classList.add("checked");
        }
    }
}

const quiz = new Quiz(".quiz__form", quizData, 4, {
    nextBtnText: "Далее ⟶",
    sendBtnText: "Отправить"
});
