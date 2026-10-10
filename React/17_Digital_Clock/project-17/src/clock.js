const a = document.getElementById("clock-values");

setInterval(() => {
  clock();
}, 1000);

function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  a.textContent = hours + ":" + minutes + ":" + seconds;

  console.log("Rendered");
}
