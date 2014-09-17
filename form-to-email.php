<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$project = $_POST['project'];
$pages = $_POST['pages'];
$deadline = $_POST['deadline'];
$budget = $_POST['budget'];
$name = $_POST['name'];
$vemail = $_POST['email'];
$text = $_POST['text'];

//Validate first
if(empty($name)||empty($vemail)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($vemail))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'franllull@gmail.com';//<== update the email address
$email_subject = "franllull.com website form";
$email_body = "You have received a new message from the user $name.\n".
    "His project is about: $project.\n".
    "Pages: $pages.\n".
    "His deadline is: $deadline.\n".
    "Budget: $budget.\n".
    "Here is the message:\n $text".
    
$to = "franllull@gmail.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $vemail \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: your-project-success.html');

// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 