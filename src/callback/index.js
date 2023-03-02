function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, sumar) {
  return sumar(num1, num2);
}

console.log(calc(6, 2, sum));

setTimeout(function () {
  console.log("Hola mundo");
}, 2000);

function greetings(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greetings, 2000, "Santiago");
