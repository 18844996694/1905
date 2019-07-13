!(function($){
    const $titlesli=$('.titles li');
    const $title=$('.title');
    const $username=$('#username');
    const $password=$('#password');
    const $btn=$('.btn');
    $titlesli.on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $title.eq($(this).index()).removeClass('hide').siblings().addClass('hide');
    });
    $btn.on('click',function(){
        $.ajax({
            type:'post',
            url:'http://10.31.158.47/360market/1905/php/login.php',
            data:{
                name:$username.val(),
                password:$password.val()
            },
            success:function(data){
                if(data){
                    setcookie('username',$username.val());//本地存储记住用户名
                    setcookie('password',$password.val());//本地存储记住密码
                    location.href='http://10.31.158.47/360market/1905/src/index.html';
                }else{
                    alert('用户名或密码错误');
                    username.val('');
                    password.val('');
                }
            }
        });
    });
})(jQuery);