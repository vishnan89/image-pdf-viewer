$(document).ready(function () {
    $(".alert").addClass("in").fadeOut(4500);

    /* swap open/close side menu icons */
    $('[data-toggle=collapse]').click(function () {
        // toggle icon
        $(this).find("i").toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
    });
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

function showImg(image) {
    $("li").removeClass("golden");
    $("#pdfHolder").hide();
    $("#imgHolder").show();
    var imghol = document.getElementById("imgHolder");
    imghol.src = image;
    var target = $(event.target);
    $(event.target).closest("li").addClass("golden");
}

function showPDF(pdf) {
    $("li").removeClass("golden");
    $("#imgHolder").hide();
    $("#pdfHolder").show();
    var pdfhol = document.getElementById("pdfHolder");
    pdfhol.src = pdf;
    var target = $(event.target).closest("li");
    $(event.target).closest("li").addClass("golden");

}
