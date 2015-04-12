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

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="react-0.13.1/build/react.js"></script>
    	<script src="react-0.13.1/build/JSXTransformer.js"></script>

    	<script type="text/jsx">

    	function submitLocation() {

    		var userResponse = document.getElementById('location-entry').value;

	    	React.render(<p> {userResponse} </p>,document.getElementById('response'));
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

		<input id="location-entry" name="location-entry" placeholder="Enter a city" type="text">
		<input type="button" onclick="submitLocation(); " value="Submit" />


		<div id="response">
		</div>

	</body>

</html>