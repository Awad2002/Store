$(document).ready(function() {
    $('.areas').show();
    $('.city button.question').on('click', function() {
        $(this).next('.areas').toggle('show');
        $(this).find('.fas').toggleClass('fa-angle-up');
        $(this).find('.fas').toggleClass('fa-angle-down');
    });
});


$(".categorie-item").click(function(e) {
    e.preventDefault();
    window.location = "categorie.html";
});

$(".product-item").click(function(e) {
    e.preventDefault();
    window.location = "product.html";
});

/* customer information page */
$('.property-type input').click(function() {
    if ($('#home-option').is(':checked')) {
        $('.apartment-inputs').hide();
        $('.office-inputs').hide();
        $('.home-inputs').show();
    } else if ($('#apartment-option').is(':checked')) {
        $('.office-inputs').hide();
        $('.home-inputs').hide();
        $('.apartment-inputs').show();
    } else if ($('#office-option').is(':checked')) {
        $('.home-inputs').hide();
        $('.apartment-inputs').hide();
        $('.office-inputs').show();
    }
});