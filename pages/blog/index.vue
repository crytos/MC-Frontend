<template>
  <section>
    <the-nav-bar></the-nav-bar>
    <div class="upper-wrapper"></div>
    <div class="lower-wrapper"></div>
  </section>
</template>

<script>
import TheNavBar from "@/components/TheNavBar";
export default {
  components: {
    TheNavBar
  }
};
</script>

<style scoped>
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
  top: -150px;
  background: #fdfdff;
  box-shadow: -5px 10px 34px #b1aeae70;
  border-radius: 10px;
}
</style>
