weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
     $scope.city = cityService.city;  
                                         
     $scope.$watch('city', function() {
        cityService.city = $scope.city;
      });
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService) {
     $scope.city = cityService.city;
    
     $scope.weatherAPI = $resource("https://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
    
     $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, APPID: "2266b7df37f6ab8b824b994fa8357d45"});
        
     $scope.convertToFahrenheit = function(degK) {
         return Math.round((1.8 * (degK - 273)) + 32);
     }
     
     $scope.convertToDate = function(dt) {
         
         return new Date(dt * 1000);
     }
}]);
