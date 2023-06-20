// Display alert with click coordinates
document.addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    alert(`Clicked at (${x}, ${y})`);
  });
  
  // Display alert with key code
  document.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode;
    alert(`Pressed key with code: ${keyCode}`);
  });
  
  // Change image source on mouseover
  const image = document.getElementById('myImage');
  image.addEventListener('mouseover', function() {
    image.src = './img_lights.jpg';
  });
  
  image.addEventListener('mouseout', function() {
    image.src = './imgTag.png';
  });
  