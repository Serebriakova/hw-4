const operation = prompt("Enter math operation: add, sub, mult, div");
const number1 = prompt("Enter number 1");
const number2 = prompt("Enter number 2");

const add = Number(number1) + Number(number2);
const sub = number1 - number2;
const mult = number1 * number2;
const div = number1 / number2;

if (operation == "add") {
    alert(`${number1} + ${number2} = ${add} `);
} else if (operation == "sub") {
    alert(`${number1} - ${number2} = ${sub} `);
} else if (operation == "mult") {
    alert(`${number1} * ${number2} = ${mult} `);
} else {
    alert(`${number1} / ${number2} = ${div} `);
}

