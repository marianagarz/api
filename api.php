<?php
	session_start();
	// create curl resource
	$ch = curl_init();

	// set url
	curl_setopt($ch, CURLOPT_URL, "api.kanye.rest");

	//return the transfer as a string
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	// $output contains the output string
	$output = curl_exec($ch);

	echo $output;
	// close curl resource to free up system resources
	curl_close($ch);     
	

	

	
?>