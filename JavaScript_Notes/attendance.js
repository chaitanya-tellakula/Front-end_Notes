const present = document.getElementById("present");
const absent = document.getElementById("absent");

let presentCount = 0;
let absentCount = 50;

function increase() {
  presentCount++;
  absentCount--;

  present.textContent = presentCount;
  absent.textContent = absentCount;
}




