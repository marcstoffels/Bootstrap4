$(document).ready(function(){
    $("#myCarousel").carousel({interval: 2000});
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass("fa-pause")){
            $("#myCarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }else {
            $("#myCarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
    });
    $("#reservationButton").click(function(){
        $("#reservationModal").modal("show");
    });
    $("#cancelReservationModal").click(function(){
        $("#reservationModal").modal("hide");
    });
    $("#closeReservationModal").click(function(){
        $("#reservationModal").modal("hide");
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });
    $("#cancelLoginModal").click(function(){
        $("#loginModal").modal("hide");
    });
    $("#closeLoginModal").click(function(){
        $("#loginModal").modal("hide");
    });  
});    