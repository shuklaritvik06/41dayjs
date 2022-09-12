const statusText = document.getElementsByClassName('status');
const imageStatus = document.getElementsByClassName('img-status');
async function checkStatus(){
    try {
        const fetchImage = await fetch('https://avatars.githubusercontent.com/u/72812470?v=4?time=' + (new Date()).getTime());
        return fetchImage.status>=200 && fetchImage.status<=300;
    }
    catch (error){
        console.log(error);
        return false;
    }
}

window.addEventListener('load',async (event)=>{
    setInterval(async ()=>{
        const status = await checkStatus();
        if(status)
        {
            imageStatus[0].src = "https://img.icons8.com/external-nawicon-outline-color-nawicon/344/external-wifi-hotel-nawicon-outline-color-nawicon.png";
            statusText[0].textContent = "Online";
        }
        else{
            imageStatus[0].src= "./images/offline.png";
            statusText[0].textContent = "Offline";
        }
    },2000);
});