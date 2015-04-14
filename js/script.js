//Use weather underground api to populate autocomplete options
function autoCompleteFunction() {

	var userResponse = $( '#location-entry').val();
	var returnedLocations = [];

	$.ajax({
				url : 'http://autocomplete.wunderground.com/aq',
				dataType: "jsonp", 
				jsonp:    "cb",
    			data:     {
        			format: "json",
        			query:  userResponse
    			},
    			success:  function (data) {
        			var i;
        			var returnedLocations = [];
        			for (i in data.RESULTS) {
        				returnedLocations.push(data.RESULTS[i].name);
        			}
        			$( "#location-entry" ).autocomplete({
						source: returnedLocations,
						delay: 500
					});
    			}
});

};