const celsiusInput = document.getElementById('celsius');
const kelvinInput = document.getElementById('kelvin');
const fahrenheitInput = document.getElementById('fahrenheit');

function convertTemp(e) {
    if(e.target.name==='celsius'){
        let temp = Number(e.target.value);
        kelvinInput.value= temp+273.15;
        fahrenheitInput.value= ((temp*1.8)+32).toFixed(2);
    }
    if(e.target.name==='kelvin'){
        let temp = Number(e.target.value);
        celsiusInput.value = (temp-273.15).toFixed(2);
        fahrenheitInput.value= ((temp-273.15)*(9/5)+32).toFixed(2);
    }
    if(e.target.name==='fahrenheit'){
        let temp = Number(e.target.value);
        celsiusInput.value = ((temp-32)*(5/9)).toFixed(2);
        kelvinInput.value= ((temp-32)*(5/9)+273.15).toFixed(2);
    }
}

form.addEventListener('input',convertTemp);