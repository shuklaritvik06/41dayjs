const genButton = document.getElementById("gen");
const jokeArea = document.getElementById("jokeArea");
genButton.addEventListener("click",async ()=>{
    const response = await fetch("https://api.icndb.com/jokes/random");
    const data = await response.json();
    jokeArea.innerText= `${data.value.joke}`;
});