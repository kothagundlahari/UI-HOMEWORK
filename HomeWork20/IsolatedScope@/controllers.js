
var app=angular.module('app', []);
app.controller('message', ['$scope', function($scope){
	$scope.a=10;
	$scope.b=20;
	$scope.p=30;
	$scope.q=40;

	
}]);
app.directive('message',function(){
	return{
			templateUrl:'some.htm',
			scope:{
				x:'@',
				y:'@',

			},
			
	};

});
app.directive('message2',function(){
	return{
			templateUrl:'some.htm',
			scope:{
				x:'@m',
				y:'@n',

			},
		
	};

});