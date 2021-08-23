
$(function() {
    $('.map_tab button').on('click', function() {
        var data = $(this).data('map');
        $(this).addClass('on').siblings().removeClass('on');
        $('.map_svg g').attr('class', '');
        $('#' + data).attr('class', 'active');
        $('.map_area .map_label').hide();
        $('#' + data + '_label').show();
    })


    $('svg > g').on('mouseenter', function(e){
        var loc_name = $(this).attr('id');
        $('.map_tab button[data-map="'+loc_name+'"]').addClass('on').siblings().removeClass('on');
        $('.map_svg g').attr('class', '');
        $('.map_area .map_label').hide();
        $('#' + loc_name + '_label').show();
    });
    $('svg > g').on('mouseleave', function(){
        $('.map_area .map_label').hide();
        $('.map_tab button').removeClass('on');
    });


})
