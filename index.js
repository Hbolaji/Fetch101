/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
}

// 2. Create a function `showList` that takes two parameters: an element and a string that is a URL. 
// The function will fetch the URL, parse the retrieved data as JSON; the data is guaranteed to be an array of strings.
//  The function will then, like the `filler` function in `dom101`, put the contents of the array as list items into the provided element.

async function showList(elem, url) {
  const response = await fetch(url);
  const  content = await response.json();

  content.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    elem.append(li);
  });
}

// 3.Create a function `startShowingMessage` that takes two parameters: an element and a string that is a URL.
//  The function will use `setInterval` to make the following task every 1s: fetch the URL and put the response text 
// into the text content of the provided element. 

async function startShowingMessage(elem, url) {
  setInterval(async function() {
    const response = await fetch(url);
    const content = await response.text()
    elem.textContent = content;
 }, 1000);
}

// 4. Create a function 'handleError' that accepts an element and a url as a parameter, and shows the fetched text from the server in the element. 
// If there is an error, the function should set the textContent of the element to 'OH DEAR'. Rerun
async function  handleError(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  if(!response.ok) {
    elem.textContent = "OH DEAR";
  } else {
    elem.textContent = content;
  }
}
//5. Create a function `drawBox', which accepts two parameters: a canvas element, and a URL which refers to a simple object
//  with coordinates that you should fetch from a server. The function draws a 10x10 filled black box at the given coordinates. 
// Your drawBox function should update the coordinates and redraw the box every 1 second.

async function drawBox(canvas, url) {
  const ctx = canvas.getContext("2d");
  setInterval(async function () {
    const response = await fetch(url);
    const content = await response.json();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.fillRect(content.x, content.y, 30, 30);
  }, 1000);
}
