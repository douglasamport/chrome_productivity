


const contentArr = $('#primary')  // collect primary element arr using Jquery syntax
const content = contentArr[0]
const contentNext = content.nextElementSibling
const contentParent = content.parentNode
content.remove()    //jquery removes the element from the browser

const focusImage = document.createElement('img')           //need to add local images to manifest under web_accessable_elements
focusImage.src = chrome.runtime.getURL("img/focus.jpg");   // gets full URL of Image in chrome_estenstions:// etc....
focusImage.alt = "green road sign that reads 'focus' " 
contentNext.prepend(focusImage);                           //adds image to existing page

let focusWrapper = document.createElement('div')                //creates new div element
focusWrapper.className = 'focusWrapper'                     //applies class imageWrapper to new div element 
//$(focusWrapper).css("position", "absolute")

$(focusImage).wrap(focusWrapper)                            //wrap the image in a div using jQuery


let focusContainer = document.createElement('div');                //creates new div element
focusContainer.className = 'focusContainer' ; 
$(focusContainer).css("position", "relative");

$(".focusWrapper").wrap(focusContainer)

message = document.createElement('div')  
message.innerHTML = 'Shouldn\'t you be studying?'
message.className = 'focusMessage'
$(message).css({"font-size":"5em","position":"absolute", "top":"13%", "left":"50%", "transform":"translate(-50%, 0)"})

$(".focusContainer").prepend(message);

console.log(focusWrapper)




//re-inserts content back into the DOM tree
//let insertedNode = contentParent.insertBefore(content, contentNext)
