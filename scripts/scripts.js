$(document).ready(function () {
    //How We Work Section Start
    //making second card paragraph active on page load 
    $(".how_we_work_card3").find(".we_wrk_img_hide_desc_p").addClass('we_wrk_active');
    //choose what paragraph show on click on card
    for (let i = 0; i < 3; i++) {
        $('.how_we_work_card'+(i+2)).mouseover(function(event){
            $(".how_we_work_container").find(".we_wrk_img_hide_desc_p").removeClass('we_wrk_active');
            $(this).find(".we_wrk_img_hide_desc_p").addClass('we_wrk_active');
        });
    }
    //How We Work Section End
});
    //Our Team Strart
$(document).ready(function () {
    //Slick Carousel Start
    $('.team_slider').slick({
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0px',
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                arrows: false
              }
            }
          ]
    });
    //Slick Carousel End
    $(".slick-active").not(".slick-center").find(".team_ocupation").addClass('team_ocupation_hiden');
    $(".slick-active").not(".slick-center").find(".team_name").addClass('team_name_moved');
    // $(".slick-active").find(".team_ocupation").removeClass('team_ocupation_hiden');
    $(".slick-arrow").click(function () { 
        $(".slick-active").find(".team_ocupation").addClass('team_ocupation_hiden');
        $(".slick-center").find(".team_ocupation").removeClass('team_ocupation_hiden');
        $(".slick-active").find(".team_name").addClass('team_name_moved');
        
        $(".slick-center").find(".team_name").addClass('team_name_normal');
        
    });

    // $(".slick-active").on('swipe', function (event, slick, currentSlide, nextSlide) { 
    //     $(".slick-active").find(".team_ocupation").addClass('team_ocupation_hiden');
    //     $(".slick-center").find(".team_ocupation").removeClass('team_ocupation_hiden');
    //     $(".slick-active").find(".team_name").addClass('team_name_moved');
        
    //     $(".slick-center").find(".team_name").addClass('team_name_normal');
        
    // });
    
});
//Our Team End
