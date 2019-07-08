!function($){
    const $sid=location.search.substring(1).split('=')[1];//取得首页传过来的sid数据
    //console.log($sid)
    //获取商品列表
    const $spic=$('.spic img');
    const $bpic=$('.bpic');
    const $title=$('.title');
    const $price=$('.price');
    const $movelistul=$('.movelist ul');
    $.ajax({
        url:'http://10.31.158.47/360market/1905/php/details.php',
        data:{
            picd:$sid
        },
        dataType:'json',
        success:function(option){
            //console.log(option);
            //获取大图的地址
            $spic.attr('src',option.url);
            $bpic.attr('src',option.url);
            $title[0].innerHTML=option.title;
            $price[0].innerHTML=option.price;
            //获取小图的地址
            let $ullist=option.imgurls.split(',');
            let $lihtml='';
           $($ullist).each(function(i,item){
                $lihtml += '<li><img src="' + item + '"></li>';
           });
           $movelistul[0].innerHTML=$lihtml;

        }

    });
}(jQuery);


//放大镜
!(function($){
    $.fn.extend({
        loupe:function(){
            const $spic=$('.spic');
            const $spicimg=$('.spic img');
            const $xiaofang=$('.xiaofang');
            const $dafang=$('.dafang');
            const $bpic=$('.bpic');
            $spic.hover(function(){
                $xiaofang.show();
                $dafang.show();
                let $widths=$spic.width()*$dafang.width()/$bpic.width();
                let $heights=$spic.height()*$dafang.height()/$bpic.height();
                let $bili=$bpic.height()/$spic.width();
                $xiaofang.animate({
                    width:$widths,
                    height:$heights
                },0);
                $(this).on('mouseover',function(ev){
                    let ev=ev||window.event;
                    
                });
            },function(){
                $xiaofang.hide();
                $dafang.hide();
            })
        }
    })
})(jQuery);