$(document).ready(function () {

    // Back to top button

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $("#toTopBtn").fadeIn();
        } else {
            $("#toTopBtn").fadeOut();
        }
    });

    $("#toTopBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    // Toggle in Works albums

    $(".toggle-btn").click(function (e) {
        e.preventDefault();

        $("[class^=row]")
            .not($("." + this.id))
            .hide();

        $("." + this.id).slideToggle(120);
    });
});
