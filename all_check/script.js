$(function() {

    // 전체 체크박스 클릭
    $('#all_check').on('change', function() {
        if($(this).is(':checked')) {
            $('.check_list input[type="checkbox"]').prop('checked', true);
        } else {
            $('.check_list input[type="checkbox"]').prop('checked', false);
        }
    })

    // 체크박스 리스트 클릭
    $('.check_list input[type="checkbox"]').on('change', function() {
        var totalLength = $('.check_list input[type="checkbox"]').length;
        var checkLength = $('.check_list input[type="checkbox"]:checked').length;
        if(totalLength == checkLength) {
            $('#all_check').prop('checked', true);
        } else {
            $('#all_check').prop('checked', false);
        }


    })


})