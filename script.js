const navlinks =document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",() => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click",() => menuOpenButton.click());

navlinks.forEach(link => {
  link.addEventListener("click", ()  => menuOpenButton.click());
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
    
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
     slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.querySelector("input[name='name']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const message = document.querySelector("textarea[name='message']").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Enter a valid email!");
        return;
    }

    alert("Message sent successfully ✅");

    form.reset();
});
 