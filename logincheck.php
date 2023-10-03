<?php
session_start();
$conn=mysqli_connect("localhost","root","","checking");


if(!empty($_SESSION["id"])){
  header("location:welcome.php");
}

  $mail=$_POST["mail"];
  $password=$_POST["password"];
  echo $mail;
  $result=mysqli_query($conn,"SELECT * FROM checking_db WHERE mail='".$mail."' AND password ='".$password."'");
  
  $row=mysqli_fetch_assoc($result);
  if(mysqli_num_rows($result)!=0){
    if($password == $row["password"]){
      $_SESSION["login"]=true;
      $_SESSION["id"]=$row["id"];
      echo
      "<script> alert('logged in');</script>";
      header("location:welcome.php");
    }
    else{
      echo
      "<script> alert('wrong password');</script>";
    }
  }
  else{
    echo
    "<script> alert('user not registered');</script>";
  }


?>