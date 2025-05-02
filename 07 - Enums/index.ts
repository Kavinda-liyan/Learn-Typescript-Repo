//Enum is way to define set of named constants.

//defining enums
enum weather{
    sunny,
    cloudy,
    rainy,
    snowy
}


//using enums
const currentWeather=weather.sunny;
console.log('The currunt Weather is',currentWeather); //this will output 0

enum weatherForecast{
    Sunny="Sunny",
    Cloudy="Cloudy",
    Rainy="Rainy",
    Snowy="Snowy"
}

const currentWeatherForecast=weatherForecast.Sunny;
console.log("The Currunt Weather Forecast:",currentWeatherForecast);