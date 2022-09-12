const element = document.getElementById("he");
const content = document.getElementById("content");
const buttons = document.querySelectorAll("button");
const attr = element.getAttribute("data-key");
console.log(attr);
const all_Data = element.dataset;  // DomStringMap
console.log(all_Data)
// Traversing DOMStringMap
for (let allDataKey in all_Data) {
    console.log(all_Data[allDataKey]);
}
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const attr = btn.getAttribute("data-target");
        if(attr==="home"){
            content.innerHTML = "Home Page";
        }
    })
})