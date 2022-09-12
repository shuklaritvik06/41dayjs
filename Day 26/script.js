const submitBtn = document.getElementById("submit");
const errorText = document.getElementById("error");
const weatherArea = document.getElementById("result");
const query = document.getElementById("city");
const iconURL = "https://api.openweathermap.org/img/w/";
const apiDetails ={
    apiBase: "https://api.openweathermap.org/data/2.5/",
    apiKey: "API KEY"
}
submitBtn.addEventListener("click",() => {
    const queryValue = query.value;
    if (queryValue=== "") {
        errorText.classList.remove("d-none");
    } else {
        errorText.classList.add("d-none");
        getData(queryValue).then((r)=>console.log("Successfully Populated DOM!"));
    }
});
async function getData(a){
    const response = await fetch(`${apiDetails.apiBase}weather?q=${a}&units=metric&appid=${apiDetails.apiKey}`);
    const result = await response.json();
    await displayResult(result);
}
async function displayResult(b){
    const month = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const day = [
        "Sun", "Mon", "Tue", "Wed","Thur","Fri","Sat"
    ]
    const date = new Date();
    const icon = iconURL + b.weather[0].icon + ".png";
    weatherArea.innerHTML=`
    <div class="d-flex align-items-center flex-column mt-3">
        <img alt="weather" src="${icon}">
        <h2>${b.name}, ${b.sys.country}</h2>
        <p>${day[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}</p>
     </div>
     <hr>
     <div class="px-3">
      <p><span><strong>Latitude:</strong> ${b.coord.lat}</span><br><span><strong>Longitude:</strong> ${b.coord.lon}</span><br><span><strong>Weather:</strong> ${b.weather[0].main}</span><br><span><strong>Temp:</strong> ${b.main.temp}</span><br><span><strong>Temp Range:</strong> ${b.main.temp_min} - ${b.main.temp_max}</span></p>
      </div>
    `;
}

