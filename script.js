window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 10);
  });

  const menuBtn = document.querySelector(".menuBtn");
  const navigation = document.querySelector(".navigation");
  const navigationItem = document.querySelectorAll(".navigation a ");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });

  navigationItem.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });

  const scrollBtn = document.querySelector(".scrollToTop-btn");
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } 
      // else {
      //   reveals[i].classList.remove("active");
      // }
    }
  });
});
