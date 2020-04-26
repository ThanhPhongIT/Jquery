$(document).ready(function() {
    $("button").dblclick(function() {
        $("p").hide();
        $(this).hide();
    });
    $("li").click(function() {
        $("li").hide();
    });
    $(".content").mouseenter(function() {
        $(this).text("Phong đẹp trai");
    });
    $(".content").mouseleave(function() {
        $(this).text("hover me");
    });
});