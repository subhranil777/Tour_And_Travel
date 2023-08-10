<?php
 $conn=mysqli_connect('localhost','root','','booking_db');

 if(isset($_POST['send'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $address=$_POST['address'];
    $location=$_POST['location'];
    $guests=$_POST['guests'];
    $arrival=$_POST['arrival'];
    $depart_on=$_POST['depart_on'];

    $request= "insert into booking_form(name,email,phone,address,location,guests,arrivals,depart_on) values
     ('$name','$email','$phone','$address','$location','$guests','$arrival','$depart_on')";

     mysqli_query($conn,$request);

     header('location:book.php');
 }
 else{
    echo 'something went wrong try again';
 }
?>