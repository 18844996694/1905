!(function ($) {
    const $username = $('#username');
    const $spanid = $('#spanid');
    const $submit = $('#submit');
    const $number = $('#number');//input
    const $numspan = $('.numspan');//报错的sapn
    const $em = $('.ems');//换一张
    const $rannum = $('.rannum');//验证码
    const $password = $('.password');
    const $passspan = $('.passspan');
    let $flag = true;
    //用户名验证
    $username.focus(function () {
        $spanid[0].innerHTML = '用户名不能为空';
        $spanid.css('color', 'orange');
    });
    $username.blur(function () {
        if ($(this).val() != '') {
            var reg = /^1[3|5|7|8]\d{9}$/;
            if (reg.test($(this).val())) {
                $spanid.innerHTML = '√';
                $spanid.css('color', 'green');
                $flag = true;
            } else {
                $spanid.innerHTML = '输入有误';
                $spanid.css('color', 'red');
                $flag = false;
            }
        } else {
            $spanid[0].innerHTML = '请输入手机号码';
            $spanid.css('color', 'red');
            $flag = false;
        }
        $.ajax({
            type: 'post',
            url: 'http://10.31.158.47/360market/1905/php/registor.php',
            data: {
                name: $username.val()
            },
            success: function (data) {
                console.log(data);
                if (!data) {
                    $spanid[0].innerHTML = '欢迎注册';
                    $spanid.css('color', 'green');
                    $flag = true;
                } else {
                    $spanid[0].innerHTML = '用户名已存在';
                    $spanid.css('color', 'red');
                    $flag = false;
                }
            }
        });
    });
    //验证码验证
    $number.blur(function () {
        if ($(this).val() != '') {
            if ($number.val() == $rannum[0].innerHTML) {
                $numspan[0].innerHTML = '√';
                $numspan.css('color', 'green');
            } else {
                $numspan[0].innerHTML = '验证码错误';
                $numspan.css('color', 'red');
            }
        } else {
            $numspan[0].innerHTML = '图片验证码不能为空';
            $numspan.css('color', 'red');
        }
    })
    $em.on('click', function () {
        $rannum[0].innerHTML = '';
        var arr = [];
        for (var i = 48; i <= 57; i++) {
            arr.push(String.fromCharCode(i));
        }
        // console.log(arr[0]);
        for (var i = 97; i <= 122; i++) {
            arr.push(String.fromCharCode(i));
        }
        var str = '';
        var str1 = '';
        for (var i = 0; i < 4; i++) {
            var nrandom = parseInt(Math.random() * arr.length)
            if (nrandom < 10) {
                str += arr[nrandom];
            } else {
                var isorno = Math.random() < 0.5 ? true : false;
                if (isorno) {
                    str += arr[nrandom].toUpperCase();
                } else {
                    str += arr[nrandom];
                }
            }
        }
        for (var i = 0; i < 4; i++) {
            str1 += str[i];
        }
        $rannum[0].innerHTML = str1;
    });
    //密码
    $password.blur(function () {
        if ($(this).val() == '') {
            $passspan[0].innerHTML = '密码不能为空';
            $passspan.css('color', 'red');
        }
        if ($(this).val().length >= 8 && $(this).val().length <= 20) {
            $passspan[0].innerHTML = '√';
            $passspan.css('color', 'grenn');
        }else {
            $passspan[0].innerHTML = '密码长度有误';
            $passspan.css('color', 'red');
        }
    });
    $submit.on('click', function () {
        if (!$flag) {
            return false;
        }
    });
})(jQuery);