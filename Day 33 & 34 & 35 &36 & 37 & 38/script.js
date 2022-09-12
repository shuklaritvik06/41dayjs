// If I will omit the force parameter, it will give flickering as continuos addition and removal would happen.

window.addEventListener("scroll",()=>{
    const header = document.querySelector("nav");
    header.classList.toggle("sticky",window.scrollY > 0);
})

const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click",()=>{
        links.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
    })
})

document.querySelector("button").addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })  
})

document.querySelector(".bi-list").addEventListener("click",()=>{
    document.querySelector("nav ul").classList.add("slide");
    document.querySelector(".bi-list").style.display = "none";
    document.querySelector(".bi-x-lg").style.display = "block";
})

document.querySelector(".bi-x-lg").addEventListener("click",()=>{
    document.querySelector("nav ul").classList.remove("slide");
    document.querySelector(".bi-list").style.display = "block";
    document.querySelector(".bi-x-lg").style.display = "none";
})