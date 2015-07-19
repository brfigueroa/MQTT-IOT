var app = angular.module('app', []);

app.controller('UbiGeoCrtl', function($scope, $http) {
	
	
	$http.get('/data/subs.json').success(function(data) {
			$scope.dptos= data;
			$scope.dpto=data[0].coddep;
			$scope.cargarProv();
		});
	$scope.cargarProv = function() {
		$http.get('/data/pub.json')
			 .success(function(data) {
				$scope.provs = data;
				$scope.prov = data[0].codpro;

			//	$scope.cargarDist();
		});
	};
});