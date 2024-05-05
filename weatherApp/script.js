const apiKey=`aaca438264b352f4a7d4e3b890877ab3`



async function fetchWatherApi(city){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data=await response.json();
    updateWeatherUI(data);
}

    
function updateWeatherUI(data){
    const cityName=document.querySelector(".city-name")
    cityName.textContent=data.name;
    document.querySelector(".temp").textContent=`${data.main.temp}°`;
    document.querySelector(".humidity").textContent=`${data.main.humidity}%`;
    document.querySelector(".wind-speed").textContent=data.wind.speed;
    document.querySelector(".visibility-distance").textContent=`${data.visibility}km/h`;
    document.querySelector(".description-text").textContent=data.weather[0].description;
    document.querySelector(".date").textContent=new Date().toDateString()
    const weatherIcon=getWeatherIcon(data.weather[0].main)
    document.querySelector(".description i").innerHTML=`<i class="material-icons">${weatherIcon}</i>`
}
function getWeatherIcon(weatherCondition){
    const iconMap={
        Clear:"wb_sunny",
        Clouds:"wb_cloudy",
        Rain:"umbrela",
        Thunderstorm:"flash_on",
        Snow:"ac_unit",
        Drizzle:"grain",
        Mist:"cloud",
        Haze:"cloud",
        Smoke:"cloud",
        Dust:"cloud",
        Fog:"cloud",

    }
    return iconMap[weatherCondition]|| "help"
}
const formElement=document.querySelector(".search-form");
const inputbox=document.querySelector(".city-input")
    formElement.addEventListener("submit",(e)=>{
        e.preventDefault();
        const city=inputbox.value;
        if(city!==''){
        fetchWatherApi(city);}
    })

    