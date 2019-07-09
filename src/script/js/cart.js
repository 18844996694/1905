; !function ($) {
    const $itemlist = $('.item-list');
    function showgoods(sid,num){
        $.ajax({
            url: 'http://10.31.158.47/360market/1905/php/',
            dataType: 'json',
            success: function (piclist) {//获取对应得商品列表的数据
                let $goodshtml='';
                for (let i = 0; i < piclist.length; i++) {
                    if (piclist[i].picd == sid) {//通过循环判断当前渲染的商品列表的sid和接口数据picid是否相同。
                    $goodshtml+=`
                    <div class="goods-item goods-item-sele">
                    <div class="goods-info">
                        <div class="cell b-checkbox">
                            <div class="cart-checkbox">
                                <input type="checkbox" checked="" name="" id="" value="">
                                <span class="line-circle"></span>
                            </div>
                        </div>
                        <div class="cell b-goods">
                            <div class="goods-name">
                                <div class="goods-pic">
                                    <a href=""><img src="${piclist[i].url}" alt=""></a>
                                </div>
                                <div class="goods-msg">
                                    <div class="goods-d-info">
                                        <a href="">${piclist[i].title}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cell b-props">
                            <div class="prop-text">360商城商品</div>
                        </div>
                        <div class="cell b-price">
                            <strong>${piclist[i].price}</strong>
                            <div class="sales-promotion-dropdown">
                            </div>
                        </div>
                        <div class="cell b-quantity">
                            <div class="quantity-form">
                                <a class="quantity-down" href="javascript:void(0)">-</a>
                                <input type="text" value="${num}">
                                <a class="quantity-add" href="javascript:void(0)">+</a>
                            </div>
                        </div>
                        <div class="cell b-sum">
                           
                        </div>
                        <div class="cell b-action">
                            <a href="javascript:void(0)">删除</a>
                        </div>
                    </div>
                </div>`;
                    }
                }
                $itemlist[0].innerHTML+=$goodshtml;//追加数据
            }
        });
    }
    if(getcookie('cookiesid') && getcookie('cookienum')){
        let arrsid=getcookie('cookiesid').split(',');
        let arrnum=getcookie('cookienum').split(',');
        for(let i=0;i<arrsid.length;i++){
            showgoods(arrsid[i],arrnum[i]);
        }
    }
}(jQuery);