let changeColor = document.getElementById('changeColor');

changeColor.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.head.innerHTML="";'});
  });
};
