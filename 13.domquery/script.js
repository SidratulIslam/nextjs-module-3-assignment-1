// Function to change text color
function changeTextColor() {
    const paragraphs = document.getElementsByClassName('highlight');
  
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = 'red';
    }
  }
  
  // Call the function to change text color
  changeTextColor();
  