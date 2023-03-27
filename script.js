$(document).ready(function () {
    // Initialize variables
    var slides = $('.slider').children();
    var thumbs = $('.thumbs').children();
    var currentSlide = 0;

    // Show the first slide and thumbnail
    slides.eq(currentSlide).addClass('active');
    thumbs.eq(currentSlide).addClass('active');

    // Change slide on thumbnail click
    thumbs.click(function () {
        // Remove active class from current slide and thumbnail
        slides.eq(currentSlide).removeClass('active');
        thumbs.eq(currentSlide).removeClass('active');

        // Set current slide to clicked thumbnail index
        currentSlide = $(this).index();

        // Add active class to new slide and thumbnail
        slides.eq(currentSlide).addClass('active');
        thumbs.eq(currentSlide).addClass('active');
    });
});
