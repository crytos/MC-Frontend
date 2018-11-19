<template>
<section>
	<section class="homewrapper" id="homewrapper">
    		<!-- <nav class="navbar navbar-dark bg-acent nav-invert">
    			<div class="container px-md-4">
    				<span class="navbar-text ml-auto small">
    					Call +256 794 076 478 | info@masterconnects.com
    				</span>
    			</div>
    		</nav> -->
            <!-- navbar -->
    		<the-nav-bar></the-nav-bar>
            <!-- landing -->
    		<the-landing></the-landing>
	</section>
    <div class="sector">
        <img src="/home/master-home.png" data-sal="zoom-in" data-sal-delay="100" data-sal-duration="300">
    </div>
    <!-- strengths -->
    <the-strengths></the-strengths>
    <!-- about us -->
    <about-us></about-us>
    <!-- services -->
    <services></services>
    <!-- portfolio -->
    <portfolio></portfolio>
    <!-- reviews -->
    <reviews></reviews>
    <!-- blog -->
    <blog></blog>
    <!-- footer -->
    <the-footer></the-footer>
</section>
</template>

<script>

import TheNavBar from "@/components/TheNavBar"
import TheLanding from "@/components/TheLanding"
import TheStrengths from "@/components/TheStrengths"
import AboutUs from "@/components/AboutUs"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Reviews from "@/components/Reviews"
import Blog from "@/components/Blog"
import TheFooter from "@/components/TheFooter"

export default {
    components:{
        TheNavBar,
        TheLanding,
        TheStrengths,
        AboutUs,
        Services,
        Portfolio,
        Reviews,
        Blog,
        TheFooter
    }
};

if (process.browser) {
    var sal = require("sal.js");
    sal();
}

</script>

<style>

section.homewrapper {
    background: url(/images/home/meeting.svg);
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: auto;
    position: relative;
    height: 455px;
    overflow: hidden;
    transition: background 0.3s ease-in-out;
}

.sector{
    background: transparent;
    position: absolute;
    z-index: 0;
}

.sector img{
    height: 300px;
    width: 100%;
}

.section-title {
    width: fit-content;
    margin: auto;
}

.section-title > h2 {
    color: #1a8dce;
    font-weight: normal;
    text-transform: uppercase;
}
.section-title > hr {
    width: 50%;
    margin: 15px auto;
}
.section-title > div {
    width: 70%;
    margin: auto;
    border-top: 2px solid;
}

.blockquote {
    font-size: 1rem !important;
}

</style>
