$(document).ready(function () {



    // ТАРИФЫ

    $('.plans__card-starting').mouseover(function () {
        $(this).addClass('scaled');
        $('.plans__card-business').addClass('business-scale');
    });
    $('.plans__card-starting').mouseout(function () {
        $(this).removeClass('scaled');
        $('.plans__card-business').removeClass('business-scale');
    });
    $('.plans__card-vip').mouseover(function () {
        $(this).addClass('scaled');
        $('.plans__card-business').addClass('business-scale');
    });
    $('.plans__card-vip').mouseout(function () {
        $(this).removeClass('scaled');
        $('.plans__card-business').removeClass('business-scale');
    });

});