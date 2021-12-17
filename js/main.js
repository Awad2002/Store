$('.city .city-item').click(function() {
    $(this).parent().find('.area-item').toggle();
    $(this).find('i').toggleClass('fa-angle-up');
    $(this).find('i').toggleClass('fa-angle-down');
});