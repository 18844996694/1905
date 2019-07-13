<?php
include "conn.php";
if(isset($_POST['name']) && isset($_POST['password'])){//判断用户名和密码是否存在
    $name=$_POST['name'];
    $password=sha1($_POST['password']);
    $result=$conn->query("select * from person where name='$name' and password='$password'");
    if($result->fetch_assoc()){//若在数据库匹配到用户名和密码则返回值给前段
        echo true;
    }else{
        echo false;
    }
}