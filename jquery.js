$(document).ready(function() {
    $("button").dblclick(function() {
        $("p").hide();
        $(this).hide();
    });
    $("li").click(function() {
        $("li").hide();
    });
});