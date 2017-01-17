var app = angular.module('lmApp',[])
.controller('lmCtrl',function($scope){
	// $scope.urltop = 'resources/nav.html';
	// $scope.urlcotop = 'resources/nav_copartner.html';
	$scope.urlfooter = 'resources/tabbar.html';
})
// .config(['$routeProvider',function($routeProvider){
// 	$routeProvider
// 	.when('/',{
// 		templateUrl:'../home.html',
// 	})
// 	.when('/home',{
// 		templateUrl:'../home.html',
// 	})
// 	.when('/statement',{
// 		templateUrl:'../statement.html',
// 	})
// 	.when('/makeMoney',{
// 		templateUrl:'../makeMoney/box.html',
// 	})
// 	.when('/Settlement',{
// 		templateUrl:'../Settlement.html',
// 	})
// 	.when('/user',{
// 		templateUrl:'../my/user.html',
// 		controller:'userCtrl'
// 	})
// 	.otherwise({
// 		redirectTo:'../my/user.html',
// 		controller:'userCtrl'
// 	})
// }])
//
// .controller('userCtrl',function($scope , $route){
// 	$scope.$route = $route;
//
// })
