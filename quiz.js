//creates a quiz
const quizContainer=document.getElementById('quiz')

const resultsContainer=document.getElementById('results')

const submitButton=document.getElementById('submit')

const quizQuestions=[

{

               question: "Chris Bridges is currently working for:",

               answers: {

                              a: "SMEC",

                              b. "University of Queensland",

                              c. "Queensland University of Technology",

                              d. "Queensland Government"

               },

               correctAnswer: "a"

},

{

               question: "Chris mentors:",

               answers: {

                              a: "Buisness students",

                              b. "Engineering students",

                              c. "Postgrad students",

                              d. "All of the above"

               },

               correctAnswer: "d"

},

{

               question: "Chris's technical skills include:",

               answers: {

                              a: "Design",

                              b. "Analytics",

                              c. "xxx",

                              d. "yyy"

               },

               correctAnswer: "a"

},

{

               question: "Chris is super passionate about:",

               answers: {

                              a: "Infrastructure",

                              b. "Cats",

                              c. "xxx",

                              d. "yyy"

               },

               correctAnswer: "a"

}

];

 

 

function buildQuiz() {

               //varaible to store the HTML output

               const output = [];

               for(i=0; i<quizQuestions.length; i++){

                              //varaible to store the list of possible answers

                              const answers=[];

                              //for each available answer to this question add a html radio button

                              for(letter in quizQuestions[i].answers){

                                             answers.push(

                                             '<label>'

                                             +'<input type="radio" name="question'+i+'" value="'+letter+'">'

                                             + letter+': '

                                             + quizQuestions[i].answers[letter]

                                             + '</label>'

                                             );

               }

               //add the question and its answers to the oputput

               output.push(

               '<div class="question">' + quizQuestions[i].question + '</div>'

               + '<div class="answers">' + answers.join('') + '</div>'

               );

               }

 

//combine our output list into one string of HTML and put it on the page quizContainer.innerHTML = output.join(''); } function showResults() {

               //gather answer containers from our quiz

               var answerContainers = quizContainer.querySelectorAll('.answers');

               //keep track of user's answers

               var numCorrect = 0;

               //for each question...

               for(i=0; i<quizQuestions.length; i++){

               //find selected answer

userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')[]{}).value;

                            

//if answer is correct add to the number of correct answers 
  if(userAnswer===quizQuestions[i].correctAnswer){

               numCorrect++;

               //and colour the answers green

               answerContainers[i].style.color = 'lightgreen'; } 

//if answer is wrong or blank 
else{

               //colour the answers red

               answerContainers[i].style.color = 'red'; 
              }
}
              

               //show numbers of correct answers out of total

               if(numCorrect===0){

                              resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";

               }

              if(numCorrect===1){

               resultsContainer.innerHTML = "There's room for improvewment there! You only got one correct answer."; } 
               if(numCorrect===2){

               resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that."; } 
               if(numCorrect===3){

               resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Chris pretty well!"; } 
               if(numCorrect===4){

               resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Chris so well!"; } }

 

 

//load quiz

buildQuiz();

 

submitButton.onclick = function(){
showResults();

}
