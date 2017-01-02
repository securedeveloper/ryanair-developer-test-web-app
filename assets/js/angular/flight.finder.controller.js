function flightFinderController(RyanAirService,$scope,$http){
	var self = this;
	self.airports = RyanAirService.hasIATAData() ? RyanAirService.getIATAData('airports') : [];
	self.context = RyanAirService.hasContextData() ? RyanAirService.getContextData('flightFinder') : {};
	self.results = RyanAirService.getFlightsData();
	RyanAirService.awaitUpdate('flightFinderController',function(){
    	self.airports = RyanAirService.getIATAData('airports');
    	self.context = RyanAirService.getContextData('flightFinder');
    	if(typeof(self.error) == 'string'){
    		self.error = self.context.error;
    	}
    	if(RyanAirService.hasFlightsData()){
    		console.log('found flights result');
    		self.error = false;
			self.searchMode = false;
			self.resultMode = true;
			self.results = RyanAirService.getFlightsData();
			if(self.resultMode && self.results.flights.length < 1){
				self.noResults = true;
			}else{
				self.noResults = false;
			}
    	}
	});
	var today = new Date();
	self.minDateDepart = today.toString();
	self.maxDateDepart = new Date(today.getFullYear()+1,today.getMonth(),today.getDate()).toString();
	self.minDateReturn = today.toString();
	self.maxDateReturn = new Date(today.getFullYear()+1,today.getMonth(),today.getDate()).toString();
	$scope.$watch('flightFinderCtrl.depart', function (newDate, oldDate) {
		if(typeof(newDate) != 'undefined'){
			var dt = new Date(newDate);
			if(typeof(dt) != 'undefined' && dt.valid()){
				self.minDateReturn = dt.toString();
			}else{
				if(typeof(oldDate) != 'undefined')
					self.depart = oldDate;
				else
					self.depart = '';
				self.minDateReturn = new Date().toString();
			}
		}
  	}, true);

  	$scope.$watch('flightFinderCtrl.return', function (newDate, oldDate) {
		if(typeof(newDate) != 'undefined'){
			var dt = new Date(newDate);
			if(typeof(dt) != 'undefined' && dt.valid()){
				self.maxDateDepart = dt.toString();
			}else{
				if(typeof(oldDate) != 'undefined')
					self.return = oldDate;
				else
					self.return = '';
				self.maxDateDepart = new Date(today.getFullYear()+1,today.getMonth(),today.getDate()).toString();
			}
		}
  	}, true);


  	$scope.$watch('flightFinderCtrl.airportTo', function (newVal, oldVal) {
		if(typeof(newVal) != 'undefined'){
			if(typeof(self.airportFrom) != 'undefined'){
				if(self.airportFrom.title == newVal.title){
					self.airportTo = {};
				}
			}
		}
  	}, true);


  	$scope.$watch('flightFinderCtrl.airportFrom', function (newVal, oldVal) {
		if(typeof(newVal) != 'undefined'){
			if(typeof(self.airportTo) != 'undefined'){
				if(self.airportTo.title == newVal.title){
					self.airportFrom = {};
				}
			}
		}
  	}, true);


  	self.isValidQuery = function(obj){
		return (
			(typeof(obj.from) != 'undefined') && (typeof(obj.from.description) != 'undefined') && (obj.from.description.length == 3) &&
			(typeof(obj.to) != 'undefined') && (typeof(obj.to.description) != 'undefined') && (obj.to.description.length == 3) && 
			(typeof(obj.depart) != 'undefined') && (typeof(obj.return) != 'undefined')
		);
	};

  	self.searchFlights = function(){
  		var requestObject = {
  			from : self.airportFrom,
  			to : self.airportTo,
  			depart : self.depart,
  			return : self.return
  		};
  		if(self.isValidQuery(requestObject)){
  			self.searchMode = true;
  			self.error = false;
  			RyanAirService.searchFlights(requestObject);
  		}else{
  			self.searchMode = false;
  			self.error = self.context.error+"";
  			self.resultMode = false;
  		}
  	};

}



Date.prototype.valid = function() {
  return isFinite(this);
}