//String Methods =Allow you manupulate
//                  and work with the text(Strings)

//charAt(0)
//indexOf("0") -> Returns First Occurance of character
//.length
//.trim()
//startsWith("Bro") -> Returns a Boolean
//endssWith(" ") -> Returns a Boolean
//endssWith(" ") -> Returns a Boolean
//includes( " ") -> Does String Contain this Returns Boolean
//replaceAll("-","") -> replace "-" with nothing
//padStart(15,"0") -> pad at start until string become 15 length
//padEnd(20,"0") -> pad at End until string become 20 length

let username = "   Bro Code   ";
console.log(username.charAt(0));

console.log(username.indexOf("Co"));
console.log(username.length);
console.log(username.trim());

if (username.startsWith(" ")) {
  console.log("Your name can't start with the space");
} else {
  console.log(username);
}

if (username.endsWith(" ")) {
  console.log("Your name can't end with the space");
} else {
  console.log(username);
}

if (username.includes(" ")) {
  console.log("Your name can't include with the space");
} else {
  console.log(username);
}

let phoneNumber = "123-456-789";
console.log(username.replaceAll("-", ""));

console.log(username.padStart(20, "0"));
console.log(username.padEnd(20, "0"));
