<template>
  <div class="sector">
    <img
      src="/home/master-home.png"
      data-sal="zoom-in"
      data-sal-delay="100"
      data-sal-duration="300"
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
.sector {
  background: transparent;
  position: absolute;
  z-index: 0;
}

.sector img {
  height: 300px;
  width: 100%;
}
</style>
