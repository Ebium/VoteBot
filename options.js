document.getElementById('discord').addEventListener('click',()=>{
    document.getElementById('discord').textContent="Aisudaga#2219";
});

document.getElementById('support').addEventListener('click',()=>{
    window.open('https://www.paypal.com/paypalme/ebium', '_blank');
});


var inputnick = document.getElementById('pseudo');
inputnick.addEventListener('keyup',entrer);

function entrer(event) {

    if ((event.keyCode === 13)) {
        event.preventDefault();
        saveOptions()
        pseudo(inputnick.value);
        inputnick.blur();

    }
}

function pseudo(p){
    console.log(p)
}



function saveOptions() {
    browser.storage.sync.set({
        nick: inputnick.value
    });
}
  
  function restoreOptions() {
  
    function setCurrentChoice(result) {
      inputnick.value = result.nick || "RANDOM";
    }
  
    function onError(error) {
        inputnick.value="error";
    }
  
    let getting = browser.storage.sync.get("nick");
    getting.then(setCurrentChoice, onError);
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  