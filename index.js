
function Question (theQuestion,  theAnswer) {
  this.question = theQuestion;
  this.answer = theAnswer;
//  this.choices = theChoices;
function multiQuestion(theQuestion, theAnswer, theChoices){
Question.call(this, theQuestion, theAnswer);
this.theChoices = the Choices;
}
multiQuestion.prototype = Object.create(Question.prototype);

multiQuestion.prototype.multiChoice =function(){
  let input = event.target;
  let answer = input.parentElement.parentElement.nextElementSibling;
  if (input.textContent === this.answer) {
    answer.textContent = "Correct!";
  } else {
    answer.textContent = "Try Again.";
  }
}

// function shortAnswerQuestion(theQuestion, theAnswer, shortAnswer){
// Question.call(this, theQuestion, theAnswer);
// this.shortAnswer = the shortAnswer;
// }
//shortAnswerQuestion.prototype = Object.create(Question.prototype);

// shortAnswerQuestion.prototype.shortQuestion =function(){
//   let input = event.target;
//   let answer = input.parentElement.parentElement.nextElementSibling;
//   if (input.textContent === this.answer) {
//     answer.textContent = "Correct!";
//   } else {
//     answer.textContent = "Try Again.";
//   }
//
// }

function booleanQuestion(theQuestion, theAnswer, theTrueFalse){
Question.call(this, theQuestion, theAnswer);
this.theTrueFalse = the theTrueFalse;
}
booleanQuestion.prototype = Object.create(Question.prototype);

booleanQuestion.prototype.tfChoice =function(){
  let input = event.target;
  let answer = input.parentElement.parentElement.nextElementSibling;
  if (input.textContent === this.answer) {
    answer.textContent = "Correct!";
  } else {
    answer.textContent = "Try Again.";
  }

}



  // this.isCorrect = function (event) {
  //
  //   let input = event.target;
  //   let answer = input.parentElement.parentElement.nextElementSibling;
  //   if (input.textContent === this.answer) {
  //     answer.textContent = "Correct!";
  //   } else {
  //     answer.textContent = "Try Again.";
  //   }
  // }

  // this.isCorrect = function (event) {
  //
  //   let input = event.target;
  //   let answer = input.parentElement.parentElement.nextElementSibling;
  //   if (input.textContent === this.answer) {
  //     answer.textContent = "Correct!";
  //   } else {
  //     answer.textContent = "Try Again.";
  //   }

  this.display = function () {
    let source = document.querySelector('#question').innerHTML;
    let template = Handlebars.compile(source);
    let html = template(this);
    document.querySelector('#quiz').insertAdjacentHTML('beforeend', html);
    document.querySelector('#quiz article:last-of-type fieldset').addEventListener('click', this.isCorrect.bind(this));
  }
}
let question1 = new Question('The keyword or the property that you use to refer to an object through which they were invoked is ', ['from', 'to', 'this', 'object'], 'this');
let question2 = new Question('The behaviour of the instances present of a class inside a method is defined by', ['Method', 'Classes', 'Interfaces', 'Classes and Interfaces'], 'Classes');
[question1, question2].forEach(question => question.display());
