
const input=document.querySelector('#search')
const search = document.querySelector('#magnify')
const temp = document.querySelector('.temp>p')
const humid = document.querySelector('.humid>p')
const wind = document.querySelector('.wind>p')
const press = document.querySelector('.press>p')
const def = "Jajce"
p=document.querySelector('.k')
let num;
const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')
const firstp = document.querySelector('.firstp')
const secondp = document.querySelector('.secondp')
const thirdp = document.querySelector('.thirdp')
const fmaxtemp = document.querySelector('.firstmaxtemp')
const favgtemp = document.querySelector('.firstavgtemp')
const smaxtemp = document.querySelector('.secondmaxtemp')
const savgtemp = document.querySelector('.secondavgtemp')
const tmaxtemp = document.querySelector('.thirdmaxtemp')
const tavgtemp = document.querySelector('.thirdavgtemp')

async function weather(){
    
    input.value=""
    if(input.value==""){
        input.value=def
    }

    

    const response = await fetch(`
    https://api.weatherapi.com/v1/forecast.json?key=67ce42ffa41a4a2c9fa123208230210&q=${input.value}&days=3&aqi=no&alerts=no`)
    const real = await response.json()

        temp.textContent=real.current.temp_c+"°C"
        humid.textContent=real.current.humidity+"%"
        wind.textContent=real.current.wind_kph+" kph"
        press.textContent=real.current.pressure_mb+" mb"
        
        function getDayName(dateStr, locale)
{
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

let dateStr = real.forecast.forecastday[0].date
let day = getDayName(dateStr, "en-GB");

let dateStr2 = real.forecast.forecastday[1].date
let day2 = getDayName(dateStr2, "en-GB");
       
let dateStr3 = real.forecast.forecastday[2].date
let day3 = getDayName(dateStr3, "en-GB");
        
         icon(real.forecast.forecastday[0].day.condition.code)
         real.forecast.forecastday[0].day.condition.icon=`weather/64x64/day/${num}.png`
         first.src=real.forecast.forecastday[0].day.condition.icon
         firstp.textContent=day
         fmaxtemp.textContent=real.forecast.forecastday[0].day.maxtemp_c+"°C"
         favgtemp.textContent=real.forecast.forecastday[0].day.avgtemp_c+"°C"

         icon(real.forecast.forecastday[1].day.condition.code)
         real.forecast.forecastday[1].day.condition.icon=`weather/64x64/day/${num}.png`
         second.src=real.forecast.forecastday[1].day.condition.icon
         secondp.textContent=day2
         smaxtemp.textContent=real.forecast.forecastday[1].day.maxtemp_c+"°C"
         savgtemp.textContent=real.forecast.forecastday[1].day.avgtemp_c+"°C"

         icon(real.forecast.forecastday[2].day.condition.code)
         real.forecast.forecastday[2].day.condition.icon=`weather/64x64/day/${num}.png`
         third.src=real.forecast.forecastday[2].day.condition.icon
         thirdp.textContent=day3
         tmaxtemp.textContent=real.forecast.forecastday[2].day.maxtemp_c+"°C"
         tavgtemp.textContent=real.forecast.forecastday[2].day.avgtemp_c+"°C"

        console.log(real)





search.addEventListener("click", ()=>{
    async function weath(){
        const res = await fetch(`
        https://api.weatherapi.com/v1/forecast.json?key=67ce42ffa41a4a2c9fa123208230210&q=${input.value}&days=3&aqi=no&alerts=no`)
    const rea = await res.json()
        console.log(rea)
        temp.textContent=rea.current.temp_c+"°C"
        humid.textContent=rea.current.humidity+"%"
        wind.textContent=rea.current.wind_kph+" kph"
        press.textContent=rea.current.pressure_mb+" mb"
        function getDayName(dateStr, locale)
        {
            let date = new Date(dateStr);
            return date.toLocaleDateString(locale, { weekday: 'long' });        
        }
        
        let dateStr = rea.forecast.forecastday[0].date
        let day = getDayName(dateStr, "en-GB");
        
        let dateStr2 = rea.forecast.forecastday[1].date
        let day2 = getDayName(dateStr2, "en-GB");
               
        let dateStr3 = rea.forecast.forecastday[2].date
        let day3 = getDayName(dateStr3, "en-GB");
                
                 icon(rea.forecast.forecastday[0].day.condition.code)
                 rea.forecast.forecastday[0].day.condition.icon=`weather/64x64/day/${num}.png`
                 first.src=rea.forecast.forecastday[0].day.condition.icon
                 firstp.textContent=day
                 fmaxtemp.textContent=rea.forecast.forecastday[0].day.maxtemp_c+"°C"
                 favgtemp.textContent=rea.forecast.forecastday[0].day.avgtemp_c+"°C"
        
                 icon(rea.forecast.forecastday[1].day.condition.code)
                 rea.forecast.forecastday[1].day.condition.icon=`weather/64x64/day/${num}.png`
                 second.src=real.forecast.forecastday[1].day.condition.icon
                 secondp.textContent=day2
                 smaxtemp.textContent=rea.forecast.forecastday[1].day.maxtemp_c+"°C"
                 savgtemp.textContent=rea.forecast.forecastday[1].day.avgtemp_c+"°C"
        
                 icon(rea.forecast.forecastday[2].day.condition.code)
                 rea.forecast.forecastday[2].day.condition.icon=`weather/64x64/day/${num}.png`
                 third.src=rea.forecast.forecastday[2].day.condition.icon
                 thirdp.textContent=day3
                 tmaxtemp.textContent=rea.forecast.forecastday[2].day.maxtemp_c+"°C"
                 tavgtemp.textContent=rea.forecast.forecastday[2].day.avgtemp_c+"°C"
    }
    weath()
    })
    

}
weather()

function icon(z){
for(let j=0; j<47;j++){
if(z==mapping[0][j].code){
    num=mapping[0][j].icon
}}
return num
}

const mapping=[  [
    
    {  
        "code" : 1000,
        "day" : "Sunny",
        "night" : "Clear",
        "icon" : 113
    },
    {
        "code" : 1003,
        "day" : "Partly cloudy",
        "night" : "Partly cloudy",
        "icon" : 116
    },
    {
        "code" : 1006,
        "day" : "Cloudy",
        "night" : "Cloudy",
        "icon" : 119
    },
    {
        "code" : 1009,
        "day" : "Overcast",
        "night" : "Overcast",
        "icon" : 122
    },
    {
        "code" : 1030,
        "day" : "Mist",
        "night" : "Mist",
        "icon" : 143
    },
    {
        "code" : 1063,
        "day" : "Patchy rain possible",
        "night" : "Patchy rain possible",
        "icon" : 176
    },
    {
        "code" : 1066,
        "day" : "Patchy snow possible",
        "night" : "Patchy snow possible",
        "icon" : 179
    },
    {
        "code" : 1069,
        "day" : "Patchy sleet possible",
        "night" : "Patchy sleet possible",
        "icon" : 182
    },
    {
        "code" : 1072,
        "day" : "Patchy freezing drizzle possible",
        "night" : "Patchy freezing drizzle possible",
        "icon" : 185
    },
    {
        "code" : 1087,
        "day" : "Thundery outbreaks possible",
        "night" : "Thundery outbreaks possible",
        "icon" : 200
    },
    {
        "code" : 1114,
        "day" : "Blowing snow",
        "night" : "Blowing snow",
        "icon" : 227
    },
    {
        "code" : 1117,
        "day" : "Blizzard",
        "night" : "Blizzard",
        "icon" : 230
    },
    {
        "code" : 1135,
        "day" : "Fog",
        "night" : "Fog",
        "icon" : 248
    },
    {
        "code" : 1147,
        "day" : "Freezing fog",
        "night" : "Freezing fog",
        "icon" : 260
    },
    {
        "code" : 1150,
        "day" : "Patchy light drizzle",
        "night" : "Patchy light drizzle",
        "icon" : 263
    },
    {
        "code" : 1153,
        "day" : "Light drizzle",
        "night" : "Light drizzle",
        "icon" : 266
    },
    {
        "code" : 1168,
        "day" : "Freezing drizzle",
        "night" : "Freezing drizzle",
        "icon" : 281
    },
    {
        "code" : 1171,
        "day" : "Heavy freezing drizzle",
        "night" : "Heavy freezing drizzle",
        "icon" : 284
    },
    {
        "code" : 1180,
        "day" : "Patchy light rain",
        "night" : "Patchy light rain",
        "icon" : 293
    },
    {
        "code" : 1183,
        "day" : "Light rain",
        "night" : "Light rain",
        "icon" : 296
    },
    {
        "code" : 1186,
        "day" : "Moderate rain at times",
        "night" : "Moderate rain at times",
        "icon" : 299
    },
    {
        "code" : 1189,
        "day" : "Moderate rain",
        "night" : "Moderate rain",
        "icon" : 302
    },
    {
        "code" : 1192,
        "day" : "Heavy rain at times",
        "night" : "Heavy rain at times",
        "icon" : 305
    },
    {
        "code" : 1195,
        "day" : "Heavy rain",
        "night" : "Heavy rain",
        "icon" : 308
    },
    {
        "code" : 1198,
        "day" : "Light freezing rain",
        "night" : "Light freezing rain",
        "icon" : 311
    },
    {
        "code" : 1201,
        "day" : "Moderate or heavy freezing rain",
        "night" : "Moderate or heavy freezing rain",
        "icon" : 314
    },
    {
        "code" : 1204,
        "day" : "Light sleet",
        "night" : "Light sleet",
        "icon" : 317
    },
    {
        "code" : 1207,
        "day" : "Moderate or heavy sleet",
        "night" : "Moderate or heavy sleet",
        "icon" : 320
    },
    {
        "code" : 1210,
        "day" : "Patchy light snow",
        "night" : "Patchy light snow",
        "icon" : 323
    },
    {
        "code" : 1213,
        "day" : "Light snow",
        "night" : "Light snow",
        "icon" : 326
    },
    {
        "code" : 1216,
        "day" : "Patchy moderate snow",
        "night" : "Patchy moderate snow",
        "icon" : 329
    },
    {
        "code" : 1219,
        "day" : "Moderate snow",
        "night" : "Moderate snow",
        "icon" : 332
    },
    {
        "code" : 1222,
        "day" : "Patchy heavy snow",
        "night" : "Patchy heavy snow",
        "icon" : 335
    },
    {
        "code" : 1225,
        "day" : "Heavy snow",
        "night" : "Heavy snow",
        "icon" : 338
    },
    {
        "code" : 1237,
        "day" : "Ice pellets",
        "night" : "Ice pellets",
        "icon" : 350
    },
    {
        "code" : 1240,
        "day" : "Light rain shower",
        "night" : "Light rain shower",
        "icon" : 353
    },
    {
        "code" : 1243,
        "day" : "Moderate or heavy rain shower",
        "night" : "Moderate or heavy rain shower",
        "icon" : 356
    },
    {
        "code" : 1246,
        "day" : "Torrential rain shower",
        "night" : "Torrential rain shower",
        "icon" : 359
    },
    {
        "code" : 1249,
        "day" : "Light sleet showers",
        "night" : "Light sleet showers",
        "icon" : 362
    },
    {
        "code" : 1252,
        "day" : "Moderate or heavy sleet showers",
        "night" : "Moderate or heavy sleet showers",
        "icon" : 365
    },
    {
        "code" : 1255,
        "day" : "Light snow showers",
        "night" : "Light snow showers",
        "icon" : 368
    },
    {
        "code" : 1258,
        "day" : "Moderate or heavy snow showers",
        "night" : "Moderate or heavy snow showers",
        "icon" : 371
    },
    {
        "code" : 1261,
        "day" : "Light showers of ice pellets",
        "night" : "Light showers of ice pellets",
        "icon" : 374
    },
    {
        "code" : 1264,
        "day" : "Moderate or heavy showers of ice pellets",
        "night" : "Moderate or heavy showers of ice pellets",
        "icon" : 377
    },
    {
        "code" : 1273,
        "day" : "Patchy light rain with thunder",
        "night" : "Patchy light rain with thunder",
        "icon" : 386
    },
    {
        "code" : 1276,
        "day" : "Moderate or heavy rain with thunder",
        "night" : "Moderate or heavy rain with thunder",
        "icon" : 389
    },
    {
        "code" : 1279,
        "day" : "Patchy light snow with thunder",
        "night" : "Patchy light snow with thunder",
        "icon" : 392
    },
    {
        "code" : 1282,
        "day" : "Moderate or heavy snow with thunder",
        "night" : "Moderate or heavy snow with thunder",
        "icon" : 395
      
    }
   
]

]
