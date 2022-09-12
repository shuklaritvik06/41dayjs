const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter");
// parseInt() converts a string to an integer, as we are taking the use of the innerText of the counter it is a string so we need to convert it to an integer
increment.addEventListener("click", function() {
    counter.innerText = parseInt(counter.innerText) + 1;
});
decrement.addEventListener("click", function() {
    counter.innerText = parseInt(counter.innerText) - 1;
});
reset.addEventListener("click", function() {
    counter.innerText = 0;
});