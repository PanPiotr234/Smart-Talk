// auto-writing

var typed = new Typed(".auto-type", {
  strings: ["Facebooku", "Instagramie", "Linkedinie"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: false,
});

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// var swiper = new Swiper(".yourSwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     autoplay: {
//       delay: 500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// var swiper = new Swiper(".mineSwiper", {
//     slidesPerView: 1,
//     autoplay: {
//       delay: 5500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// });

// fotter-waves

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

// pojawianie się elementów

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// FAQ section

const ARROW_COLLAPSED = "<";
const ARROW_EXPANDED = ">";

var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  try {
    acc[i].querySelector(".arrow").textContent = ARROW_COLLAPSED;
  } catch {}

  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.querySelector(".arrow").textContent = ARROW_COLLAPSED;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.querySelector(".arrow").textContent = ARROW_EXPANDED;
    }
  });
}
