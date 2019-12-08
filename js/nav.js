$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        
        $("#navBar").removeClass('bg-transparent');
        $('#navBar').attr('style','background-color:grey !important;');
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#navBar").addClass("bg-transparent");
       $('nav a,nav div ul li').addClass('text-white');
       $('#navBar').removeAttr('style');
    }
});

$('button,nav div li a').hover(function(){
   
    $(this).addClass('active');
},
function(){
    
    $(this).removeClass('active');
}
);
$('nav div li a').on('click',function(){

$('nav div ul li a').each(function(){
    if($(this).attr('class').includes('text-warning')){
        $(this).toggleClass('text-warning');
    }
});

$(this).toggleClass('text-warning');

});
