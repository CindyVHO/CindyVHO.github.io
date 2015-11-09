presentation.controller('menuCtrl', ['$scope', '$log', '$location', function($scope, $log, $location){
    $scope.redirect = function(where){
 		$location.path( where );
    }
}]);