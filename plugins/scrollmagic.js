import Blazy from "blazy";
// import Swiper from "swiper";

if (process.browser) {
  let homewrapper = document.querySelector("#homewrapper");
  let mainnav = document.querySelector("#nav-invert");
  let logo = document.querySelector("#logo");

  window.addEventListener("scroll", function(e) {
    if (window.pageYOffset >= 15) {
      homewrapper.className = "homewrapper invert";
      mainnav.classList.remove("navbar-dark");
      logo.src = "/images/logo/logo.png";
    } else {
      homewrapper.className = "homewrapper";
      mainnav.classList.add("navbar-dark");
      logo.src = "/images/logo/logo-white.png";
    }
  });

  window.addEventListener("load", function() {
    if (window.pageYOffset >= 15) {
      homewrapper.className = "homewrapper invert";
      mainnav.classList.remove("navbar-dark");
      logo.src = "/images/logo/logo.png";
    } else {
      homewrapper.className = "homewrapper";
      mainnav.classList.add("navbar-dark");
      logo.src = "/images/logo/logo-white.png";
    }
  });

  var bLazy = new Blazy({
    // Options
  });
}
