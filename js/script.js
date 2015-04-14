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
						source: returnedLocations,
						delay: 500
					});
    			}
});

};