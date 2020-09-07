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

document.addEventListener("DOMContentLoaded", () => {
  let screenWidth = window.innerWidth;
  let mobile = screenWidth < 768;

  initHamburger();
  initAccordion();

  // window.addEventListener("resize", initMobileMenu);
});

function onClickHamburger() {
  let navigation = document.querySelector(".navigation");
  navigation.classList.toggle("navigation--active");
}

let initHamburger = () => {
  let hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", onClickHamburger);
};

function toggleAccordion() {
  let cardItems = document.querySelectorAll(".card--accardion");
  let thisItem = this.parentNode;

  cardItems.forEach((item) => {
    if (thisItem === item) {
      if (
        !item.children[1].style.maxHeight ||
        item.children[1].style.maxHeight == 0 + "px"
      ) {
        item.children[1].style.maxHeight = item.children[1].scrollHeight + "px";
      } else {
        item.children[1].style.maxHeight = 0 + "px";
      }
    }
  });
}

let initAccordion = () => {
  let cardHeader = document.querySelectorAll(".card__header");

  cardHeader.forEach((title) =>
    title.addEventListener("click", toggleAccordion)
  );
};

let images = [
  {
    src: "img/latest-project-1.jpg",
  },
  {
    src: "img/latest-project-2.jpg",
  },
  {
    src: "img/latest-project-3.jpg",
  },
  {
    src: "img/latest-project-4.jpg",
  },
  {
    src: "img/latest-project-5.jpg",
  },
];

let renderCard = () => {
  const card = `
    <div class="card card--latest-project">
      
    </div>
  `;
};
