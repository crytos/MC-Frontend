<template>
  <section>
    <section class="homewrapper" id="homewrapper">
      <!-- <nav class="navbar navbar-dark bg-acent nav-invert">
        <div class="container px-md-4">
                    <span class="navbar-text ml-auto small">
                        Call +256 794 076 478 | office@masterconnects.com
                    </span>
        </div>
      </nav>-->
      <!-- landing -->
      <the-landing></the-landing>
    </section>
    <!-- sector -->
    <the-sector></the-sector>
    <!-- strengths -->
    <the-strengths></the-strengths>
    <!-- TheWorks -->
    <the-works></the-works>
    <!-- services -->
    <!-- <services></services> -->
    <!-- portfolio -->
    <!-- <portfolio></portfolio> -->
    <!-- reviews -->
    <reviews></reviews>
    <!-- blog -->
    <!-- <blog></blog> -->
  </section>
</template>

<script>
import TheLanding from "@/components/TheLanding";
import TheStrengths from "@/components/TheStrengths";
import TheSector from "@/components/TheSector";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Blog from "@/components/Blog";
import TheWorks from "@/components/TheWorks";



export default {
  components: {
    TheLanding,
    TheStrengths,
    TheSector,
    TheWorks,
    AboutUs,
    Services,
    Portfolio,
    Reviews,
    Blog
  },
  mounted(){
    
  }
};

</script>

<style>
section.homewrapper {
  background: url(/images/home/meeting.svg);
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: auto;
  position: relative;
  height: 457px;
  overflow: hidden;
  transition: background 0.3s ease-in-out;
}

.section-title {
  width: fit-content;
  margin: auto;
  padding: 3rem 0;
}

.section-title > h2 {
  color: #1a8dce;
  font-weight: normal;
  text-transform: uppercase;
}
.section-title > hr {
  width: 10%;
  margin: 25px auto;
}
.section-title > div {
  width: 30%;
  margin: auto;
  border-top: 2px solid;
}

.blockquote {
  font-size: 1rem !important;
}
</style>
