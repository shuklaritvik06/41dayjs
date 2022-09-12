const checkButton = document.getElementById("check");
const rightModal = document.getElementById("contentright");
const wrongModal = document.getElementById("contentwrong");
const rightClose = document.getElementById("closeright");
const wrongClose = document.getElementById("closewrong");
checkButton.addEventListener("click", () => {
    const inputUser = document.getElementById("pal-check").value;
    const tempArray = inputUser.split("");
    const reverseArray = tempArray.reverse();
    const palValue = reverseArray.join("");
    if (inputUser === palValue) {
        rightModal.style.display = "block";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        rightClose.addEventListener("click",()=>{
            rightModal.style.display = "none";
            document.body.style.backgroundColor = "white";
        });
    }
    else {
        wrongModal.style.display = "block";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        wrongClose.addEventListener("click",()=>{
            wrongModal.style.display = "none";
            document.body.style.backgroundColor = "white";
        });
    }
});