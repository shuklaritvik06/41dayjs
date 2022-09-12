const inputArea = document.getElementById("write");
const wordCount = document.getElementById("word");
const charCount = document.getElementById("char");
const wordLeft = document.getElementById("left");
const readTime = document.getElementById("time");
const WORD_LIMIT = 10;
function word_count(e){
    const input = inputArea.value;
    const value = input.match(/\S+/gi);
    if(!value){
        wordCount.innerText = 0;
        return;
    }
    wordCount.innerText = `${value.length}`;
}
function char_count(e){
    const input = inputArea.value;
    charCount.innerText = `${input.length}`
}
function word_left(e){
    if(wordCount.innerText==="0"){
        wordLeft.innerText = String(WORD_LIMIT);
        return;
    }
    if(parseInt(wordCount.innerText)===WORD_LIMIT){
        alert("Word Limit reached!!");
    }
    wordLeft.innerText = `${WORD_LIMIT-parseInt(wordCount.innerText)}`
}
function read_time(e){
    readTime.innerText = String(Math.floor((parseInt(wordCount.innerText) * 60) / 225));
}
inputArea.addEventListener("keyup",word_count);
inputArea.addEventListener("keyup",char_count);
inputArea.addEventListener("keyup",word_left);
inputArea.addEventListener("keyup",read_time);