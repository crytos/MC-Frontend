<template>
  <div>
    <!-- navbar -->
    <the-nav-bar></the-nav-bar>
    <nuxt/>
    <!-- footer -->
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheNavBar from "@/components/TheNavBar";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheNavBar,
    TheFooter
  }
};
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
