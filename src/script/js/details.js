!function ($) {
    const $sid = location.search.substring(1).split('=')[1];//取得首页传过来的sid数据
    //console.log($sid)
    //获取商品列表
    const $spicimg = $('.spic img');
    const $bpic = $('.bpic');
    const $title = $('.title');
    const $price = $('.price');
    const $movelistul = $('.movelist ul');
    const $spic = $('.spic');
    const $xiaofang = $('.xiaofang');
    const $dafang = $('.dafang');
    const $details = $('.details');
    const $btn = $('.goodsnum button');
    const $oNum = $('.oNum');
    $.ajax({
        url: 'http://10.31.158.47/360market/1905/php/details.php',
        data: {
            picd: $sid
        },
        dataType: 'json',
        success: function (option) {
            //console.log(option);
            //获取大图的地址
            $spicimg.attr('src', option.url);
            $spicimg.attr('sid', option.picd);
            //console.log($spicimg.attr("sid"))
            $bpic.attr('src', option.url);
            $title[0].innerHTML = option.title;
            $price[0].innerHTML = option.price;
            //获取小图的地址
            let $ullist = option.imgurls.split(',');
            let $lihtml = '';
            $($ullist).each(function (i, item) {
                $lihtml += '<li><img src="' + item + '"></li>';
            });
            $movelistul[0].innerHTML = $lihtml;
        }
    });
    //放大镜
    let $widths = $spic.width() * $dafang.width() / $bpic.width();//小放大镜的宽
    let $heights = $spic.height() * $dafang.height() / $bpic.height();//小放大镜的高
    let $bili = $bpic.height() / $spic.width();//获取放大的比例
    $xiaofang.css({
        width: $widths,
        height: $heights
    })
    $spic.hover(function () {//实现放大镜的效果
        $xiaofang.show();
        $dafang.show();
        $spic.on('mouseover', function (ev) {
            var ev = ev || window.event;
            let $l = ev.pageX - $details.offset().left - $xiaofang.width() / 2;
            let $t = ev.pageY - $details.offset().top - $xiaofang.height() / 2;
            if ($l < 0) {
                $l = 0;
            } else if ($l > $spic.width() - $xiaofang.width()) {
                $l = $spic.width() - $xiaofang.width();
            }
            if ($t < 0) {
                $t = 0;
            } else if ($t > $spic.height() - $xiaofang.height()) {
                $t = $spic.height() - $xiaofang.height();
            }
            $xiaofang.css({
                left: $l + 'px',
                top: $t + 'px'
            });
            $bpic.css({
                left: -$l * $bili + 'px',
                top: -$t * $bili + 'px'
            });
        });
    }, function () {
        $xiaofang.hide();
        $dafang.hide();
    });

    //购物车
    let arrsid = [];
    let arrnum = [];
    function cookievalue() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            arrsid = getcookie('cookiesid').split(',');//将获取的cookie转换成数组
            arrnum = getcookie('cookienum').split(',');
        }
    }
    $btn.on('click',function(){
        
        cookievalue();//确认是否是第一次购买该商品
        let sid=$spicimg.attr("sid");
        if(arrsid.indexOf(sid)==-1){//不存在
            arrsid.push(sid);
            arrnum.push($oNum.val());
            //console.log(arrnum);
            setcookie('cookiesid',arrsid.toString(),10);
            setcookie('cookienum',arrnum.toString(),10);
        }else{//存在
            let sum=Number(arrnum[arrsid.indexOf(sid)])+Number($oNum.val());
            arrnum[arrsid.indexOf(sid)]=sum;
            setcookie('cookienum',arrnum.toString(),10);
         }
    });
}(jQuery);
