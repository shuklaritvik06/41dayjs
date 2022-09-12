const submit = document.getElementById("check");
const name= document.getElementById("name");
const dob = document.getElementById("dob");
const result= document.querySelector(".result");

const months= [31,28,31,30,31,30,31,31,30,31,30,31];

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const nameValue = name.value;
    const dobValue = dob.value;
    const date = new Date(dobValue);
    const current = new Date();
    const month = current.getMonth();
    const year = current.getFullYear();
    const day = current.getDate();
    const remainingYearMonthNumb = (year-date.getFullYear());
    let remainingMonthNumb=0;
    let i = date.getMonth();
    while(i<month){
        remainingMonthNumb += months[i];
        i++;
    }
    const remainingDayNumb = day-date.getDate();
    result.innerHTML = `Hello ${nameValue}, your age is ${remainingYearMonthNumb} years ${remainingMonthNumb+remainingDayNumb} days.`;
})