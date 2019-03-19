let changeColor = document.getElementById('changeColor');
let changeColor2 = document.getElementById('changeColor2');
let changeColor3 = document.getElementById('changeColor3');

changeColor.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.head.innerHTML="";'});
  });
};

changeColor2.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'setInterval(()=>{var imagees=document.getElementsByTagName("img");for(var ii=imagees.length-1;ii>0;ii--){imagees[ii].src="//cdn2.scratch.mit.edu/get_image/user/33409728_60x60.png";}},100);'});
  });
};


changeColor3.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.getElementsByClassName("password")[0].value;'});
  });
};
