<template>
	<nav id="nav-invert" class="fixed-top navbar navbar-dark navbar-expand-md py-0">
		<div class="container">
			<a class="navbar-brand" href="#">
				<img src="/images/logo/logo-white.png" class="b-lazy img-fluid" id="logo" alt="logo">
                <!-- <span class="h4 text-light">Masterconnections</span> -->
			</a>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-collapse is-nav id="nav_collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link spy px-md-4" s-id="homewrapper" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link spy px-md-4" s-id="about" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link spy px-md-4" s-id="services" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link spy px-md-4" s-id="reviews" href="#">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link px-md-4" s-id="chat" target="_blank" href="https://masterconnections.bitrix24.com/online/">Chat</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link spy" s-id="blog" href="#">Blog</a>
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
