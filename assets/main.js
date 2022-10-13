//console.log("This is the log for the 🔥EXTERNAL🔥JavaScript");

/**
 * ## Usage / Adapt from acceptance criteria
GIVEN a weather dashboard with form inputs

WHEN I search for a city
THEN I am presented with current and future conditions for that city
and that city is added to the search history
STEP 1
1.-This logic needs to happen in a function getCurrentWeather()
When we click the search, we use the fetch() or the API (use the Generated KEYS )calls and we can console log the data back
confirm the API calls
do current day first
create variables target the icons, the data (weather)

STEP 2
create code for the div container and put it inside the HTML

WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions,
 the temperature, the humidity, and the the wind speed

STEP 3
1.-We will need a fetch () inside the function for getFiveDayWeather() for a different API call
2.-We can console.log the data that comes back from the fetch() request.
2.5.- After console log. write .js that creates one card for one day and we can append child the div into the HTML
WHEN I view future weather conditions for that city

3.-Add a for loop that will create a card for each day 
THEN I am presented with a 5-day forecast that displays the date, an icon representation of
weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
 * 
 * 
 * 
 */





//Website https://home.openweathermap.org/api_keys
//Generated KEY 07919368b691b89429ebf5d03e4b1896

var APIKey = "07919368b691b89429ebf5d03e4b1896";
function getCoordinates () {
let url =`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${APIKey}`
fetch(url).then(response => response.json())
.then( data => {
    console.log(data[0].lat); //This has to match the data we want to fetch
    var latitude = data[0].lat
    var longitud = data[0].lon
    getForecast(latitude,longitud);
 })

}
getCoordinates();

let getForecast = function(lat,long){
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=adfcac97a8c42d0e748dcf301adb488f
`
fetch(url).then(response => response.json())
.then( data => {
    console.log(data);
    //Create a div container and change the innetHTML to the data and icon, temperature, etc.
var forecastDiv = document.querySelector("#topBar")
var currentTemp = document.createElement("p");
currentTemp.textContent="The current temperature is  "+data.list[0].main.temp 
forecastDiv.appendChild(currentTemp);

    //Append this to another HTML container
 })
}

//Create element
//Line at the bottom


//navigator.geolocation.getCurrentPosition(gotPosition);