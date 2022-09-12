const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const selectTip= document.getElementById('val');
const area = document.getElementById('area');
let amount = document.getElementById('amount');
const appreciateButton = document.getElementById('pay');
appreciateButton.addEventListener('click',()=>{
    const percentage = selectTip.options[selectTip.selectedIndex].value;
    let tip =0;
    tip = (parseFloat(amount.value)*percentage)/100;
    area.innerHTML= `Receipt:<br><br><b>Total Amount: ${parseFloat(amount.value)+tip}$</b><br><b>Tip Amount: ${tip}$</b>`;
    setTimeout(()=>{
        fName.value="";
        lName.value = "";
        amount.value = "";
        area.innerHTML = "";
        selectTip.options[0].selected ="true";
    },5000)
});
