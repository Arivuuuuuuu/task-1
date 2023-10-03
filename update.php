<?php
 
//include 'connect.php';


//if(!empty($_SESSION["id"])){
   // header("location:welcome.php");
   //<input type="hidden" id="id" name="id"  value="<?php echo $username;

$conn=mysqli_connect("localhost","root","","checking");;
//}
$id=$_GET['id'];

$sql = "SELECT * FROM `checking_db` WHERE id=$id";
$result = mysqli_query($conn, $sql);

if (!$result) {
    die(mysqli_error($conn)); // Print the MySQL error message
}

$row = mysqli_fetch_assoc($result);



//$sql="SELECT * FROM `checking` WHERE id=$id";
//$result=mysqli_query($conn,$sql);
//$row=mysqli_fetch_assoc($result);

$username=$row['username'];
$password=$row['password'];
$cpassword=$row['cpassword'];
$mail=$row['mail'];
$number=$row['number'];
?>







<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Update</title>
        <link rel="stylesheet" href="update.css">
        
    </head>
    <body>
        <div class="container">
            <form name="" id="exam" method="POST" action="connect.php" >
                <h1>Update details</h1>

           

            <div class="input-group">
                <label>Username</label>
                <input type="text" id="username" name="username" value="<?php echo $username;?>"  placeholder="Alphabets only" pattern="[A-Za-z]+">
                <input type="hidden" id="id" name="id"  value="<?php echo $id;?>">
                
                <div class="error"></div>
            </div>

            <div class="input-group">
                <label>Password</label>
                <input type="password" id="password" name="password" value="<?php echo $password;?>" placeholder="Enter your password">
                <div class="error"></div>
            </div>

            <div class="input-group">
                <label>Confirm Password</label>
                <input type="password" id="cpassword" name="cpassword" value="<?php echo $cpassword;?>" placeholder="Confirm your password">
                <div class="error"></div>
            </div>

            <div class="input-group">
                <label>E-mail</label>
                <input type="text" id="mail" name="mail" value="<?php echo $mail;?>" placeholder="email@gmail.com">
                <div class="error"></div>
            </div>

            <div class="input-group">
                <label>Contact-number</label>
                <input type="text" id="number" name="number" value="<?php echo $number;?>" placeholder="Enter up to 10 numbers" pattern="[0-9]+">
                <div class="error"></div>
            </div>

            <input class="design" type="submit" value="submit">
            </form>
        </div>
    <script src="update.js"></script>
    </body>
</html>

