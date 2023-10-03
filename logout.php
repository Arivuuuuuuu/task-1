<?php





session_start();

// Check if the user is logged in (i.e., session variable is set)
if (isset($_SESSION['id'])) {
    // Unset all of the session variables
    session_unset();

    // Destroy the session
    session_destroy();


    //require 'config.php';
    //if(!empty($_SESSION ["id"])){
    //session_unset();
    //session_destroy();
    //header("location:login.php");
//}

}

// Redirect the user to the login page or any other appropriate page
header("location: login.php");
exit;
?>











