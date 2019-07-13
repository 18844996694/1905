<?php
require "conn.php";
// echo "123";
if(isset($_POST['name'])){//判断用户名是否存在
    $name=$_POST['name'];
    $result=$conn->query("select * from person where name='$name'");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}
if(isset($_POST['submit'])){//判断是否点击提交按钮
    $name=$_POST['username'];
    $password=sha1($_POST['password']);
    $number=$_POST['number'];
    $conn->query("insert person values('$name','$password',NOW())");//若数据库没有则存放到数据库
   header('location:http://10.31.158.47/360market/1905/src/login.html');//跳转到登录页面
}