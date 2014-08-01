var aMailServices = angular.module('app',['ngRoute']);
function emailRouteConfig($routeProvider){
	$routeProvider.when('/',{
		controller:ListController,
		templateUrl:'views/list.html'
	})
	.when('/view/:id',{
		controller:DetailController,
		templateUrl:'views/detail.html'
	})
	.otherwise({
		redirectTo:"/"
	});
}
aMailServices.config(emailRouteConfig);
var messages = [
	{id:0,sender:'abc@abc.com',
	subject:"Hi there,old friend0",
	date:'Dec 7,2014 12:32:00',
	recipients:['abcs@abcs.com'],
	message:'Hey ,hello world!'},

	{id:1,sender:'bbc@abc.com',
	subject:"Hi there,old friend1",
	date:'Dec 7,2014 12:32:00',
	recipients:['abcs@abcs.com'],
	message:'Hey ,hello world!'},

	{id:2,sender:'cbc@abc.com',
	subject:"Hi there,old friend2",
	date:'Dec 7,2014 12:32:00',
	recipients:['abcs@abcs.com'],
	message:'Hey ,hello world!'}
];

function ListController($scope){
	$scope.messages=messages;
	$scope.forms = [
		{name:'name',type:'text'},
		{name:'pws',type:'password'},
		{name:'url',type:'url'},
		{name:'email',type:'email'},
		{name:'age',type:'number'},
		{name:'submit',type:'submit'}
	];
}

function DetailController($scope,$routeParams){
	$scope.message = messages[$routeParams.id];
}
