const randomizeButton = document.getElementById("change-rand");
const num = document.getElementById("num");
randomizeButton.addEventListener("click", ()=> {
    const randomNumber  = Math.floor(Math.random()*10);
    num.innerHTML = randomNumber;
});
