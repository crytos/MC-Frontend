<template>
  <section class="portfolio">
    <div class="p-5">
      <carousel :autoplay="true" :paginationEnabled="false" :loop="true" :speed="1000">
        <slide>
          <div class="slide" style="background-image: url('/images/home/about.jpeg');">
            <div>
              <h4>Slide 1</h4>
            </div>
          </div>
        </slide>
        <slide>
          <div class="slide" style="background-image: url('/images/home/about.jpeg');">
            <div>
              <h4>Slide 2</h4>
            </div>
          </div>
        </slide>
        <slide>
          <div class="slide" style="background-image: url('/images/home/about.jpeg');">
            <div>
              <h4>Slide 3</h4>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.slide {
  position: relative;
  height: -webkit-fill-available;
  background-size: cover;
  background-position: center;
  color: #fff;
}
section.portfolio {
  background: url("/images/home/about.jpeg") #2491cf;
  background-attachment: fixed;
  background-size: cover;
}

section.portfolio .card {
  border-left: 6px solid #1a8dce !important;
  border-right: 6px solid #1a8dce !important;
}

.portfolio > div {
  background: linear-gradient(to right, #1a8dce, #1a8dce70);
  height: 378px;
}
</style>