app.directive('dirDisplay', function () {

    return {
        templateUrl: 'first-directive-template.html',
            
        link: function (scope, element, attributes) {
//            ______________THis is Logging the Three Params __________________________________________
            
            element.on('click', function(){
                console.log("i was just clicked");
                scope.showMe = !scope.showMe;
                scope.showMe2 = !scope.showMe2;
                scope.$apply();
            });
            
            
            
        }
    };


});