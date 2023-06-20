// Function to handle button click
function handleButtonClick() {
    const paragraph = document.getElementById('myParagraph');
    paragraph.textContent = 'Button Clicked!';
}

// Add event listener to the button
const button = document.getElementById('myButton');
button.addEventListener('click', handleButtonClick);
  