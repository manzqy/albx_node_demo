$(function () {
    // 导航菜单的动态生成
    $.ajax({
        url: '/getMenuList',
        dataType: 'json',
        success: function (res) {
            $('.header .nav').html(template('navTemp', res))
            $('.topnav ul').html(template('navTemp', res))
        }
    })

    // 动态生成轮播图
    $.ajax({
        url: '/getSliderList',
        dataType: 'json',
        success: function (res) {
            console.log(res)
            $('.content .swipe-wrapper').html(template('sliderTemp', res))

            // 生成动态结构之后再手动进行初始化
            var swiper = Swipe(document.querySelector('.swipe'), {
                auto: 3000,
                transitionEnd: function (index) {
                    $('.cursor span').eq(index).addClass('active').siblings('.active').removeClass('active');
                }
            });

            // 上/下一张
            $('.swipe .arrow').on('click', function () {
                var _this = $(this);

                if (_this.is('.prev')) {
                    swiper.prev();
                } else if (_this.is('.next')) {
                    swiper.next();
                }
            })
        }
    })
})