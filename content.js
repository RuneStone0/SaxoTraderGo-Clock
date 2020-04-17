/*
	Adding a clock to the SaxoTraderGO
*/
function waitForElementToDisplay(selector, time) {
    if(document.querySelector(selector)!=null) {
		var utils = document.querySelector("#header > div > div.masthead-utils.grid.grid--cross-center.g--truncate");		
		var childItem = document.querySelector("#header > div > div.masthead-utils.grid.grid--cross-center.g--truncate > div:nth-child(1)")
		var clock=document.createElement("div");
		utils.insertBefore(clock, childItem); 
		currentTime();
        return;
    }
    else {
        setTimeout(function() {
            waitForElementToDisplay(selector, time);
        }, time);
    }
}

function currentTime() {
	var date = new Date(); /* creating object of Date class */
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);
	var clock = document.querySelector("#header > div > div.masthead-utils.grid.grid--cross-center.g--truncate > div:nth-child(1)")
	clock.innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
	var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

waitForElementToDisplay("#header > div > div.masthead-utils.grid.grid--cross-center.g--truncate", 1);
