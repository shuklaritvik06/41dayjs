const countUpNums = document.querySelectorAll(".num");
countUpNums.forEach((counter)=>{
counter.innerText = 0;
    function updateCounter(){
        const targetValue = parseInt(counter.dataset.target);
        const count = parseInt(counter.innerText);
        const increment = targetValue/200;
        if(count<targetValue){
            counter.innerText = `${Math.ceil(count+increment)}`;
            setTimeout(updateCounter,10);
        }else{
            counter.innerText = targetValue;
        }
    }
    window.addEventListener("scroll", () => {
        const scrollHeight = window.scrollY;
        const sectionTop = document.querySelector(".sec");
        const sectionTopHeight = sectionTop.clientHeight;
        if (scrollHeight >= sectionTopHeight-1) {
            updateCounter();
        }
    });
});