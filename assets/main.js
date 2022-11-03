console.log("This is the log for the 🔥EXTERNAL🔥JavaScript");



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



var city_header = document.querySelector("#CityDateIcon")
let weather_details = document.querySelector("#WeatherDetails")
/*
var thisDay = new Date();
var citySearchEl = document.getElementById("citySearch");
var bottomLeftColEl = document.getElementById("bottomLeftCol");
var cityEl = document.getElementById("city");
var searchHistoryCardEl = document.getElementById("search-history-card")
var historyBtnsEl = document.getElementById("history-buttons-container");
var historyBtnsArray [];
var dynamicWeatherCardEl = document.getElementById("DynamicWeatherCard");

var fiveDaycontainerEl = document.getElementById("FiveDaycontainer");



//Website https://home.openweathermap.org/api_keys
//Generated KEY 07919368b691b89429ebf5d03e4b1896


*/
var fiveDayForCardEl = document.getElementById("five-day-forecast-card");
var searchBtn = document.getElementById("searchBtn");

//1
// Get weather information from OpenWeather


var APIKey = "07919368b691b89429ebf5d03e4b1896";


function getCoordinates () {
    event.preventDefault();
var userInput = document.getElementById("city").value
console.log("hello");
console.log(userInput);
//We use Temple literal to add the variable inside the string
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=${APIKey}`
    console.log(url);
fetch(url).then(response => response.json())
.then( data => {

    //Collect from the object the
    console.log(data);
    let cityname = data.name;
    let temperature = data.main.temp;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;

    //fiveDayForCardEl.innerHTML="";
    var temp_para = document.createElement("p");
    temp_para.textContent="The current temperature is  "+temperature;
    var humidity_para =document.createElement("p");
    humidity_para.textContent="The current humidity is  "+humidity;
    var wind_para =document.createElement("p");
    wind_para.textContent="The current wind is  "+wind;
    var city_para =document.createElement("p");
    city_para.textContent="The city name is  "+cityname;
    //Before appending the new city, we empty the search
    city_header.innerHTML="";
    //We empty the details before appending the new search
    weather_details.innerHTML="";
    city_header.append(city_para);
    weather_details.append(temp_para,wind_para,humidity_para)
    //This has to match the data we want to fetch
 
    getForecast(cityname);
 })

}
//The search button will respond to the event listener
console.log(searchBtn)

//getCoordinates(); We dont need this

let getForecast = function(cityname){
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&units=metric&appid=${APIKey}`

fetch(url).then(response => response.json())
.then( data => { //CRITICAL SECTION
    console.log(data);
   ///Create a div container and change the innetHTML to the data and icon, temperature, etc.
   let datalist = data.list 
   let forecastdiv = document.getElementById("five-day-card-container")
   forecastdiv.innerHTML=""
   for (let i = 0; i < datalist.length; i+=8){
    let parentdiv = document.createElement("div")
    parentdiv.style.border="1px solid black"
    

    var temp_para = document.createElement("p");
    temp_para.textContent="The  temperature is  "+datalist[i].main.temp;
    var humidity_para =document.createElement("p");
    humidity_para.textContent="The humidity is  "+datalist[i].main.humidity;
    var wind_para =document.createElement("p");
    wind_para.textContent="The wind is  "+datalist[i].wind.speed;
  
    parentdiv.append(temp_para,humidity_para,wind_para)
    forecastdiv.append(parentdiv)
    console.log(forecastdiv)

   }
    //Append this to another HTML container
 })
}
searchBtn.addEventListener("click", getCoordinates);
//END OF CRITICAL SECTION
//SEE Week 6 09_Ins_Demo code



//Create element
//Line at the bottom


//navigator.geolocation.getCurrentPosition(gotPosition);




