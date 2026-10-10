//Date Objects = Objects that contains values that
//               represent dates and times. These
//               date objects can be changes and formatted
//

// Think of UTC as the world's standard clock.
// Every country compares its own time with UTC.

// India is 5 hours 30 minutes + of UTC.

// GMT means Greenwich Mean Time.  (GMT ≈ UTC)
// Years ago, GMT was the world's standard time.
// Today, UTC is the official standard used by computers and international systems.

// You can format the date as you required
// Date(year , month , day , hour , minute , second ,ms)

// 0=January ,1=feb ,... 11= December
// 0= Sunday , 1=Monday , 2= Tuesday , 3=Wednesday ...
// The Z means this time is in UTC.

// const date1 = new Date();

// const date2 = new Date(2026, 8, 1, 16, 7, 8);
// console.log(date1.toString());
// console.log(date2);

// JavaScript understands this as

// September 1
// 4:07:08 PM
// India (IST)

// Internally, it converts it to UTC:

// 4:07 PM IST
// -5:30
// ----------------
// 10:37 AM UTC

//------------------------- Example 1 -----------------------

const date3 = new Date();
const date12 = new Date();
console.log(date3); // Some browers may print in UTC OR IST Depends
console.log("Local Time : " + date3.toString());
console.log("UTC Time   : " + date3.toISOString()); //Prints Always in UTC

console.log("Year : " + date3.getFullYear()); //IST
console.log("Month : " + date3.getMonth()); //IST
console.log("Date : " + date3.getDate()); //IST
console.log("Day : " + date3.getDay()); //IST
console.log("Hours : " + date3.getHours()); //IST
console.log("Minutes : " + date3.getMinutes()); //IST
console.log("Seconds : " + date3.getSeconds()); //IST
console.log("Milli Seconds : " + date3.getMilliseconds()); //IST

date12.setFullYear(2006);
date12.setMonth(10);
date12.setDate(1);
date12.setHours(13);
date12.setMinutes(20);
date12.setSeconds(10);

console.log("Date12 : " + date12.toString()); //If u dont give remaining it prints local time only changes you mentioned part

// If you want UTC values, use:
// date3.getUTCFullYear()
// date3.getUTCMonth()
// date3.getUTCDate()
// date3.getUTCDay()
// date3.getUTCHours()
// date3.getUTCMinutes()
// date3.getUTCSeconds()
// date3.getUTCMilliseconds()

//-------------------CUSTOM DATES AND TIME------------------------

//DATE(year,month ,day ,hour ,minute ,second ,ms)
//If we dont pass any values it will take it as Zero

const date4 = new Date(2026, 10, 8);
const date5 = new Date(2026, 10, 8, 8, 52, 10, 5);

const date9 = new Date("2026-11-14"); // if we use string by default it is in UTC so 00:00 UTC when converted it becomes 5:30 time
const date10 = new Date("2026-11-14T14:30:10"); // Js thinks given value in  in the Local Time
const date11 = new Date("2026-11-14T14:30:10Z"); // Js thinks given value in  in the UTC

console.log(date4.toString());
console.log(date5.toString());
console.log(date9.toString());
console.log(date10.toString());
console.log(date11.toString());

//------------ WE CAN EVEN PASS millsec to format ----------

//Javascript uses a starting point called "Epoch Time"

const date6 = new Date(0);
const date7 = new Date(1000); // Adds 1sec to above epoch time
const date8 = new Date(5000); // Adds 5sec to above epoch time

console.log("Epoch Time : " + date6.toString());
console.log(date7.toString());
console.log(date8.toString());

//------------------We can even Compare Dates-----------------

const date13 = new Date("2025-1-1");
const date14 = new Date(2025, 12, 1);

if (date14 > date13) {
  console.log("Happy Nwe Year!");
}
