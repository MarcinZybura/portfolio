const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");
const timeTag = document.getElementById("timer");

quoteInput.addEventListener("input", () => {
  const arrayQuote = quoteDisplay.querySelectorAll("span");
  const arrayValue = quoteInput.value.split("");

  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];

    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (character == characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.remove("correct");
      characterSpan.classList.add("incorrect");
      correct = false;
    }
  });
  if (correct == true) {
    startWatch();
    location.reload();
  }
});

function getNextQuote() {
  const quote = quoteDisplay.innerHTML;
  quoteDisplay.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteDisplay.appendChild(characterSpan);
  });
  startWatch();
  quoteInput.value = null;
}
let startTime;

function startWatch() {
  // let start = character.value.length

  timeTag.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timeTag.innerText = getTimerTime();
  });
}

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000); //Getting seconds and use math method 'floor'
}
getNextQuote();

// JQUERY AUTO-SIZING-TEXTAREA

jQuery(document).ready(function ($) {
  $("textarea")
    .each(function () {
      this.setAttribute(
        "style",
        "height:" + this.scrollHeight + "px;overflow-y:hidden;"
      );
    })
    .on("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
});
