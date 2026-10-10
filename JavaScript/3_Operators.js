// arthmetic operators = operands( values, variables, etc .)
//                       operators(+ - * /)
//                       ex : li= x+5

let students = 30;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2; // exponents  student power 2

let extrastudents = students % 3;

console.log(extrastudents);

// Augemented assignment operators

students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

console.log(students);

students++; //incremet operator
students--; //decrement operator

/*
        operator precedence :
                1) parenthesis ()
                2) exponents
                3)multiplication ,division , modulo
                4)addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);

let result2 = (12 % 5) + 8 / 2;
console.log(result2);

let result3 = 6 / 2 ** (2 + 5);
console.log(result3);
