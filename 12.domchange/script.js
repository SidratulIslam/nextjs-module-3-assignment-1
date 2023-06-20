// Function to change image source
function changeImageSource() {
    const image = document.getElementById('myImage');
    image.src = './img_lights.jpg';
}
  
// Add event listener to the button
const button = document.getElementById('myButton');
button.addEventListener('click', changeImageSource);
  