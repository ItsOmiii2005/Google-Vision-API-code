// node --version # Should be >= 18
// npm install @google/generative-ai

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "";

async function runChat() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 4000,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        
        history: [
        ],
    });

    const result = await chat.sendMessage("(javacript for advance) for this give me array of 3 MCQs in parsable JS object");
    const response = result.response;
    console.log(response.text());
    // console.log(response.text().slice(2,-3));
    // let ok = response.text().slice(13, -3)
    // let br = JSON.parse(ok)
    // console.log(br);


    // Define the regex pattern to match the array
    const regex = /\{[^{}]*?\}/g;

// Extract the array using regex
const arrayString = response.text().match(regex);

// Parse the extracted array string into a JavaScript array
// const mcqs = JSON.parse(arrayString);

console.log(arrayString);


// Preprocess the strings to convert them into valid JSON strings
const validJsonStrings = arrayString.map(str => {
 
    return JSON.parse(str);
  
})
  
  // Parse each valid JSON string into a JavaScript object
//   const questionObjects = validJsonStrings.map(jsonStr => JSON.parse(jsonStr));
  
  console.log(validJsonStrings);
}

runChat();