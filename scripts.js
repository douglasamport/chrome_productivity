//remove the primary element from youtube
const content = document.getElementById('primary');
const contentParent = content.getParent
const contentNext = primary.nextElementSibling


content.remove() //removes the element from the browser

//re-inserts content back into the DOM tree
let insertedNode = contentParent.insertBefore(content, contentNext)
