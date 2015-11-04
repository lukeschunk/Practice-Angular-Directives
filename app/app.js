var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider){
    
    
    $stateProvider
    
        .state('home', {
            url: '/',
            templateUrl: 'home-template.html',
            controller: 'mainController'
        })
    
    $urlRouterProvider.otherwise('/');
    
});
