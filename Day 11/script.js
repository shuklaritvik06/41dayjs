const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols= "?><:'{}[])(*&^%$#@!+=-_/?`~";
const uppercase = document.getElementById('one')
const lowercase = document.getElementById('two')
const number = document.getElementById('three')
const symbol = document.getElementById('four')
const genButton = document.getElementById('gen');
const inputArea = document.getElementById('passwd');
const copyButton = document.getElementById('copy');
let passwd = "";
function genString(upperCase,lowerCase,numbers,symbols){
    let result = "";
    result += uppercase.checked ? upperCase : "";
    result += lowercase.checked ? lowerCase : "";
    result += number.checked ? numbers : "";
    result += symbol.checked ? symbols : "";
    return result;
}
genButton.addEventListener('click',()=>{
    const length = document.getElementById('length').value;
   let temp = genString(upperCase,lowerCase,numbers,symbols);
   for (let i=0;i<length;i++){
       let char = Math.floor(Math.random()*temp.length);
       passwd+=temp[char];
   }
    inputArea.value = passwd;
});
copyButton.addEventListener('click',()=>{
    if(inputArea.value!==""){
        window.navigator.clipboard.writeText(passwd).then(
            (r)=>{
                const passgenerated = Swal.mixin({
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                passgenerated.fire({
                    icon: 'success',
                    title: 'Copied to Clipboard'
                })
            }
        );
    }
    else{
        const error = Swal.mixin(
            {
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            }
        )
        error.fire({
            title: 'Please generate a password',
            icon: 'error'
        })
    }
})