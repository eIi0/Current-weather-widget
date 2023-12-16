const x = document.getElementById("demo");
    
function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getweatherinfo);
    } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude);
}

function getweatherinfo(position){
    let url = "https://api.open-meteo.com/v1/forecast?latitude="+ position.coords.latitude +"&longitude="+ position.coords.longitude+"&current_weather=true"

    const req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();

    req.onload  = function() {
        var jsonResponse = JSON.parse(req.responseText);
        parsingJSONweather(jsonResponse)
     };

}

function parsingJSONweather(datajson){
    console.log(datajson.current_weather_units)
    let temperature = datajson.current_weather.temperature
    let is_day = datajson.current_weather.is_day
    let weathercode = datajson.current_weather.weathercode
    let winddirection = datajson.current_weather.winddirection
    let windspeed = datajson.current_weather.windspeed
}

/****************************** 
 *           VMO code (for weather_code)
 * 
 *           0	        Clear sky
 *           1, 2, 3	Mainly clear, partly cloudy, and overcast
 *           45, 48	    Fog and depositing rime fog
 *           51, 53, 55	Drizzle: Light, moderate, and dense intensity
 *           56, 57	    Freezing Drizzle: Light and dense intensity
 *           61, 63, 65	Rain: Slight, moderate and heavy intensity
 *           66, 67	    Freezing Rain: Light and heavy intensity
 *           71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
 *           77	        Snow grains
 *           80, 81, 82	Rain showers: Slight, moderate, and violent
 *           85, 86	    Snow showers slight and heavy
 *           95 *	    Thunderstorm: Slight or moderate
 *           96, 99 *	Thunderstorm with slight and heavy hail
 * 
 ******************************/