/* Image scroll */
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
      spaceBetween: -200,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: -200,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

/* Navbar Photo */

window.addEventListener("scroll", function () {
  var navProfile = document.getElementById("navProfile");
  var navProfileText = document.getElementsByClassName("navProfileText");
  var scrollPosition = window.scrollY;

  // Belirli bir scroll pozisyonuna ulaşıldığında elementi gizle
  if (scrollPosition > 665) {
    navProfile.style.opacity = 0;
    navProfile.style.transition = "opacity 0.8s ease";

    // HTMLCollection üzerinde döngü ile tüm elemanlara stil uygula
    for (var i = 0; i < navProfileText.length; i++) {
      navProfileText[i].style.opacity = 1;
    }
  } else {
    navProfile.style.opacity = 1;

    // HTMLCollection üzerinde döngü ile tüm elemanlara stil uygula
    for (var i = 0; i < navProfileText.length; i++) {
      navProfileText[i].style.opacity = 0;
    }
  }
});
/****** Dark theme ******/

/* Project Icon png */
function ModalImg(imgBackground) {
  let modalImg = document.querySelectorAll(".modalImg");
  for (let img of modalImg) {
    img.src = imgBackground;
  }
}

/* Shadow color */
function ShadowBoxColor(shadowColor) {
  let shadows = document.querySelectorAll(".shadows");
  for (let shadow of shadows) {
    shadow.style.boxShadow = shadowColor;
  }
}
function MenuLinkColor(menuLink) {
  var dropdownLinks = document.querySelectorAll(".dropdown-menu li a");
  for (let links of dropdownLinks) {
    links.style.color = menuLink;
  }
}
function BtnDarkMode() {
  var bodyElement = document.body;
  let navbar = document.getElementById("Navbar");
  // `dark` tema sınıfını ekleyip/çıkar
  bodyElement.classList.toggle("dark-theme");

  // Eğer `dark-theme` sınıfı varsa, data-bs-theme özelliğini ekleyin, aksi takdirde kaldırın.
  if (bodyElement.classList.contains("dark-theme")) {
    bodyElement.setAttribute("data-bs-theme", "dark");
    navbar.style.background = "rgb(33, 37, 41,0.97)";
    modalEL.style.backgroundColor = "#343a40";
    modalEL.style.boxShadow = "0px 0px 10px rgba(273, 273, 273, 0.30)";
    ShadowBoxColor("0px 0px 10px rgba(273, 273, 273, 0.18)");
    ModalImg("images/software-engineer-icon_darkmode.png");
    dropMenuList.style.backgroundColor = "rgb(33, 37, 41,0.97)";
    MenuLinkColor("#fff");
  } else {
    bodyElement.removeAttribute("data-bs-theme");
    navbar.style.background = "#fff";
    modalEL.style.backgroundColor = "#fff";
    ShadowBoxColor("0px 0px 10px rgba(0, 0, 0, 0.18)");
    ModalImg("images/software-engineer-icon.png");
    dropMenuList.style.backgroundColor = "#ffffff";
    MenuLinkColor("#333");
  }
}

/* BUtton Mail */

const btnGonder = document.getElementById("btnGonder");
btnGonder.addEventListener("click", function () {
  if (true) swal("ARIZALI!", "En kısa sürede hizmete girecektir!", "info");
  else swal("Başarısız!", "Yakında açılacaktır!", "error");
});

/* Modal setting */

const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
let modalEL = document.getElementById("modalEl");
let overlay = document.getElementById("overlay");
let html = document.querySelector("html");

const closeModal = function () {
  modalEl.style.display = "none";
  overlay.style.display = "none";
  html.style.overflow = "auto";
};

btnOpen.addEventListener("click", () => {
  modalEl.style.display = "block";
  overlay.style.display = "block";
  html.style.overflow = "hidden";
});

btnClose.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

/* Cv Download */

document.getElementById("indirButton").addEventListener("click", function () {
  // CV dosyanızın bulunduğu yolu belirtin
  var cvDosyaYolu = "Asim_Mutlu_Cv.pdf";

  // İndirme işlemi için bir bağlantı oluşturun
  var indirLink = document.createElement("a");
  indirLink.href = cvDosyaYolu;

  // Dosyanın ismini belirtin (isteğe bağlı)
  indirLink.download = "Asim_Mutlu_Cv.pdf";

  // Bağlantıyı tıklayarak indirme işlemi başlatın
  indirLink.click();
});

/* Drop Down List açılınca arkaplan bulanıklaştır */

let btnDropMenu = document.querySelector(".btnDropMenu");
let dropMenuList = document.getElementById("dropMenuList");
let blur = document.getElementById("blur");
function blurBodyControl() {
  blur.style.display = blur.style.display === "block" ? "none" : "block";
  html.style.overflow = html.style.overflow === "hidden" ? "auto" : "hidden";
}
btnDropMenu.addEventListener("click", blurBodyControl);
blur.addEventListener("click", blurBodyControl);
dropMenuList.addEventListener("click", blurBodyControl);

let menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.contains("bi-list")
    ? menuIcon.classList.replace("bi-list", "bi-x")
    : menuIcon.classList.replace("bi-x", "bi-list");
});
