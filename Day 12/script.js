const height = document.getElementById('height');
const weight = document.getElementById('weight');
const genButton  = document.getElementById('gen');
function genBMI(height,weight){
    height = parseFloat(height)
    weight =  parseFloat(weight)
    return ((weight*10000) / (height * height));
}
genButton.addEventListener('click',()=>{
    const BMI = genBMI(height.value,weight.value);
    document.getElementById('title').innerText = `Your BMI is ${BMI.toFixed(1)}`;
    setTimeout(()=>{
        document.getElementById('title').innerText= "BMI Calculator";
        height.value= "";
        weight.value = "";
    },2000)
});