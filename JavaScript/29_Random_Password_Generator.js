//Random Password Generator

const PasswordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols,
) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercaase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";
  allowedChars += includeLowerCase ? lowercase : "";
  allowedChars += includeUpperCase ? uppercaase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (length <= 0) {
    return "password length must at least be 1";
  }
  if (allowedChars.length === 0) {
    return " You must select at least one set";
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const password = generatePassword(
  PasswordLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols,
);
console.log("Generated Password : " + password);
