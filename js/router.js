presentation.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/index', {
        templateUrl: './templates/home.html',
        controller: 'homeController'
    }).otherwise({redirectTo: '/404'});
}]);