var app = angular.module("sample app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    
    .when("/home", {
        templateUrl : "templates/home.html"
    })
    .when("/about", {
        templateUrl : "templates/about.html"
    })
    .when("/contact", {
        templateUrl : "templates/contact.html"
    });
});
app.controller('myController',['$scope',function($scope){
    //alert(hai)
    $scope.hello=function(){
        alert($scope.name)
    };
}]);