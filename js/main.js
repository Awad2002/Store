$('.city .city-item').click(function() {
    $(this).parent().find('.area-item').toggle();
    $(this).find('i').toggleClass('fa-angle-up');
    $(this).find('i').toggleClass('fa-angle-down');
});

$(".area-item").click(function(e) {
    e.preventDefault();
    window.location = "time.html";
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