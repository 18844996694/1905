<?php
require "conn.php";
if(isset($_GET['picd'])){
    $sid=$_GET['picd'];
    $result=$conn->query("select * from market where picd=$sid ");
    echo json_encode($result->fetch_assoc());

}