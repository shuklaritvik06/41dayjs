const btn = document.getElementById("toggler");
let mode;
btn.innerHTML = "Dark Mode";
window.addEventListener("load",()=>{
    if(localStorage.getItem("mode")==="dark"){
        document.body.classList.add("darkMode");
    }
})
btn.addEventListener("click", () => {
    if (document.body.classList.contains("darkMode")){
        document.body.classList.remove("darkMode");
        mode = "light";
        btn.innerHTML = "Dark Mode";
    } else {
        document.body.classList.add("darkMode");
        mode = "dark";
        btn.innerHTML = "Light Mode";
    }
    localStorage.setItem("mode", mode);
});