let screen = document.querySelector(".screen");
let box = document.querySelector(".box");
let notification = document.querySelector(".notification");

// EVENT LISTENERS
window.addEventListener("load", changeColor);
document.addEventListener("click", changeColor);

// FUNCTIONS
function changeColor(event) {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  box.innerHTML = `rgb(${red},${green},${blue})`;
  screen.style.backgroundColor = `rgb(${red},${green},${blue})`;

  let texts = ["GREAT!", "COOL!", "WOW!", "JOSS!"];
  let text = texts[Math.floor(Math.random() * 4)];
  
  if (event.type === "click") {
    notification.innerHTML = text;
    notification.style.backgroundColor = `rgb(${red},${green},${blue})`;
    notification.style.opacity = "1";
    notification.classList.add("animation");
    setTimeout(function () {
      notification.style.opacity = "0";
      notification.style.pointerEvents = "none";
      notification.classList.remove("animation");
    }, 800);
  } else {
    return;
  }
}
