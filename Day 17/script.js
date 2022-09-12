const passBtn = document.getElementById("password");
const passInput = document.getElementById("passIn");
passBtn.addEventListener("click",()=>{
    if(passBtn.classList.contains("bi-eye-fill")){
        passInput.setAttribute("type","text");
        passBtn.classList.replace("bi-eye-fill","bi-eye-slash-fill");
    }else{
        passInput.setAttribute("type","password");
        passBtn.classList.replace("bi-eye-slash-fill","bi-eye-fill");
    }
});