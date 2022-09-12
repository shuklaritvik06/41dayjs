const magicbtn = document.getElementById("change-hex");
const hex = document.getElementById("hex-value");
magicbtn.addEventListener("click", ()=>{
    // By default when we call toString it takes the base as 10 so will return the decimal nums but we want hex so we will pass the parameter radix 16, and then we will slice what we want
    const randomColor  = Math.random().toString(16).slice(2,8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
});