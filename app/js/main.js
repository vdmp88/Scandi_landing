$(document).ready(function () {
  $(".slider.slider--comment").slick({
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".slider.slider--partners").slick({
    slidesToShow: 2,
    prevArrow: $(".slider-navigation__prev"),
    nextArrow: $(".slider-navigation__next"),
  });
});
