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
    //Slick Carousel person ocupation removed on inactive slide Start
    $(".slick-active").not(".slick-center").find(".team_ocupation").addClass('team_ocupation_hiden');
    $(".slick-arrow").click(function () { 
        $(".slick-active").find(".team_ocupation").addClass('team_ocupation_hiden');
        $(".slick-center").find(".team_ocupation").removeClass('team_ocupation_hiden');
    });
    $(".team_slider").on('swipe', function (event, slick, currentSlide, nextSlide) { 
      $(".slick-active").find(".team_ocupation").addClass('team_ocupation_hiden');
      $(".slick-center").find(".team_ocupation").removeClass('team_ocupation_hiden');
    });
    //Slick Carousel person ocupation removed on inactive slide End
});
//Our Team End

//Client Says Start
$(document).ready(function(){
  $(".client_prewiev_pic").click(function(){
    let hrefImg = $(this).find(".client_prewiev_pic_img").attr('src');
    let custFeedback = $(this).find(".client_prewiev_p").text();
    let custOcupation = $(this).find(".client_prewiev_h4").text();
    console.log(custFeedback);
    $(".client_picture_main").attr("src", hrefImg); 
    $(".client_descr_p").text(custFeedback);
    $(".client_descr_h4").text(custOcupation);
  });
});
//Client Says End

//Burger Start
$(document).ready(function(){
  const top_menu = document.querySelector('.top_menu');
  const header = document.querySelector('.header');
  const body = document.querySelector('body');
  const burger = document.querySelector('.burger');
  // $('.top_menu').addClass('top_menu_active');
  $('.burger').click(function(event){
      $('.top_menu').toggleClass('top_menu_active');
      // $('.header:before').toggleClass('top_menu_hiden');
      $(this).toggleClass('active_burger');
      $('body').toggleClass('lock');
      $('.top_menu').click(function(event){
        $('.top_menu').removeClass('top_menu_active');
          burger.classList.remove('active_burger');
          body.classList.remove('lock');

      });
  });
});
//Burger End