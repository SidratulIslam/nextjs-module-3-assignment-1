// Function to create list items
function createListItems() {
    const list = document.getElementById('myList');
  
    for (let i = 1; i <= 5; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = i;
      list.appendChild(listItem);
    }
}
  
// Call the function to create list items
createListItems();
  