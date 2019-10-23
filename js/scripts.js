const title = document.querySelector('h1');
const descP = document.querySelector('p.desc');
const list = document.querySelector('ul');
let input = document.querySelectorAll('input');
const extra = document.querySelector('div.extra');

// 1: Set the text of the <h1> element
title.textContent = 'Fun Activities';

// 2: Set the color of the <h1> to a different color
title.style.color = 'navy';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
descP.innerHTML = 'These are all cool <strong>activities</strong> I want to do today!';

// 4: Set the class of the <ul> to 'list'
list.className = 'list';

// 5: Create a new list item and add it to the <ul>
const item = document.createElement('li');
item.innerHTML = '<input> Do yoga';
list.appendChild(item);

// 6: Change all <input> elements from text fields to checkboxes
input = document.querySelectorAll('input');
for ( let i = 0; i < input.length; i += 1 ) {
  input[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
extra.appendChild(deleteButton);


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
deleteButton.addEventListener('click', () => {
  extra.style.display = 'none';
});