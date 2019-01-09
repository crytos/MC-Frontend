<template>
  <nav id="nav-invert" class="fixed-top navbar navbar-dark navbar-expand-md py-0 nav-primary">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="/images/logo/logo-white.png" class="b-lazy img-fluid" id="logo" alt="logo">
        <!-- <span class="h4 text-light">Masterconnections</span> -->
      </a>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse" class="bg-acent">
        <ul class="navbar-nav ml-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link spy px-md-4" s-id="homewrapper" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Websites</a>
              <a class="dropdown-item" href="#">Web Apps</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Web Systems</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link spy px-md-4" s-id="about" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link spy px-md-4" s-id="reviews" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link spy px-md-4" s-id="about" href="#">About</a>
          </li>
        </ul>
      </b-collapse>
    </div>
  </nav>
</template>

<script>
import jump from "jump.js";

export default {};
if (process.browser) {
  var links = document.querySelectorAll(".navbar .nav-link.spy");
  links.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      links.forEach(a => {
        a.parentElement.classList.remove("active");
      });
      this.parentElement.classList.add("active");
      let target = `#${this.getAttribute("s-id")}`;
      // console.log("target == " + target);
      jump(target, {
        offset: -100
      });
    });
  });
}
</script>

<style scoped>
img#logo {
  height: 78px;
  width: 130px;
  transition: transform 0.3s ease-in-out;
}

.navbar-toggler-icon {
  background-color: #1a8dce;
}
</style>
