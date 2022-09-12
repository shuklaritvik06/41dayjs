console.log("Hello World");
const modalButton = document.getElementById("modal-btn");
const closeButton = document.getElementById("close");
const modalContent = document.getElementById("content");
modalButton.addEventListener("click",()=>{
    modalContent.style.display = "block";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});
closeButton.addEventListener("click",()=>{
    modalContent.style.display = "none";
    document.body.style.backgroundColor = "white";
});