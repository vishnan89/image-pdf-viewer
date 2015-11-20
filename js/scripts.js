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
    $("#pdfHolder").hide();
    $("#imgHolder").show();
    var imghol = document.getElementById("imgHolder");
    imghol.src = image;
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

function showPDF(pdf) {
    $("#imgHolder").hide();
    $("#pdfHolder").show();
    var pdfhol = document.getElementById("pdfHolder");
    pdfhol.src = pdf;
    $("html, body").animate({ scrollTop: 0 }, "slow");
}
