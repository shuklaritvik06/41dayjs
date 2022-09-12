const passwdInput = document.getElementById("passwd");
let state = true;
const progressBar = document.getElementById("progress");
const eyeIcon = document.getElementById("eye");
const iconOne = document.getElementById("icon-1");
const iconTwo = document.getElementById("icon-2");
const iconThree = document.getElementById("icon-3");
const iconFourth = document.getElementById("icon-4");

function changeIcon(element) {
    element.classList.remove("bi-circle-fill");
    element.classList.add("bi-check");
}

function revertChangeIcon(element) {
    element.classList.remove("bi-check");
    element.classList.add("bi-circle-fill");
}

function checkStrength(pass) {
  let strength = 0;
  if(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
      strength+=1;
      changeIcon(iconOne);
  }else{
      revertChangeIcon(iconOne);
  }
    if(pass.match(/(\d)/)){
        strength+=1;
        changeIcon(iconTwo);
    }else{
        revertChangeIcon(iconTwo);
    }

    if(pass.match(/([!,@,#,$,%,^,&,*,(,),_,-,+,=,?,~,`])/)){
        strength+=1;
        changeIcon(iconThree);
    }else{
        revertChangeIcon(iconThree);
    }
    if(pass.length>7){
        strength+=1;
        changeIcon(iconFourth);
    }else{
        revertChangeIcon(iconFourth);
    }
    if(strength===1){
        progressBar.classList.add("bg-danger");
        progressBar.style="width: 25%";
    }
    else if(strength===2){
        progressBar.classList.remove("bg-danger");
        progressBar.classList.add("bg-info");
        progressBar.style="width: 50%";
    }
    else if(strength===3){
        progressBar.classList.remove("bg-info");
        progressBar.classList.add("bg-warning");
        progressBar.style="width: 75%";
    }
    else if(strength===4){
        progressBar.classList.remove("bg-warning");
        progressBar.classList.add("bg-success");
        progressBar.style="width: 100%";
    }
}

passwdInput.addEventListener("keyup",()=>{
    let pass = passwdInput.value;
    checkStrength(pass);
});
eyeIcon.addEventListener("click",()=>{
   if(state){
       eyeIcon.classList.replace("bi-eye","bi-eye-slash");
       passwdInput.setAttribute("type","text");
       state = false;
   }else{
       eyeIcon.classList.replace("bi-eye-slash","bi-eye");
       passwdInput.setAttribute("type","password");
       state = true;
   }
});