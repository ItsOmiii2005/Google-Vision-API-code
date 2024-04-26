const textract = require('textract');

// Path to the document you want to extract text from
const filePath = 'document.pdf'; // Update with your file path

// Extract text from the document
textract.fromFileWithPath(filePath, function(error, text) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Extracted Text:', text);
    }
});
