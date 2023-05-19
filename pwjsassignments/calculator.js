let num1 = prompt("Enter your first number");
num1 = parseInt(num1);
let operator = prompt("Enter your operator(+,-,/,*)");
let num2 = prompt("Enter your second number");
num2 = parseInt(num2);
switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  default:
    console.log("Invalid operator")
    break;
}
