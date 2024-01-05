// Variables
let sec = 0;
let min = 0;
let hrs = 0;
//For Leading Zero
let second = 0;
let minute = 0;
let hour = 0;
// Functions
function stopwatch() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hrs++;
  }
  if (hrs === 24) {
    hrs = 0;
  }
  //For Leading Zero
  if (sec < 10) {
    second = "0" + sec;
  } else {
    second = sec;
  }
  if (min < 10) {
    minute = "0" + min;
  } else {
    minute = min;
  }
  if (hrs < 10) {
    hour = "0" + hrs;
  } else {
    hour = hrs;
  }

  //Enabling HTML
  document.getElementById("sec").innerText = second;
  document.getElementById("min").innerText = minute;
  document.getElementById("hrs").innerText = hour;
}
//Setting Timer
let time = "started";
let timer;
let p = document.getElementById("message");
// EVENT LISTENERS

// START/STOP BUTTON
addEventListener("click", function () {
  if (time === "started") {
    (timer = setInterval(stopwatch, 1000)),
      (time = "stopped"),
      (p.innerText = "TIMER HAS BEEN STARTED");
  } else {
    (time = "started"),
      window.clearInterval(timer),
      (p.innerText = "TIMER HAS BEEN PAUSED");
  }
});
// RESET BUTTON
addEventListener("dblclick", function () {
  sec = 0;
  min = 0;
  hrs = 0;
  p.innerText = "TIMER HAS BEEN RESET";
});
