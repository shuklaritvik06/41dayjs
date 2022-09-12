const poundInput = document.getElementById('pound');
const kiloInput = document.getElementById('kilograms');
const gramInput = document.getElementById('grams');
const ounceInput = document.getElementById('ounces');
const form = document.getElementById('form');

function convertWeight(e) {
    if(e.target.name==='pound'){
        let weight = e.target.value;
        kiloInput.value= weight/2.205;
        gramInput.value= weight*454;
        ounceInput.value= weight*16;
    }
    if(e.target.name==='kilograms'){
        let weight = e.target.value;
        poundInput.value= weight*2.205;
        gramInput.value= weight*1000;
        ounceInput.value= weight*35.274;
    }
    if(e.target.name==='grams'){
        let weight = e.target.value;
        kiloInput.value= weight/1000;
        poundInput.value= weight/454;
        ounceInput.value= weight/28.35;
    }
    if(e.target.name==='ounces'){
        let weight = e.target.value;
        kiloInput.value= weight*35.274;
        gramInput.value= weight*28.35;
        poundInput.value= weight/16;
    }
}

form.addEventListener('input',convertWeight);