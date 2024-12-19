// Sart
const mainCon= document.querySelector(".mainCon")
let placeN = document.querySelector("#place #name")
let placeImg = document.querySelector("#place img")
let wImg = document.querySelector(".wIMG img")
let tempC = document.querySelector(".temp p")
let clouds = document.querySelector(".clouds pre")
let humidity = document.querySelector(".humidity pre")
let pressure = document.querySelector(".pressure pre")
let summary = document.querySelector("#description")
const id = "9505fd1df737e20152fbd78cdb289b6a";
const maninUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${id}&q=`;
const form = document.querySelector("form");
let input = document.querySelector("input")


form.addEventListener("submit",async (evt)=>{
    evt.preventDefault();
    let reponse = await fetch(`${maninUrl}${input.value}`);
    let data = await reponse.json();
    if (data.cod!=200) {
        mainCon.classList.add("errorMsg")
        setTimeout(() => {
            mainCon.classList.remove("errorMsg")
        }, 500);
    } else {
        placeImg.style.display = "flex";
        placeN.innerText = data.name;
        placeImg.src=`https://flagsapi.com/${data.sys.country}/flat/32.png`;
        wImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        tempC.innerText=data.main.temp;
        description.innerText = data.weather[0].description;
        clouds.innerText = `${data.clouds.all}%`;
        humidity.innerText = `${data.main.humidity}%`;
        pressure.innerText = `${data.main.pressure}hPa`;
    }
})