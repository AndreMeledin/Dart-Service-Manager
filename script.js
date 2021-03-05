$(function(){
    $('.block-comments-cards').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        autoplay: false,
        prevArrow: '<img src="icon/keyboard_arrow_up.png">',
        nextArrow: '<img src="icon/keyboard_arrow_down.png">'
    });
});

var acc = document.querySelectorAll(".team-card");
var i;

for (i = 0; i< acc.length;i++){
    acc[i].addEventListener("click", function(){
        if(this.classList !=("active")){
            this.classList.toggle("active");
        }
    });
}