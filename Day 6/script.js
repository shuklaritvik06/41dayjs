const checkButton = document.getElementById("check");
const desc = document.getElementById("vowels");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close");
checkButton.addEventListener("click", () => {
    const wordUser = document.getElementById("vowel-check").value;
    let numberVowels=0;
    for(let i=0;i<wordUser.length;i++){
        if(wordUser[i]==="a"||wordUser[i]==="e"||wordUser[i]==="i"||wordUser[i]==="o"||wordUser[i]==="u"){
            numberVowels++;
            desc.innerHTML = `The word ${wordUser} has ${numberVowels} vowels`;
            modal.style.display = "block";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            closeButton.addEventListener("click", () => {
                modal.style.display = "none";
                document.body.style.backgroundColor = "white";
            });
        }
    }
});