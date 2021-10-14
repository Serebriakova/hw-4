const operation = prompt("Enter math operation: add, sub, mult, div");
let number1 = prompt("Enter number 1");
let number2 = prompt("Enter number 2");

let add = Number(number1) + Number(number2);
let sub = number1 - number2;
let mult = number1 * number2;
let div = number1 / number2;

if (operation == "add") {
    alert(`${number1} + ${number2} = ${add} `);
} else if (operation == "sub") {
    alert(`${number1} - ${number2} = ${sub} `);
} else if (operation == "mult") {
    alert(`${number1} * ${number2} = ${mult} `);
} else {
    alert(`${number1} / ${number2} = ${div} `);
}

