function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let clockElement = document.getElementById("clock");
  clockElement.textContent = `${hours}:${minutes}${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();
