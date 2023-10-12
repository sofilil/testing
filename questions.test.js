const fs = require('fs');
const questions = require('./questions.json');


describe('kjører tester på questions', () => {
    test('correct : true', () => {
        expect("correct").toBeTruthy();
});

    test('skal ha et riktig svar', () => {
    questions.questions.forEach((question) => {
      const correctAnswers = question.answers.filter((answer) => answer.correct);
      expect(correctAnswers.length).toBe(1);
    });
});

    test('skal ha title', () => {
    questions.questions.forEach((question) => {
      expect(question.title.trim()).not.toBe("");
    });
});

    test('skal ha hjelpetekst', () => {
    questions.questions.forEach((question) => {
      if (question.helper) {
        expect(question.helper.text.trim()).not.toBe("");
      }
    });
 });

})