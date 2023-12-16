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

function parsingJSONweather(response){
    console.log(response.latitude);


}