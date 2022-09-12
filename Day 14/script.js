const searchInput = document.getElementById('searchinput');
const items = document.getElementsByTagName('li');
const listGroup = document.getElementById('group');
searchInput.addEventListener('keyup',()=>{
    for(let i=0;i<items.length;i++){
        if (items[i].innerText.includes(searchInput.value.toLowerCase())){
            items[i].style.display= "block";
        }
        else{
            items[i].style.display = "none";
        }
    }
});