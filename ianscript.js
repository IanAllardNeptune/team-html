// Task 1
const addParagraphBtn = document.getElementById('addParagraphBtn');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphBtn.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = 'Button Pressed';
    paragraphContainer.appendChild(newParagraph);
});


// Task 2
const counterBtn = document.getElementById('counterBtn');
const counterDisplay = document.getElementById('counterDisplay');
let count = 0;

counterBtn.addEventListener('click', function() {
    count++;
    counterDisplay.innerText = count;
});


// Task 3
const colorText = document.getElementById('colorText');
const redBtn = document.getElementById('redBtn');
const blueBtn = document.getElementById('blueBtn');
const greenBtn = document.getElementById('greenBtn');

redBtn.addEventListener('click', function() {
    colorText.style.color = 'red';
});

blueBtn.addEventListener('click', function() {
    colorText.style.color = 'blue';
});

greenBtn.addEventListener('click', function() {
    colorText.style.color = 'green';
});


// Task 4
const textInput = document.getElementById('textInput');
const mirrorBtn = document.getElementById('mirrorBtn');
const mirrorOutput = document.getElementById('mirrorOutput');

mirrorBtn.addEventListener('click', function() {
    mirrorOutput.innerText = textInput.value;
});


// Task 5
const fontText = document.getElementById('fontText');
const fontSelector = document.getElementById('fontSelector');

fontSelector.addEventListener('change', function() {
    fontText.style.fontFamily = fontSelector.value;
});