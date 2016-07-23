<?php 

if (isset($_POST['email'])) {

	// Vairables storing the information
	$email_to = 'nirmit.001@gmail.com';
	$email_subject = 'website contact form';

	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];
	$comment = $_POST['comment'];

	$errorMessage = "";

	$expectedEmail = "/^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/";
	$expectedName = "/^[^0-9][A-z0-9_]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/";


	// error code 
	function died ($error) {

		echo "There seems to be error(s) with the form you submitted.  <br>";
		echo "Here are the error(s): <br/>";
		echo $error . "<br><br>";
		die();

	}

	// validation
	if (!isset($_POST['firstName']) || !isset($_POST['lastName']) || !isset($_POST['email']) || !isset($_POST['comment'])) {
		died('One of field is missing the infomration!');
	} 



	if (preg_match($expectedEmail, $email)) {
	 	$errorMessage .= " - Email is not valid. <br/>";
	}

	if (preg_match($expectedName, $firstName)) {
		$errorMessage .= " - First name does not seem to be realistic! <br/>";
	}

	if (preg_match($expectedName, $lastName)) {
		$errorMessage .= " - Last name does not seem to be realistic! <br/>";
	}

	//echo "hi";
	if (strlen($errorMessage) > 0) {
		died ($errorMessage);
	} 

	$errorMessage = "Form details Below. \n\n"; 

	// compose headers
	$headers = "From: $email\r\n";
	$headers .= "Reply-To: $email_to\r\n";
	$headers .= "X-Mailer: PHP/".phpversion();

	$errorMessage .= "Hello,\n"; 
	$errorMessage .= "My name is $firstName $lastName. Here is my information: \n";
	$errorMessage .= "email: $email";
	$errorMessage .= "$comment"; 

	mail($email_to, $email_subject, $errorMessage, $headers);

	}
?> 

<!DOCTYPE html>

<html>
	<head>
		<title>Contact</title>

		<link 
			rel="stylesheet" 
			href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
			integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

		<!-- Optional theme -->
		<link 
			rel="stylesheet" 
			href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

		<link rel="stylesheet" type="text/css" href="contact.css">

	</head>


	<body>
		<header class="heading">
	
			<ul class="tabs nav nav-tabs">
				 <li role="presentation"><a href="index.html">Home</a></li>
				 <li role="presentation"><a href="AmazingMaze.html">Projects</a></li>
				 <li role="presentation"><a href="#">Resume</a></li>
				 <li role="presentation" class="active"><a href="#">Contact</a></li>
			</ul>

		</header>

		<div class="contactBox"> 
			<form action"contactInfo.php" method="post">
				<fieldset>
					<h2>Contact Me!</h2>

					<div class="names">
					<label class="name" for="name">Name: </label>
					<input name="firstName"></input>
					<input name="lastName"></input>
		</div>
					<label class="email" for="email">E-mail: </label>
					<input name="email"></input>	

					<label class="comment" for="comment">Comment: </label>	
					<textarea name="comment"></textarea>

				</fieldset>

				<fieldset>
					<input class="btn btn-primary" type="submit" value="Send"></input>
					<input class="btn btn-primary" type="reset" value="Reset"></input>

				</fieldset>

			</form>
				
		</div>


		<!-- jQuesry and bootstrap extensions  -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

		<script 
			src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous">	
		</script>
	</body>
</html>
