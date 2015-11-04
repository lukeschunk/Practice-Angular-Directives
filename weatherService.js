app.service('weatherService', function($http, $q){
    this.getWeather = function(city) {
        var myPromise = $q.defer();
        var city; 
        
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=f40a9aee437dd4863d00f7282f60556a'
        }).then(function(response){
            console.log(response);
            
            var tempKelv = response.data.main.temp;
            var temp = (tempKelv * (9/5)) - 460;
            
            var windspeed = response.data.wind.speed;

            var humidity = response.data.main.humidity;
            
            var myWeatherObj = {
                windspeed: windspeed,
                temp: temp,
                humidity: humidity
            }
            
            
            
            myPromise.resolve(myWeatherObj);
        })
     
        return myPromise.promise;
    } 
    
})