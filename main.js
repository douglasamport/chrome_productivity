// ---- Set Date element  --------
const hour = new Date().getHours();                         // Get hour

//---Set Primary content and Remove from DOM ------
const contentArr = $('#content')                            // Collect primary element, Jquery syntax
const content = contentArr[0]
const contentNext = content.nextElementSibling              // Set next element
const contentParent = content.parentNode                    // Set parent element,  Happens to be undefined
console.log('Parent', contentParent)
console.log('Next', contentNext)
content.remove()                                            // remove elemetn from DOM, Jquery syntax


//-----Set Image and insert it in DOM----------------
const focusImage = document.createElement('img')           
focusImage.src = chrome.runtime.getURL("img/focus.jpg");    // Get full URL of Image in chrome_estenstions:// etc.... dont forget to allow in manifest.json
focusImage.alt = "green road sign that reads 'focus' "      // Include ALT text for screen readers
$(focusImage).css({"position":"absolute", "left":"50%", "transform":"translate(-50%, 0)"});  
contentNext.prepend(focusImage);                            // Add image to DOM


//-----Wrap Image in div to prep for msg  ----------------
let focusWrapper = document.createElement('div')            // Create new div element
focusWrapper.className = 'focusWrapper'                     // Apply class imageWrapper
$(focusImage).wrap(focusWrapper)                            // Wrap the image in a div, Jquery syntax

//-----Wrap image-div in container so that container can have relative position. ----------------
let focusContainer = document.createElement('div');         // Create new div element
focusContainer.className = 'focusContainer' ;               // Apply class imageWrapper
$(focusContainer).css({"position":"relative"});              // Set position relative
$(".focusWrapper").wrap(focusContainer)                     //wrap image div in a container so we can change position 

//-----Determine a word for the time of day ------------
function chooseWord(time) {
return (time >= 8 && time < 20) ? 'studying' : 'sleeping'
}

let word = chooseWord(hour)

//-----Create msg and Prepend into container  ----------------
message = document.createElement('div')                     // Create new div element
message.innerHTML = `Shouldn\'t you be ${word}?`           // Add text to div
message.className = 'focusMessage'                          // Apply class focusMessage
$(message).css({"font-size":"5em","position":"absolute", "top":"1.5em", "left":"50%", "transform":"translate(-50%, 0)", "z-index":"1", "white-space":"nowrap"})  // Set CSS, include position absolute  , "white-space":"nowrap"
$(".focusContainer").prepend(message);                      //prepend message as first child of focusContainer



//----recieve msg from popup to remove image and reset content ------------
chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'executeCode') {
        console.log('time', hour);               
        focusContainer = $('.focusContainer');              // grab focusContainer, Jquery syntax
        focusContainer.remove();                            // remove container div
        contentNext.prepend(content);                    // prepend content before contentNext
    }
});


//$.ajax({
//    method: 'GET',
//    url: 'https://api.unsplash.com/',
//    success: function(result) {
//     // result is whatever the URL sends back from the request
//     console.logI(result)
//    },
//    error: function(err) {
//     console.log(err)
//     // if any errors occur during the process you can check out the
//     // the error by logging the 'err' argument
//    }
//  });
//
//console.log(focusWrapper)





