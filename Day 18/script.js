const note = document.getElementById("note");
const key = document.querySelectorAll(".key");
function playKey(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    note.innerText = key.dataset.note;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}
window.addEventListener("keydown",playKey);
key.forEach((key)=>{
    key.addEventListener("transitionend",removeClass);
});
function removeClass(){
    this.classList.remove("playing");
}