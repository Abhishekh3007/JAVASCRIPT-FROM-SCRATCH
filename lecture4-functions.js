function add(a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
};

const multiply = (a, b) => a * b;

function greet(name = 'Student') {
    return 'Hello, ' + name;
}

function isEven(number) {
    return number % 2 === 0;
}

function factorial(number) {
    if (number <= 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

function sumAll(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

function operate(a, b, callback) {
    return callback(a, b);
}

function makeCounter() {
    let count = 0;
    return function () {
        count += 1;
        return count;
    };
}

const counter = makeCounter();

console.log('add:', add(10, 5));
console.log('subtract:', subtract(10, 5));
console.log('multiply:', multiply(10, 5));
console.log('greet:', greet());
console.log('greet with name:', greet('Asha'));
console.log('isEven 8:', isEven(8));
console.log('isEven 7:', isEven(7));
console.log('factorial 5:', factorial(5));
console.log('sumAll:', sumAll(1, 2, 3, 4, 5));
console.log('operate add:', operate(20, 30, add));
console.log('operate multiply:', operate(6, 7, multiply));
console.log('counter 1:', counter());
console.log('counter 2:', counter());
console.log('counter 3:', counter());
