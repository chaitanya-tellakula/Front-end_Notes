//Switch =  can be efficent replacenment for the many if else statements

// if we dont have break statements
//  after the correct match found we will print all the cases until the next break
//  if we dont have  break it will print including the default case

let day = 6;

switch (day) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Tuesday");
    break;
  case 3:
    console.log("It is Wednesday");
    break;
  case 4:
    console.log("It is Thrusday");
    break;
  case 5:
    console.log("It is Friday");
    break;
  case 6:
    console.log("It is Saturday");
    break;
  case 7:
    console.log("It is Sunday");
    break;
  default:
    console.log(day + "It is not a Day");
}

let testscore = 92;
let Grade;

switch (true) {
  case testscore >= 90:
    Grade = "A";
    break;
  case testscore >= 80:
    Grade = "B";
    break;
  case testscore >= 70:
    Grade = "C";
    break;
  case testscore >= 60:
    Grade = "D";
    break;
  default:
    Grade = "F";
}

console.log(Grade);
