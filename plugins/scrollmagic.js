// import ScrollMagic from "scrollmagic";

if (process.browser) {
  let homewrapper = document.querySelector("#homewrapper");
  let mainnav = document.querySelector("#nav-invert");
  let logo = document.querySelector("#logo");

  window.addEventListener("scroll", function(e) {
    if (window.scrollY >= 15) {
      homewrapper.className = "homewrapper invert";
      mainnav.classList.remove("navbar-dark");
      logo.src = "/images/logo/logo.png";
    } else {
      homewrapper.className = "homewrapper";
      mainnav.classList.add("navbar-dark");
      logo.src = "/images/logo/logo-white.png";
    }
  });

  window.addEventListener("load", function(e) {
    if (window.scrollY >= 15) {
      homewrapper.className = "homewrapper invert";
      mainnav.classList.remove("navbar-dark");
      logo.src = "/images/logo/logo.png";
    } else {
      homewrapper.className = "homewrapper";
      mainnav.classList.add("navbar-dark");
      logo.src = "/images/logo/logo-white.png";
    }
  });
}
