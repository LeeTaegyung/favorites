
$(function() {

    $('.map_tab button').on('click', function() {
        var data = $(this).data('map');
        $(this).addClass('on').siblings().removeClass('on');
        $('.map_area g').attr('class', '');
        $('#' + data).attr('class', 'active');
        $('#' + data + '_label').show();
    })


    $('svg > g').on('mouseenter', function(e){
        var loc_name = $(this).attr('id');
        $('.map_tab button[data-map="'+loc_name+'"]').addClass('on').siblings().removeClass('on');
        $('.map_area g').attr('class', '');
        $('#' + loc_name + '_label').show();
    });
    $('svg > g').on('mouseleave', function(){
        $('.map_tab button').removeClass('on');
    });


})
