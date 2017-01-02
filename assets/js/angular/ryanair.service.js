function RyanAirService($http){
	var self = this;
	self.notificationSubscribers={};
	self.language = 'en';
	self.EmptyObject = {};

    self.hasFlightsData = function(){
        return (self.flightsData == self.EmptyObject || typeof(self.flightsData) == 'undefined') ? false : true;
    };

	self.hasContextData = function(){
		return (self.contextData == self.EmptyObject || typeof(self.contextData) == 'undefined') ? false : true;
	};

	self.hasIATAData = function(){
		return (self.IATAData == self.EmptyObject || typeof(self.IATAData) == 'undefined') ? false : true;
	};

    self.awaitUpdate=function(key,callback){
        self.notificationSubscribers[key]=callback;
    };
    self.notifySubscribers=function(){
        angular.forEach(self.notificationSubscribers,
            function(callback,key){
                callback();
            });
    };

    self.searchFlights = function(obj){
        var url = 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/'+obj.from.description
            +'/to/'+obj.to.description+'/'+obj.depart+'/'+obj.return+'/250/unique/?limit=15&offset-0';
        $http.get(url).then(function(response){
            self.flightsData = response.data;
            self.notifySubscribers();
        },function(error,state){
            self.flightsData.error = error;
        });
    };

    self.changeLanguage = function(lang){
    	self.language = lang;
    	$http.get(self.language+'.json').then(function(response){
    		self.contextData = response.data;
    		self.notifySubscribers();
    	});
    };
    self.getFlightsData = function(){
        if(self.hasFlightsData()){
            return self.flightsData;
        }else{
            return [];
        }
    };
    self.getIATAData = function(scope){
    	if(self.hasIATAData()){
    		return self.IATAData[scope];
    	}else{
    		self.downloadIATAData();
    	}
    };
    self.getContextData = function(context){
    	if(self.hasContextData()){
    		return self.contextData[context];
    	}else{
    		self.downloadContextData();
    	}
    };
    self.cleanData = function(data,defaultVal){
    	if(typeof(data) === 'undefined')
    		data = defaultVal;
    	return data;
    };
    self.downloadIATAData = function(){
	    $http.get('https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/').then(
	        function(response){
	            self.IATAData =response.data;
	            self.notifySubscribers();
                if(typeof(self.pendingmaploading) != 'undefined' && (self.pendingmaploading == true)){
                    self.setupRouteMaps();
                }
	        }
	    );
	};

    self.downloadContextData = function(){
	    $http.get(self.language+'.json').then(function(response){
	    		self.contextData = response.data;
	    		self.notifySubscribers();
    	});
	};

    self.setupRouteMaps = function(){
        if(self.hasIATAData()){
            /**
            * SVG path for target icon
            */
            var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
            /**
             * SVG path for plane icon
             */
            var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
            /**
             * Create the map
             */
            var latitudeArr = [];
            var longitudeArr = [];
            var imgArr = [];
            for(var i=0;i<self.IATAData.airports.length;i++){
                let tempData = self.IATAData.airports[i];
                latitudeArr.push(tempData.latitude);
                longitudeArr.push(tempData.longitude);
                imgArr.push({
                    "svgPath": targetSVG,
                    "title": tempData.name,
                    "latitude": tempData.latitude,
                    "longitude": tempData.longitude
                });
            }
            imgArr.push({
                "svgPath": planeSVG,
                "positionOnLine": 0,
                "color": "#0000FF",
                "animateAlongLine": true,
                "lineId": "line1",
                "flipDirection": true,
                "loop": true,
                "scale": 0.03,
                "positionScale": 1.8
            });
            var dataProvider = {
                "map": "worldLow",
                "zoomLevel": 3.5,
                "zoomLongitude": 7.55,
                "zoomLatitude": 47.55,
                 "lines": 
                 [ 
                    {
                        "id": "line1",
                        "arc": -0.85,
                        "alpha": 0.3,
                        "latitudes": latitudeArr,
                        "longitudes": longitudeArr
                    }
                ],
                "images": imgArr
            };
            var areasSettings = { "unlistedAreasColor": "#8dd9ef" };
            var imagesSettings = {
                "color": "#FF0000",
                "rollOverColor": "#585869",
                "selectedColor": "#585869",
                "pauseDuration": 0.2,
                "animationDuration": 4.5,
                "adjustAnimationSpeed": true
            };
            var linesSettings = {"color": "#585869", "alpha": 0.4};
            var exportObj = {"enabled":false};
            var mapConfig = {
                "type": "map",
                "theme": "light",
                "dataProvider": dataProvider,
                "areasSettings": areasSettings,
                "imagesSettings": imagesSettings,
                "linesSettings":linesSettings ,
                "export": exportObj

            };
            console.log(mapConfig);
            var map = AmCharts.makeChart( "mapDiv", mapConfig);
            self.pendingmaploading = false;
        }else{
            self.pendingmaploading = true;
            self.downloadIATAData();
        }
    };

	//1st call to get IATA data
	self.downloadIATAData();
	//1st call to get data
	self.downloadContextData();
}
