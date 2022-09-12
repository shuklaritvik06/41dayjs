const options = document.getElementsByClassName('option');
const clearButton = document.getElementsByClassName('clear');
const generateButton = document.getElementsByClassName('generate');
const textArea = document.getElementsByClassName('embed');
const driveLink = document.getElementsByClassName('glink');
generateButton[0].addEventListener('click',()=>{
    let link = driveLink[0].value;
    const confirmLink = link.includes('https://drive.google.com/file/d/');
    if(confirmLink){
        textArea[0].value = link.replace('https://drive.google.com/file/d/', 'https://drive.google.com/uc?export=download&id=').replace("/view?usp=sharing", "");
        console.log(textArea[0].value)
    }
});
textArea[0].addEventListener('click',()=>{
    if(textArea[0].value===""){
        alert("Please generate a link");
    }
    else{
        window.navigator.clipboard.writeText(textArea[0].value).then(r=> alert('Copied'));
    }
});
options[0].addEventListener('click',()=>{
    let link = driveLink[0].value;
    textArea[0].value = link.replace('https://drive.google.com/file/d/', 'https://drive.google.com/uc?export=download&id=').replace("/view?usp=sharing", "");
});
options[1].addEventListener('click',()=>{
    let link = driveLink[0].value;
    if(link[0].value!==""){
        const audioPartOne= '<audio width="300" height="32" controls="controls" src="';
        const audioPartTwo= '" type="audio/mp3"></audio>';
        textArea[0].value = audioPartOne + textArea[0].value + audioPartTwo;
    }
});
options[2].addEventListener('click',()=>{
    let link = driveLink[0].value;
    if(link!==""){
        const videoPartOne= '<iframe src="';
        const videoPartTwo= '/preview" width="600" height="400"></iframe>';
        textArea[0].value = videoPartOne+ link.replace('/view?usp=sharing','') + videoPartTwo;
    }
});
clearButton[0].addEventListener('click',()=>{
   textArea[0].value = "";
   driveLink[0].value = "";
});