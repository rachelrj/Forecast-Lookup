//Use weather underground api to populate autocomplete options
function autoCompleteFunction() {

	$.ajax({
				url : 'http://autocomplete.wunderground.com/aq',
				dataType: "jsonp", 
				jsonp:    "cb",
    			data:     {
        			format: "json",
        			query:  $( '#location-entry').val()
    			},
    			success:  function (data) {
        			
        			var returnedLocations = [];
        			for (i in data.RESULTS) {
        				returnedLocations.push(data.RESULTS[i].name);
        			}
        			$( "#location-entry" ).autocomplete({
						source: returnedLocations
					});
    			}
    });
};

//get weather from user's query with wunderground forecast api method
function getWeather(q) {

    $.ajax({
                url : 'http://api.wunderground.com/api/362c5ac3fc63dd76/forecast' + q,
                dataType: "json",
                jsonp:    "cb",
                data:       {
                    format: "json",
                },
                success:  function (data) {
                    //store weather                    
                    var date = [];
                    var weather = [];
                    var description = [];
                    for (i in data.forecast.txt_forecast.forecastday) {
                        date.push(data.forecast.txt_forecast.forecastday[i].title);
                        weather.push(data.forecast.txt_forecast.forecastday[i].icon);
                        description.push(data.forecast.txt_forecast.forecastday[i].fcttext);
                    }
                    //print weather to page
                    for(i = 0; i < 8; i++)
                    {
                        $('<h2>'+ date[i] + '</h2>').appendTo('#response');
                        $('<p>' + description[i] + '</p>').appendTo('#response');
                    }
                    var forecast = React.createElement(Forecast, {dates: date, weathers: weather, descriptions: description});
                    React.render(forecast, document.getElementById("response"));
                }
    });
};

function submitLocation() {

    //remove previous response
    $( "#response" ).empty();

    //get query from autocomplete api
    $.ajax({
                url : 'http://autocomplete.wunderground.com/aq',
                dataType: "jsonp", 
                jsonp:    "cb",
                data:     {
                    format: "json",
                    query:  $( '#location-entry').val()
                },
                success:  function (data) {
                        getWeather(data.RESULTS[0].l + '.json');
                }
    });
};