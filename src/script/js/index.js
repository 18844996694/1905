; !function ($) {
    const $bategoods = $('.others .bategoods');
    $.ajax({//更多商品的数据
        url: "http://10.31.158.47/360market/1905/php/",
        dataType: 'json',
        success: function (piclist) {
            //console.log(piclist);
            let htmlul = '<ul>';
            for (let i = 0; i < piclist.length; i++) {
                htmlul += `
                <li>
                    <a href="http://10.31.158.47/360market/1905/src/details.html?sid=${piclist[i].picd}">
						<div class="box"><img src="${piclist[i].url}" alt=""></div>
						<p>${piclist[i].title}</p>
						<span>${piclist[i].price}</span>
					</a>
				</li>`;
            }
            htmlul += '</ul>';
            $bategoods[0].innerHTML = "<p>更多商品</p>" + htmlul;
        }
    });
    const $cOinput = $('.cOinput');
    $cOinput.bind('input propertychange', function () {
        alert(1);
        // let $OBody = $('body');
        // $("<script></script>").appendTo($OBody).attr('src', "https://suggest.taobao.com/sug?code=utf-8&q=" + this.value + "&_ksTS=1561098362741_434&callback=taobao&k=1&area=c2c&bucketid=6");
    });


}(jQuery);
!(function ($) {
    // 头部划过效果
    const $sideleft = $('.sideleft');
    const $sideright = $('.sideright');
    const $oA = $('.header .right ul a');
    const $admin = $('.admins');
    const $welcome = $('.welcome');
    const $out = $('.out');
    const $rename = $('.rename');
    const $cartnum = $('.cartnumber');
    $sideleft.hover(function () {
        $sideright.addClass('show_right');
    }, function () {
        $sideright.removeClass('show_right');
    });
    $oA.hover(function () {
        $(this).addClass('hover_color');
    }, function () {
        $(this).removeClass('hover_color');
    });
    if (getcookie('username') && getcookie('password')) {
        $admin.hide();
        $welcome.show();
        $rename[0].innerHTML = getcookie('username');
    };
    $out.on('click', function () {
        delcookie('username');
        delcookie('password');
        $admin.show();
        $welcome.hide();
    });
    if (getcookie('cookienum')) {
        let arrnum = getcookie('cookienum').split(',');
        let $sum = 0;
        for (let i = 0; i < arrnum.length; i++) {
            $sum += Number(arrnum[i]);
        }
        $cartnum[0].innerHTML = $sum;
    }
    $(function () {//和拼接的元素放在一起。
        $("img.lazy").lazyload({
            effect: "fadeIn"//图片显示方式
        });
    });
})(jQuery);

//轮播图
!(function ($) {
    const $circle = $('.circle li');
    const $picli = $('.sidebox ul li');
    const $right = $('.sidebox .right');
    const $left = $('.sidebox .left');
    const $mod_index = $('.mod_index');
    let $num = 0;
    $circle.on('click', function () {
        $num = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $picli.eq($(this).index()).addClass('showpic').siblings().removeClass('showpic');
        $picli.eq($(this).index()).css('transition', 'all 0.7s');
    });
    $mod_index.hover(function () {
        $right.show();
        $left.show();
        clearInterval(timer);
    }, function () {
        $right.hide();
        $left.hide();
        autoplay();
    });
    $right.on('click', function () {
        $num++;
        if ($num > $picli.size() - 1) {
            $num = 0;
        }
        lunbotuswitch();
    });
    $left.on('click', function () {
        $num--;
        if ($num < 0) {
            $num = $picli.size() - 1;
        }
        lunbotuswitch();
    });
    autoplay();
    function autoplay() {
        timer = setInterval(function () {
            $right.click();
        }, 3000)
    }
    function lunbotuswitch() {
        $circle.eq($num).addClass('active').siblings().removeClass('active');
        $picli.eq($num).addClass('showpic').siblings().removeClass('showpic');
        $picli.eq($num).css('transition', 'all 0.7s');
    }
})(jQuery);
