<?php
$conn=mysqli_connect('localhost','root','','login_db');

if($mysqli->connect_error)
{
    die('Connection failed: '.$mysqli->connect_error);
}
if(isset($_POST['send']))
{
    $email=$_POST['email'];
    $password=$_POST['password'];

$query="INSERT INTO users(username,pass_word) VALUES ('$email','$password')";
mysqli_query($conn,$query);
header('location:home.php');
}
else{
    echo 'something went wrong try again';
 }
?>