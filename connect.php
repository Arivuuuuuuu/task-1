<?php


session_start();
$conn=mysqli_connect("localhost","root","","checking");


    // Retrieve data from the form
    $id=$_POST['id'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];
    $mail = $_POST['mail'];
    $number = $_POST['number'];

/*if(isset($_POST["submit"])){
    $id =$_POST['id'];
    $username=$_POST['username'];
    $password=$_POST['password'];
    $cpassword=$_POST['cpassword'];
    $mail =$_POST['mail'];
    $number =$_POST['number'];

    */

  
    //$delete=mysqli_query($conn,"DELETE FROM `checking_db` WHERE `id`='$id'");


    $updateQuery = "UPDATE `checking_db` SET 
        `username`='$username',
        `password`='$password',
        `cpassword`='$cpassword',
        `mail`='$mail',
        `number`='$number'
        WHERE `id`='$id'";


    if (mysqli_query($conn, $updateQuery)) {
        echo "Record updated successfully";
        header("location:welcome.php");
        exit();
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }





//$select="SELECT * FROM checking_db";
//$query=mysqli_query($conn,$select);


?>
