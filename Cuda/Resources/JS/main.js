$(document).ready(function(){
    //sticky menu
    $('.js--services-section').waypoint(function(direction){
        if (direction=="down"){
            $("nav").addclass("sticky")
        } else {
            $("nav").removeclass("sticky")
        }
    });
    var config = document.querySelector('.mixitupcont');
     var mixer = mixitup(config);

});

