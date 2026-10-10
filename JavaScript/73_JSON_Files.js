// JSON = (Javascript Object Notation ) data interchange
//         format  used for echanging data between a server
//         and web application
//
// There may be another formats also

//JSON files {key : value} OR [value1 , value2 , value3]
//                         OR [{} {} {}] ->Array of objects
//
//JSON files actually contains js objects but keys also in double coats

// JSON.stringyfy()= converts a JS Object to a JSON string
// JSON.parse()= converts a JSON string to a JS object

//response.json()= returns the js object

// `{"name":"Chaitanya","age":30}`
//           ↑
//       JSON STRING
//           │
//           │ JSON.parse()
//           ↓
// {name: "Chaitanya", age: 30}
//           ↑
//    JAVASCRIPT OBJECT

// Converting Js object to the JSON String

const names = ["chaitanya", "rutwik", "Chintu", "ANK"];
const person = {
  name: "Chaitanya",
  age: 30,
  isEmployed: true,
  hobbies: ["watching cricket", "playing ff"],
};

const people = [
  {
    name: "Chaitanya",
    age: 30,
    isEmployed: true,
  },
  {
    name: "Teja",
    age: 20,
    isEmployed: false,
  },
  {
    name: "Bobba",
    age: 21,
    isEmployed: true,
  },
  {
    name: "Jittu",
    age: 22,
    isEmployed: false,
  },
];

//forms a one long string
const namesString = JSON.stringify(names);
const personString = JSON.stringify(person);
const peopleString = JSON.stringify(people);

console.log(namesString);
console.log(personString);
console.log(peopleString);

console.log(names);
console.log(person);
console.log(people);

// Converting JSON string into Js object
//In JSON string the key- also strings all are strings

// Note :

// 1)In JSON, property names must also use double quotes.
// 2)Also, JSON does not allow the trailing comma
//  after the last property.

//For making string you can use `` or '' or ""

const namesJSON = '["chaitanya", "rutwik", "Chintu", "ANK"]';
const personJSON = `{
  "name": "Chaitanya",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["watching cricket", "playing ff"]
}`;

const peopleJSON = `[
  {
    "name": "Chaitanya",
    "age": 30,
    "isEmployed": true
  },
  {
    "name": "Teja",
    "age": 20,
    "isEmployed": false
  },
  {
    "name": "Bobba",
    "age": 21,
    "isEmployed": true
  },
  {
    "name":"Jittu",
    "age": 22,
    "isEmployed": false
  }
]`;

const namesObject = JSON.parse(namesJSON);
const personObject = JSON.parse(personJSON);
const peopleObject = JSON.parse(peopleJSON);

console.log(namesObject);
console.log(personObject);
console.log(peopleObject);

//-------------------Example 2(Fetch JSON Files)-------------------------

// JSON.parse() = "I already have a long JSON string;
//                convert that into Js object."

// response.json() = "Read the response body and
//           covert that into Js object . here that file
//    you reading the content in JSON format data but
//  in the file we not make them as long string "

// JSON FORMAT Data means :
//              check in files i written
// They same as js object just the keys also need
// doublecoats thats it when we convert then it js object
//  then js object keys no need double coats

// {
//   "name":"Jittu",
//   "age": 22,
//   "isEmployed": false
// }

fetch("73_person.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

// returns array of persons
// data means that array we get from response that contain objects
fetch("73_people.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

// values -> Js array of objects  as Array we can use for each method
fetch("73_people.json")
  .then((response) => {
    console.log(response);
    return response.json(); // we need to return that response.json is a promise it runs and gives the data to next
  })
  .then((values) => {
    console.log(typeof values);
    console.log(values); // Arrays are of type object
    values.forEach((value) => {
      console.log(value.name);
    });
  });

// response.json()-> gives you the js object of the content in the file
