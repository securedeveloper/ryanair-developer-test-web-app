function routeMapsController(RyanAirService){
	var self = this;
	self.context = {};
	self.airports = RyanAirService.hasIATAData() ? RyanAirService.getIATAData('airports') : [];
	RyanAirService.awaitUpdate('routeMapsController',function(){
		self.airports = RyanAirService.getIATAData('airports');
    	self.context = RyanAirService.getContextData('routeMaps');
	});
	RyanAirService.setupRouteMaps();
}