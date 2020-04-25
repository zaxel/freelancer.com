$(document).ready(function () {
    //making second card paragraph active on page load
    $(".how_we_work_card3").find(".we_wrk_img_hide_desc_p").addClass('we_wrk_active');
    //choose what paragraph show on click on card
    for (let i = 0; i < 3; i++) {
        $('.how_we_work_card'+(i+2)).click(function(event){
            $(".how_we_work_container").find(".we_wrk_img_hide_desc_p").removeClass('we_wrk_active');
            $(this).find(".we_wrk_img_hide_desc_p").addClass('we_wrk_active');
        });
    }
});