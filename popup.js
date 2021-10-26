const hour = new Date().getHours();   


function buttonActionSwitcher(time) {
    let button = document.getElementById('loadButton');
    let timedMsg = document.getElementById('timedMsg');
    if (time < 8 || time >= 20) {
        button.remove()
        timedMsg.innerHTML  = 'Get to Sleep!'
    } else {
        button.addEventListener('click', sendButtonMessage);
    }
}

buttonActionSwitcher(hour)

function sendButtonMessage() {
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: 'executeCode' });
    });
}

//THIS IS THE SOLUTION 
//https://newbedev.com/onclick-or-inline-script-isn-t-working-in-extension