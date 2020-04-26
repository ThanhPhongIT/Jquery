$(document).ready(function() {
    $("button").click(function() {
        $(".p1").hide(1000);
        $(this).text("double click me");
    });
    $("button").dblclick(function() {
        $(".p1").show(1000);
        $(this).text("click me");
    });
    $("ul li:first").click(function() {
        $(this).hide(1000);
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

    $(".on").on({
        mouseenter: function() {
            $(this).css("background-color", "green");
        },
        mouseleave: function() {
            $(this).css("background-color", "yellow");
        },
        click: function() {
            $(this).css("background-color", "aqua");
        }
    });
})