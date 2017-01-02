function routeMapping($stateProvider,$urlMatcherFactoryProvider,$urlRouterProvider,$locationProvider){
	$urlRouterProvider.otherwise("/flight-finder");
	$urlMatcherFactoryProvider.caseInsensitive(true);
	$stateProvider
	.state("flight-finder",{
		url : "/flight-finder",
		templateUrl : "templates/flightFinder.html",
		controller : "flightFinderController",
		controllerAs : "flightFinderCtrl",
	})
	.state("route-maps",{
		url : "/route-maps",
		templateUrl : "templates/routeMaps.html",
		controller : "routeMapsController",
		controllerAs : "routeMapsCtrl"
	})
	$locationProvider.html5Mode(true);
}