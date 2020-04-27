$(document).ready(function() {
    $("button").click(function() {
        $(".p1").fadeOut(1000);
        $(this).text("double click me");
    });
    $("button").dblclick(function() {
        $(".p1").fadeIn("slow");
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
    $(".move")
        .mouseenter(function() {
            $(this).animate({ width: "500px" }, 2000);
        })
        .mouseleave(function() {
            $(this).animate({ width: "100px" }, 2000);
        });
})