app.directive('dirWeather', function(){
    
    return {
        templateUrl: 'dirWeather.html',
        scope: {
            currentUser: '=',
            weatherCall: '&'

        },
        controller: function($scope) {
            $scope.weatherCall({
                city: $scope.currentUser.city
            }).then(function(response){
                $scope.windspeed = response.windspeed;
                $scope.temp = response.temp;
                $scope.humidity = response.humidity;
            })
            
        }
        
    }
    
})