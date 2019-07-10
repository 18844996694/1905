!(function($){
    const $titlesli=$('.titles li');
    const $title=$('.title');
    $titlesli.on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $title.eq($(this).index()).removeClass('hide').siblings().addClass('hide');
    })
})(jQuery);