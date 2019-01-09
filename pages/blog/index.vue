<template>
  <section>
    <the-nav-bar></the-nav-bar>
    <div class="upper-wrapper">
      <div class="align-items-center d-flex justify-content-center h-100 px-5">
        <h1 class="text-light font-weight-normal display-4 title">
          <span data-sal="slide-right" data-sal-delay="100" data-sal-duration="300">Websites</span>
          <span data-sal="slide-right" data-sal-delay="500" data-sal-duration="300">Graphics</span>
          <span data-sal="slide-left" data-sal-delay="1000" data-sal-duration="300">&amp; More</span>
        </h1>
      </div>
    </div>
    <div class="lower-wrapper"></div>
    <div class="sector">
      <img
        src="/home/master-home.png"
        data-sal="zoom-in"
        data-sal-delay="100"
        data-sal-duration="300"
      >
    </div>
  </section>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";
// import TheSector from "@/components/TheSector";
export default {
  components: {
    TheNavBar
    // TheSector
  }
};
if (process.browser) {
  var sal = require("sal.js");
  sal();
}
</script>

<style scoped>
.sector {
  position: relative;
  transform: rotateX(180deg);
}
.sector img {
  height: 300px;
  width: 100%;
}

.upper-wrapper {
  height: 400px;
  z-index: 0;
  background: #1a8dce;
  position: relative;
  overflow: hidden;
}
.lower-wrapper {
  position: relative;
  z-index: 3;
  height: 600px;
  width: 75%;
  margin: auto;
  left: 0;
  right: 0;
  top: -140px;
  margin-bottom: -15rem;
  background: #fdfdff;
  box-shadow: -4px 5px 34px rgba(177, 174, 174, 0.08);
  border-radius: 10px;
}
</style>
