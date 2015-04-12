//Autocomplete function
$(function() {
	var returnedLocations = [
			"ActionScript",
			"AppleScript",
			"Asp",
			"BASIC",
			"C",
			"C++",
			"Clojure",
			"COBOL",
			"ColdFusion",
			"Erlang",
			"Fortran",
			"Groovy",
			"Haskell",
			"Java",
			"JavaScript",
			"Lisp",
			"Perl",
			"PHP",
			"Python",
			"Ruby",
			"Scala",
			"Scheme"
		];
	$( "#location-entry" ).autocomplete({
		source: returnedLocations
	});
});

//Call wunderground autocomplete API with user's entry
function submitLocation() {

	var userResponse = document.getElementById('location-entry').value;
	var url = 'http://autocomplete.wunderground.com/aq?query=' + userResponse

/* Get autocomplete responses and */
/*				$.ajax({
				url : url,
				dataType : "jsonp",
				success : function(parsed_json) {
				var location = parsed_json['location']['city'];
				var temp_f = parsed_json['current_observation']['temp_f'];
				alert("Current temperature in " + location + " is: " + temp_f);
				}
			});
*/
	React.render('<p> {url} </p>',document.getElementById('response'));
}