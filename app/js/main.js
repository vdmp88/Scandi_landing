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
    onMobileDevice();
    initModal();
  });
};

const onMobileDevice = () => {
  "load resize".split(" ").forEach((e) => {
    window.addEventListener(e, initMobile, false);
  });
};

const initMobile = () => {
  const screenWidth = window.innerWidth;
  const mobile = screenWidth > 768;

  if (!mobile) {
    initAccordion();
    initHamburger();
  } else {
    deleteListeners();
  }
};

const hamburger = document.querySelector(".hamburger");

const onClickHamburger = () => {
  const navigation = document.querySelector(".navigation");

  navigation.classList.toggle("navigation--active");
  hamburger.classList.toggle("is-active");
};

const initHamburger = () => {
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

const initAccordion = () => {
  accordionHeader.forEach((title) =>
    title.addEventListener("click", toggleAccordion)
  );
};

const deleteListeners = () => {
  accordionHeader.forEach((title) =>
    title.removeEventListener("click", toggleAccordion)
  );

  hamburger.removeEventListener("click", onClickHamburger);
};

const body = document.body;
const backdrop = document.querySelectorAll(".backdrop");
const modals = document.querySelectorAll(".modal");
const openModalButtons = document.querySelectorAll("[data-modal-trigger]");

const showModal = (attr) => {
  const currentModal = document.querySelector(`[data-modal-name="${attr}"]`);

  currentModal.focus();
  body.classList.add("no-scroll");
  currentModal.classList.add("modal--is-active");
  currentModal.previousElementSibling.classList.add("backdrop--is-active");
};

const hideModal = () => {
  body.classList.remove("no-scroll");

  modals.forEach((modal) => {
    modal.classList.remove("modal--is-active");
    modal.previousElementSibling.classList.remove("backdrop--is-active");
  });
};

const triggerModal = () => {
  openModalButtons.forEach((attr) => {
    attr.addEventListener("click", (e) => {
      showModal(e.target.dataset.modalTrigger);
    });
  });
};

const dismissModal = () => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hideModal();
    }
  });

  backdrop.forEach((backdrop) => backdrop.addEventListener("click", hideModal));
};

const initModal = () => {
  dismissModal();
  triggerModal();
};

init();
