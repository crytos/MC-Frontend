<template>
  <section class="portfolio">
    <div class="p-5">
      <carousel :paginationEnabled="false" :loop="true" :perPage="3" :spacePadding="5">
        <slide>
          <div class="slide" style="background-image: url('/images/home/about.jpeg');">
            <div>
              <h4>Slide Info 1</h4>
            </div>
          </div>
        </slide>
        <slide>
          <div class="slide" style="background-image: url('/images/home/about.jpeg');">
            <div>
              <h4>Slide Info 2</h4>
            </div>
          </div>
        </slide>
        <slide>
          <div class="slide" style="background-image: url('/images/home/about.jpeg');">
            <div>
              <h4>Slide Info 3</h4>
            </div>
          </div>
        </slide>
        <slide>
          <div class="slide" style="background-image: url('/images/home/about.jpeg');">
            <div>
              <h4>Slide Info 4</h4>
            </div>
          </div>
        </slide>
        <slide>
          <div class="slide" style="background-image: url('/images/home/about.jpeg');">
            <div>
              <h4>Slide Info 5</h4>
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
  /* background: linear-gradient(212deg,#1a8dce,#f9f9f9 50%); */
  height: 378px;
}
</style>