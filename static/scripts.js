$(document).ready(function() {
    $("#bulletin-logo").hover(
        function() {
            $(this).css({ "transform": "rotate(20deg) scale(1.1)" });
        },
        function() {
            $(this).css({ "transform": "rotate(0deg) scale(1)" });
        }
    );
});
