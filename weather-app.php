<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
 		<title>Weather Lookup | Rachel R Joyce</title>

		<meta HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1">
		<meta name="Author" content="Rachel R Joyce">
		<meta http-equiv="Content-Language" content="en-us">
		<meta NAME="GOOGLEBOT" CONTENT="INDEX, FOLLOW">
		<meta name="robots" content="all, index, follow">
		<meta name="rating" content="general">
		<meta name="viewport" content="initial-scale=1">

		<!--Jquery-->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<!--Jquery AutoComplete-->
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  		<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
  		<script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  		<!--React-->
		<script src="react-0.13.1/build/react.js"></script>
    	<script src="react-0.13.1/build/JSXTransformer.js"></script>
    	<!--My Stylesheet-->
    	<link rel="stylesheet" type="text/css" href="stylesheet.css">

    	<script>
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
  		</script>

    	<script type="text/jsx">

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
	    	React.render(<p> {url} </p>,document.getElementById('response'));
	    }
    	</script>

	</head>

	<body>

		<h1>
			Weather Lookup
		</h1>

		<p> 
			Please enter your location below to lookup the weather in your city
		</p>
			<div class="ui-widget">
				<input id="location-entry" name="location-entry" placeholder="Enter a city" type="text">
				<input type="button" onclick="submitLocation(); " value="Submit" />
			</div>
		<div id="response">
		</div>

	</body>

</html>