(function () {
    'use strict';
	var app = angular.module('ryanAirApp',["ui.router","ngTouch", "angucomplete-alt","720kb.datepicker"]);
	app.config(routeMapping);
	app.service('RyanAirService', ['$http',RyanAirService]);
	app.controller('ryanAirAppController',ryanAirAppController);
	app.controller('flightFinderController',flightFinderController);
	app.controller('routeMapsController',routeMapsController);
})();