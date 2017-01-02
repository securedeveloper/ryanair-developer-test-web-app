function ryanAirAppController(RyanAirService){
	var self = this;
	self.context = {};
	self.changeLanguage = function(lang){
		RyanAirService.changeLanguage(lang);
	};
	self.getFlagSrc = function(lang){
		if(lang == RyanAirService.language){
			return 'assets/images/languages/'+lang+'.png';
		}else{
			return 'assets/images/languages/'+lang+'-disabled.png';
		}
	};
	RyanAirService.awaitUpdate('ryanAirAppController',function(){
    	self.context = RyanAirService.getContextData('main');
	});

}