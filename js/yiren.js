$(function () {
    //返回按钮
    $('.icon-back').click(function () {
        history.go(-1);
    })

    //消除苹果点击延时
    FastClick.attach(document.body);

    

    //首页搜索
    $(document).on("click touchstart", ".search-index", function (e) {
        $(".weui-search-bar").addClass("weui-search-bar_focusing").find('input').focus();
    })
        .on("click", ".weui-search-bar__cancel-btn", function (e) {
            $(".weui-search-bar").removeClass("weui-search-bar_focusing").find(".weui-search-bar__input").val("").blur();
            $.closePopup();
        })

    //删除历史纪录
    $('#dltSearch').click(function () {
        $(this).parent().siblings().remove();
    })

    //收获地址
    $('.addr-manage .default').click(function(){
        //设置默认地址
        $(this).find('.weui-icon-circle').addClass("weui-icon-success").parents('dl').siblings().find('.weui-icon-circle').removeClass('weui-icon-success');
    })

    //删除地址
    $('.addr-manage .delete').click(function () {
        $(this).parents('dt').parent().remove();
    })




});
