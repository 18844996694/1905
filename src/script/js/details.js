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
    const $cartnum=$('.cartnum');
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
            let $l = ev.pageX - $spic.offset().left - $xiaofang.width() / 2;
            let $t = ev.pageY - $spic.offset().top - $xiaofang.height() / 2;
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
    //点击切换小图
    $('.movelist ul').on('mouseover','li',function(){
        var $imgurl=$(this).find('img').attr('src');
        $('.smallpic').attr('src',$imgurl);
        $('.bpic').attr('src',$imgurl);
    });
    //点击小图箭头切换
    var $num=5;//放大镜显示6张。
    $('#right').on('click',function(){
        var $list=$('.movelist ul li');//8
        if($list.length>$num){
            $num++;
            $('#left').css('color','#333');
            if($list.length==$num){
                $('#right').css('color','#fff');
            }
            $('.movelist ul').animate({
                left:-($num-5)*$list.eq(0).innerWidth()-5
            })
        }
    });
    
    $('#left').on('click',function(){
        var $list=$('.movelist ul li');//8
        if($num>5){
            $num--;
            $('#right').css('color','#333');
            if($num<=5){
                $('#left').css('color','#fff');
            }
            $('.movelist ul').animate({
                left:-($num-5)*$list.eq(0).innerWidth()+1
            })
        }
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
    if(getcookie('cookienum')){
        let arrnum=getcookie('cookienum').split(',');
        let $sum=0;
        for(let i=0;i<arrnum.length;i++){
            $sum+=Number(arrnum[i]);
        }
       $cartnum[0].innerHTML=$sum;
    }
}(jQuery);
