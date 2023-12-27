const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    520: {
      slidesPerView: 1,
      spaceBetween: -100,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

window.addEventListener("scroll", function () {
  var navProfile = document.getElementById("navProfile");
  var navProfileText = document.getElementsByClassName(".navProfileText");
  var scrollPosition = window.scrollY;
  console.log(scrollPosition);
  // Belirli bir scroll pozisyonuna ulaşıldığında elementi gizle
  if (scrollPosition > 665) {
    navProfile.style.opacity = 0;
    navProfile.style.transition = "opacity 0.8s ease";
    navProfileText.style.opacity = 1;
    console.log(navProfileText);
  } else {
    navProfile.style.opacity = 1;
    navProfileText.style.opacity = 0;
  }
});

function BtnDarkMode() {
  var bodyElement = document.body;
  let navbar = document.getElementById("Navbar");

  // `dark` tema sınıfını ekleyip/çıkar
  bodyElement.classList.toggle("dark-theme");

  // Eğer `dark-theme` sınıfı varsa, data-bs-theme özelliğini ekleyin, aksi takdirde kaldırın.
  if (bodyElement.classList.contains("dark-theme")) {
    bodyElement.setAttribute("data-bs-theme", "dark");
    navbar.style.background = "rgb(33, 37, 41,0.97)";
  } else {
    bodyElement.removeAttribute("data-bs-theme");
    navbar.style.background = "#fff";
  }
}
