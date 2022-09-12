const copyButton = document.getElementById('copy');
const inputArea = document.getElementById('form');
const genButton = document.getElementById('coupon');
genButton.addEventListener('click',()=>{
    let a = Math.random().toString(16).slice(2,10);
    inputArea.setAttribute("value",a);
});
copyButton.addEventListener('click',()=>{
    navigator.clipboard.writeText(inputArea.value).then(r =>  copyButton.innerText = "Copied");
    setTimeout(()=>{
        copyButton.innerText = "Copy";
        inputArea.setAttribute("value","");
        inputArea.setAttribute("placeholder","Press Copy Button");
    },3000);
});