let currentSlide = 0;

function showSlide(index) {
    const items = $('.carousel-item');
    items.hide();
    if (index >= items.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = items.length - 1;
    } else {
        currentSlide = index;
    }
    $(items[currentSlide]).show();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function restartSlides() {
    showSlide(0);
}

function showDetails(slideNumber) {
    const detailText = $($('.carousel-item')[slideNumber - 1]).attr('data-details');
    $('#modal-text').text(detailText);
    $('#modal-image').attr('src', `_${slideNumber}.png`);
    $('#details-modal').modal('show');
}

function goHome() {
    $('#carousel').hide();
    $('#logo-container').show();
}

$(document).ready(function() {
    $('#start-button').click(function() {
        $('#logo-container').hide();
        $('#carousel').show();
        showSlide(0);
    });
});
