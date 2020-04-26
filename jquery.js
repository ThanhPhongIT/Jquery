$(document).ready(function() {
    $("button").dblclick(function() {
        $(".p1").hide();
        $(this).hide();
    });
    $("ul li:first").click(function() {
        $(this).hide();
    });
    $(".content").mouseenter(function() {
        $(this).text("Phong đẹp trai");
    });
    $(".content").mouseleave(function() {
        $(this).text("hover me");
    });
    $(".link").mouseup(function() {
        alert("you have been click on link");
    });
});