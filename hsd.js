const inputString = `"""{
    "questions": [
      {
        "question": "What is the capital of France?",
        "options": [
          { "text": "Lyon", "isCorrect": false },
          { "text": "Paris", "isCorrect": true },
          { "text": "Marseille", "isCorrect": false },
          { "text": "Bordeaux", "isCorrect": false }
        ]
      },
      {
        "question": "Which of the following is NOT a famous landmark in Paris?",
        "options": [
          { "text": "Eiffel Tower", "isCorrect": false },
          { "text": "Louvre Museum", "isCorrect": false },
          { "text": "Notre Dame Cathedral", "isCorrect": false },
          { "text": "Colosseum", "isCorrect": true }
        ]
      }
    ]
}
  """`;



const regex = /\{(?:[^{}]|(?:\{[^{}]*\}))*\}/g;
const match = inputString.match(regex);
const mainJSONString = match;
for (let i = 0; i < mainJSONString.length; i++) {

  mainJSONString[i] = JSON.parse(mainJSONString[i]);
  console.log(mainJSONString[i]);


}


