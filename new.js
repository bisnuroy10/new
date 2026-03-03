console.log("Hi this is my first js file after a long time.");
const age = 25;
console.log(age, typeof age);
const roll = "25";
console.log("sum of roll and age is", age + roll, "because the type of age is", typeof age, 'And the type of roll is', typeof roll);
const country = "bangladesh";

function sum(a, b) {
 const sum = a + b;
 console.log (sum)
}

sum(10, 20);

function substraction(a, b){
    const sub = a - b;
    console.log(sub);
}

substraction(20, 10);

const multiple = (a, b) =>{
    const multiple = a * b ;
    console.log(multiple);
}

multiple(30, 30);

const division = (a, b) =>{
    const division = a / b;
    console.log(division);
}

division(5346, 50);

const exponenciation = (a, b)=>{
    const expon = a ** b;
    console.log(expon)
}

exponenciation(23, 2);

const modulas = (a, b)=>{
    const modulas = a % b;
    console.log(modulas)
}

modulas(5333, 20);