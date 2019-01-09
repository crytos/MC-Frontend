<template>
  <div class="align-items-center d-flex justify-content-around landing">
    <div class="center-box pt-5">
      <h1
        class="text-light font-weight-light title"
        data-sal="slide-down"
        data-sal-duration="1000"
        data-sal-delay="1200"
      >MASTERCONNECTIONS</h1>
      <h1 class="text-light font-weight-normal display-4 title">
        <span data-sal="slide-right" data-sal-delay="100" data-sal-duration="300">Websites</span>
        <span data-sal="slide-right" data-sal-delay="500" data-sal-duration="300">Graphics</span>
        <span data-sal="slide-left" data-sal-delay="1000" data-sal-duration="300">&amp; More</span>
      </h1>
      <br>
      <p
        class="text-white lead"
        data-sal="slide-up"
        data-sal-delay="1200"
        data-sal-duration="300"
      >Let the masters serve you</p>
      <div class="btn-box d-flex pt-2 justify-content-center"></div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
div.landing {
  height: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(to top, rgba(26, 141, 206, 0.95), #1a8dce);
}

.landing .center-box {
  position: relative;
  text-align: center;
}
</style>