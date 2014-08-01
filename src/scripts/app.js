"use strict";

var appModule = angular.module('app',['ngRoute']);

appModule.config('$routeProvider',function($routeProvider){
	$routeProvider.when('/view1',
		templateUrl:'views/index_p1.html',
		controller:'indexP1')
	.when('/view2',
		templateUrl:'views/index_p2.html',
		controller:'indexP2')
	.otherwise({
		redirectTo:'/view1'
	});
});

function indexP1($scope){
	debugger;
}

function indexP2($scope){
	debugger;
}
