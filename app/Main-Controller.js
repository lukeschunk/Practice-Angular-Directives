app.controller("mainController", ["$scope", "weatherService", function($scope, weatherService){
    $scope.test = "balls";
    $scope.getWeather = function(city) {
        return weatherService.getWeather(city)
        alert("invoked");
            
//            .then(function(response){
//            console.log("this is response from controller", response);
//        })
    }
    
    $scope.users = [
 {
   name: "Geoff McMammy",
   age: 43,
   email: "geofdude@gmail.com",
   city: "Provo"
 },
 {
   name: "Frederick Deeder",
   age: 26,
   email: "fredeed@gmail.com",
   city: "Austin"
 },
 {
   name: "Spencer Rentz",
   age: 35,
   email: "spencerrentz@gmail.com",
   city: "Sacramento"
 },
 {
   name: "Geddup Ngo",
   age: 43,
   email: "geddupngo@gmail.com",
   city: "Orlando"
 },
 {
   name: "Donst Opbie Leevin",
   age: 67,
   email: "gernee@gmail.com",
   city: "Phoenix"
 }
];
//    $scope.city = "provo";
    $scope.showMe = true;
    $scope.showMe2 = false;
    
//    $scope.getWeather($scope.city);
}]);