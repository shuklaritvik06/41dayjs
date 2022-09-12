const inputArea = document.getElementsByClassName('input');
const countText = document.getElementsByClassName('count');
inputArea[0].addEventListener('keyup',()=>{
    countText[0].innerText = `Counter: ${inputArea[0].value.length}`;
});