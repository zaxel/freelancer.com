$(document).ready(function () {
    let workCard1 = document.getElementById('how_work_id1');
    let workCard2 = document.getElementById('how_work_id2');
    let workCard3 = document.getElementById('how_work_id3');


    // $('.how_we_work_card2').click(function(event){
    //     $(this).children(".how_we_work_card2_img_desc").children(".we_wrk_img_hide_desc").children(".we_wrk_img_hide_desc_p").toggleClass('we_wrk_active');
    // });
    for (let i = 0; i < 3; i++) {
        $('.how_we_work_card'+(i+2)).click(function(event){
            $(".how_we_work_container").find(".we_wrk_img_hide_desc_p").removeClass('we_wrk_active');
            $(this).find(".we_wrk_img_hide_desc_p").addClass('we_wrk_active');
        });
        
    }
    // $('.how_we_work_card3').click(function(event){
    //     $(".how_we_work_container").find(".we_wrk_img_hide_desc_p").addClass('we_wrk_img_hide_desc_p');
    //     $(this).find(".we_wrk_img_hide_desc_p").addClass('we_wrk_active');
    // });

    // workCard1.addEventListener('click', function(){
    //     console.log(this);
    //     let hidebleDescr = document.querySelector(".we_wrk_img_hide_desc_p");
    //     hidebleDescr.classList.Add('we_wrk_active');
    // });
    // workCard2.addEventListener('click', function(){
    //     console.log(this);
    //     // $("we_wrk_img_hide_desc_p").classList.Add('we_wrk_active');
    // });
    // workCard3.addEventListener('click', function(){
    //     console.log(this);
    //     // $("we_wrk_img_hide_desc_p").classList.Add('we_wrk_active');
    // });
    
    
    
    // for (let i = 0; i < 3; i++) {
    //     'workCard'+(i+1).addEventListener('click', function(){
    //         console.log(this);
    //         $("we_wrk_img_hide_desc_p").classList.Add('we_wrk_active');
    //     });
        
        
        
        
    //  }
});