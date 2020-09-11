$(document).ready(function () {
  $(".slider.slider--comment").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: 0,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: 0,
        },
      },
    ],
  });

  $(".slider.slider--partners").slick({
    slidesToShow: 5,
    prevArrow: $(".slider-navigation__prev"),
    nextArrow: $(".slider-navigation__next"),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

const init = () => {
  document.addEventListener("DOMContentLoaded", () => {
    forMobileDevice();
  });
};

const forMobileDevice = () => {
  "load resize".split(" ").forEach((e) => {
    window.addEventListener(e, initMobile, false);
  });
};

function initMobile() {
  const screenWidth = window.innerWidth;
  const mobile = screenWidth > 768;

  if (!mobile) {
    initAccordion();
    initHamburger();
  } else {
    deleteListeners();
  }
}

function onClickHamburger() {
  const navigation = document.querySelector(".navigation");
  const hamburger = document.querySelector(".hamburger");

  navigation.classList.toggle("navigation--active");
  hamburger.classList.toggle("is-active");
}

const hamburger = document.querySelector(".hamburger");

let initHamburger = () => {
  hamburger.addEventListener("click", onClickHamburger);
};

function toggleAccordion(e) {
  const cardHeader = e.currentTarget;
  const cardBody = cardHeader.nextElementSibling;
  const card = cardHeader.parentNode;

  const isOpen = card.classList.contains("accordion-open");

  if (!isOpen) {
    card.classList.add("accordion-open");
    cardBody.style.maxHeight = `${cardBody.scrollHeight}px`;
  } else {
    card.classList.remove("accordion-open");
    cardBody.style.maxHeight = "0px";
  }
}

const accordionHeader = document.querySelectorAll(".accordion__header");

let initAccordion = () => {
  accordionHeader.forEach((title) =>
    title.addEventListener("click", toggleAccordion)
  );
};

let deleteListeners = () => {
  accordionHeader.forEach((title) =>
    title.removeEventListener("click", toggleAccordion)
  );

  hamburger.removeEventListener("click", onClickHamburger);
};

init();
