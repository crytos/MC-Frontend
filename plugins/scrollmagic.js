// import Blazy from "blazy";
// import Swiper from "swiper";

if (process.browser) {
  let homewrapper = document.querySelector("#homewrapper");
  let mainnav = document.querySelector("#nav-invert");
  let logo = document.querySelector("#logo");
  
  window.addEventListener("scroll", function(e) {
    if (window.pageYOffset >= 15) {
      homewrapper.className = "homewrapper invert";
      mainnav.classList.add("nav-primary");
      
    } else {
      homewrapper.className = "homewrapper";
      mainnav.classList.remove("nav-primary");
    }
  });

  window.addEventListener("load", function() {
    if (window.pageYOffset >= 15) {
      homewrapper.className = "homewrapper invert";
      mainnav.classList.add("nav-primary");
      
    } else {
      homewrapper.className = "homewrapper";
      mainnav.classList.remove("nav-primary");
    }
  });

}
