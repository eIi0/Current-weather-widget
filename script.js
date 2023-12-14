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

    console.log(url)

    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();

    //console.log(Http)

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        var parseresponse = JSON.parse(Http.responseText)
        console.log(parseresponse)
    }
}

function parsingJSONweather(response){
    let parseresponses = JSON.parse(response);
    console.log(response.latitude);
}