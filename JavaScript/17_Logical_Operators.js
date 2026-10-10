// Logical Operators = used to combine or manipulate boolean values
//                      (true or false)

//                      AND=&&
//                      OR = ||
//                      NOT = !

const temp = 20;
if (temp > 0 && temp <= 30) {
  console.log("The Weather is good");
} else {
  console.log("Weather is Bad");
}

const temp1 = -200;
if (temp1 <= 0 && temp1 > 30) {
  console.log("The Weather is BAD");
} else {
  console.log("The Weather is Good");
}

const isSunny = true;

if (isSunny) {
  console.log("It is sunny");
} else {
  console.log("It is Cloudy");
}

const isSunny1 = true;

if (!isSunny1) {
  console.log("It is Cloudy");
} else {
  console.log("It is Sunny");
}
