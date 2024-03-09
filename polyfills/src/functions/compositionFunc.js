function hello(...fns) {
    return function (...values) {
        return fns.reduce((acc, fn) => {
            if (Array.isArray(acc)) {
                return fn(...acc);
            } else{
                return fn(acc);
            }
        }, values);
    };
}

function sum(val1, val2) {
    return val1 + val2;
}

function multiply(val1) {
    return val1*val1;
}

const task = hello(sum, multiply);
const result = task(2, 3);
console.log(result);
