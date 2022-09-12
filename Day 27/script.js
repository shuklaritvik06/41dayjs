window.localStorage.setItem("name","Ritvik");
console.log(window.localStorage.getItem("name"));
window.localStorage.removeItem("name");
const person = {
    fname: "Ritvik",
    lname: "Shukla"
}
localStorage.setItem("user",JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user")))
localStorage.clear();