$(function() {
    
    // ============================slick_slider01
    $('.slick_slider01 .slider_box').slick({
        prevArrow: '.slick_slider01 .prev',
        nextArrow: '.slick_slider01 .next',
        dots: true,
        customPaging : function(slider, i) {
            $('.slick_slider01 .pager_dot').append('<button>' + (i + 1) + '</button>');
            $('.slick_slider01 .pager_dot button').eq(0).addClass('current');
        }
    })
    $('.slick_slider01 .slider_box').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $('.slick_slider01 .pager_dot button').removeClass('current').eq(currentSlide).addClass('current');
    })
    $(document).on('click', '.slick_slider01 .pager_dot button', function() {
        var slideIdx = $(this).index();
        $('.slick_slider01 .slider_box').slick('slickGoTo', slideIdx);
    })
    
    // ============================slick_slider01
    
    // ============================slick_slider02
    $('.slick_slider02 .slider_box').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.slick_slider02 .pager_num').html('<strong>' + i + '</strong>/' + slick.slideCount);
    });
    $('.slick_slider02 .slider_box').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.slick_slider02 .prev',
        nextArrow: '.slick_slider02 .next',
    })
    $('.slick_slider02 .pager_move').on('click', function() {
        if($(this).hasClass('pause')) {
            $(this).removeClass('pause');
            $('.slick_slider02 .slider_box').slick('slickPause');
        } else {
            $(this).addClass('pause');
            $('.slick_slider02 .slider_box').slick('slickPlay');
        }
    })
    // ============================slick_slider02
    
    // ============================slick_slider03
    $('.slick_slider03 .slider_box').slick({
        arrows: false,
        dots: true,
        customPaging : function(slider, i) {
            return '<button>텍스트' + (i + 1) + '</button>';
        }
    })
    // ============================slick_slider03
    

})