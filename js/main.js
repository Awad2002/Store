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