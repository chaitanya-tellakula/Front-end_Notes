//      =  assignment operator
//      == comparision operatior (compare if values are equal)
//      === Strict equality operator( compare if values & datatype are equal)
//      != inequality operator
//      !== strict inquality operator
//
//String Equality useful as user even return string.
//      to verify whether we convert that into number

const PI = 3.14;

if (PI == "3.14") {
  console.log("Even differnt data type they are equal");
} else {
  console.log("This is not PI");
}

const PI1 = 3.14;
if (PI1 === "3.14") {
  console.log(
    "As we using strict equality it checks even datatype so not equal",
  );
} else {
  console.log("This is not PI");
}

const PI2 = 3.14;
if (PI2 != "3.14") {
  console.log("Checks only value not data type");
} else {
  console.log("This is  PI");
}

const PI3 = 3.14;
if (PI3 !== "3.14") {
  console.log("Checks only value and  data type both");
} else {
  console.log("This is  PI");
}
