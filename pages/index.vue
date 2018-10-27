<template>
<section>
	<section class="homewrapper" id="homewrapper">
		<nav class="navbar navbar-dark bg-acent nav-invert">
			<div class="container px-md-4">
				<span class="navbar-text ml-auto small">
					Call +256 794 076 478 | info@masterconnects.com
				</span>
			</div>
		</nav>
		<nav id="nav-invert" class="navbar navbar-expand-md navbar-dark fixed-top bg-transparent mt-3 nav-invert py-0">
			<div class="container">
				<a class="navbar-brand" href="#">
					<img data-src="/images/logo/logo-white.png" class="b-lazy img-fluid" id="logo" alt="logo">
				</a>
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-collapse is-nav id="nav_collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link spy px-md-4" s-id="homewrapper" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link spy px-md-4" s-id="about" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link spy px-md-4" s-id="services" href="/services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link spy px-md-4" s-id="reviews" href="/reviews">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-md-4" s-id="chat" target="_blank" href="https://masterconnections.bitrix24.com/online/">Chat</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link spy" s-id="blog" href="/blog">Blog</a>
                        </li>
                    </ul>
                </b-collapse>
			</div>
		</nav>
		<div class="align-items-center container d-flex justify-content-around landing">
			<div class="center-box pt-5">
				<h1 class="text-light display-3">master connections</h1>
				<br>
				<p class="text-light lead">Let the masters serve you</p>
				<div class="btn-box d-flex pt-2 justify-content-center">
					<button class="btn btn-started">
						Get started
					</button>
					<button class="btn btn-lucky ml-3">
						Get lucky
					</button>
				</div>
			</div>
		</div>
        <div class="v-meeting d-none d-md-block">
            <img data-src="/images/home/meeting.svg" class="b-lazy" alt="v-meeting" id="v-meeting">
        </div>
	</section>
    <section class="info-strengths" id="started">
		<div class="container">
            <div class="section-title">
                <h2 class="text-center">Our strengths</h2>
                <div></div>
                <hr>
            </div>
            <div class="row">
                <div class="col-sm-4 d-flex flex-column align-items-center">
                    <div class="card text-center border-0 my-4 strengths animated fadeIn">
                    <div class="card-body">
                        <img data-src="/images/svg/shield-alt.svg" class="b-lazy" height="100px" alt="secure"/>
                        <h4 class="pt-2">Secure</h4>
                        <p class="lead">Your safety is our priority!
                        </p>
                        <p class="small">You need confidence in security, that's what we do.</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 d-flex flex-column align-items-center">
                    <div class="card text-center border-0 my-4 strengths animated fadeIn">
                      <div class="card-body">
                          <img data-src="/images/svg/check-circle.svg" class="b-lazy" height="100px" alt="legit"/>
                          <h4 class="pt-2">Legitmate</h4>
                          <p class="lead">Integrity is our strength!
                            </p>
                            <p class="small">Your work is our work, we keep our word.</p>
                      </div>
                    </div>
                </div>
                <div class="col-sm-4 d-flex flex-column align-items-center">
                    <div class="card text-center border-0 my-4 strengths animated fadeIn">
                        <div class="card-body">
                            <img data-src="/images/svg/thumbs-up.svg" class="b-lazy" height="100px" alt="standard"/>
                            <h4 class="pt-2">Standard</h4>
                            <p class="lead">We exceed expectations!
                            </p>
                            <p class="small">You want the best, only the masters have it.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
	</section>
    <section class="info about" id="about">
		<div class="container">
            <div class="section-title">
                <h2 class="text-center">About us</h2>
                <div></div>
                <hr>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card text-center border-0 mr-md-2 about-img-box">
                    <div class="card-body">
                        <img data-src="/images/home/about.jpeg"  alt="masterconnections" class="b-lazy about-img img-fluid">
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card text-center border-0 m1-md-2 about-info">
                    <div class="card-body">
                        <h4 class="card-title">Who we are!</h4>
                        <hr>
                        <p class="card-text">Text below as a natural lead-in to additional
                             content Lorem ipsum, dolor sit amet consectetur 
                             adipisicing elit. At esse dolorum nam quia ducimus 
                             eum praesentium perferendis inventore autem laborum 
                             sequi vel rem, porro eligendi fuga 
                             voluptatum accusamus vero minima!
                        </p>
                        <a href="#" class="btn btn-primary">Know more</a>
                    </div>
                    </div>
                </div>
            </div>
      </div>
	</section>
    <section class="services py-4" id="services">
		<div class="container">
            <div class="section-title">
                <h2 class="text-center">Services</h2>
                <div></div>
                <hr>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card text-center my-4">
                    <div class="card-body">
                        <img data-src="/images/svg/laptop.svg" class="b-lazy" height="50px" alt="secure"/>
                        <h4 class="card-title pt-2">Web apps</h4>
                        <p class="card-text text-muted">With supporting text below as a natural 
                            lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Get details</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card text-center my-4">
                    <div class="card-body">
                        <img data-src="/images/svg/mobile-alt.svg" class="b-lazy" height="50px" alt="secure"/>
                        <h4 class="card-title pt-2">Mobile apps</h4>
                        <p class="card-text text-muted">With supporting text below as a natural 
                            lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Get details</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card text-center my-4">
                    <div class="card-body">
                        <img data-src="/images/svg/cogs.svg" class="b-lazy" height="50px" alt="secure"/>
                        <h4 class="card-title pt-2">Custom systems</h4>
                        <p class="card-text text-muted">With supporting text below as a natural
                            lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Get details</a>
                    </div>
                    </div>
                </div>
            </div>
      </div>
      <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="card text-center my-4">
                    <div class="card-body">
                        <img data-src="/images/svg/cubes.svg" class="b-lazy" height="50px" alt="secure"/>
                        <h4 class="card-title pt-2">Graphics</h4>
                        <p class="card-text text-muted">With supporting text below as a 
                            natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Get details</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card text-center my-4">
                    <div class="card-body">
                        <img data-src="/images/svg/shield-alt.svg" class="b-lazy" height="50px" alt="secure"/>
                        <h4 class="card-title pt-2">Cyber security</h4>
                        <p class="card-text text-muted">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Get details</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card text-center my-4">
                    <div class="card-body">
                        <img data-src="/images/svg/handshake.svg" class="b-lazy" height="50px" alt="secure"/>
                        <h4 class="card-title pt-2">Consultations</h4>
                        <p class="card-text text-muted">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Get details</a>
                    </div>
                    </div>
                </div>
            </div>
      </div>
	</section>
    <section class="treatment py-5 my-5">
		<div class="container">
            <div class="card text-center p-4">
                <div class="card-body">
                    <h2 class="card- font-italic font-weight-normal pb-3">let us contact you <span class="primary font-weight-bold">today</span></h2>
                    <form>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Your full name e.g John Doe">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Your phone Or email address">
                            </div>
                            <div class="col-md-auto">
                                <button type="submit" class="btn btn-primary">
                                    Contact me
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
      </div>
	</section>
    <section id="reviews" class="reviews my-5">
		<div class="container">
            <div class="section-title">
                <h2 class="text-center">Reviews</h2>
                <div></div>
                <hr>
            </div>
            <div class="">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card text-center border-0 my-4">
                        <div class="card-body">
                            <img class="rounded-circle mb-2" height="100px" src="/images/home/about.jpeg" alt="">
                            <h5 class="card-title primary">Eng. Joshua Owori</h5>
                            <p class="card-text font-italic blockquote">With supporting text below as a natural 
                                lead-in to additional content.</p>
                            <p class="card-text font-italic blockquote-footer">Director Agristar</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card text-center border-0 my-4">
                        <div class="card-body">
                            <img class="rounded-circle mb-2" height="100px" src="/images/home/about.jpeg" alt="">
                            <h5 class="card-title primary">Dr. Arnest Nsimbi</h5>
                            <p class="card-text font-italic blockquote">With supporting text below as a natural 
                                lead-in to additional content.</p>
                            <p class="card-text font-italic blockquote-footer">CEO Hotel Africana</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
	</section>
    <section class="blog my-5" id="blog">
		<div class="container">
            <div class="section-title">
                <h2 class="text-center">Recent Blog Posts</h2>
                <div></div>
                <hr>
            </div>
            <div>
                <div class="row">
                    <div class="col-sm-4 blog-post">
                        <div class="card text-center border-0 my-4">
                        <img class="card-image" src="/images/home/about.jpeg" alt="">
                        <div class="card-body">
                            <h5 class="card-title primary">Eng. Joshua Owori</h5>
                            <p class="card-text font-italic blockquote">With supporting text below as a natural 
                              lead-in to additional content.</p>
                            <p class="card-text font-italic blockquote-footer">Director Agristar</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4 blog-post">
                        <div class="card text-center border-0 my-4">
                        <img class="card-image" src="/images/home/about.jpeg" alt="">
                        <div class="card-body">
                            <h5 class="card-title primary">Dr. Arnest Nsimbi</h5>
                            <p class="card-text font-italic blockquote">With supporting text below as a natural 
                                lead-in to additional content.</p>
                            <p class="card-text font-italic blockquote-footer">CEO Hotel Africana</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4 blog-post">
                        <div class="card text-center border-0 my-4">
                        <img class="card-image" src="/images/home/about.jpeg" alt="">
                        <div class="card-body">
                            <h5 class="card-title primary">Dr. Arnest Nsimbi</h5>
                            <p class="card-text font-italic blockquote">With supporting text below as a natural 
                                lead-in to additional content.</p>
                            <p class="card-text font-italic blockquote-footer">CEO Hotel Africana</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
	</section>
    <section class="footer">
        <div class="container">
            <div class="div text-center py-4 text-muted">
                <h6 class="font-weight-normal">Master Connections Inc.</h6>
                <p>All rights reserved</p>
            </div>
        </div>
    </section>
</section>
</template>

<script>
import jump from "jump.js";
import Swiper from "swiper";
if (process.browser) {
    let btnStart = document.querySelector("button.btn-started");
    btnStart.addEventListener("click", function(e) {
        e.preventDefault();
        jump("#started", {
            offset: -130
        });
    });

    var links = document.querySelectorAll(".navbar .nav-link.spy");
    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            links.forEach(a => {
                a.parentElement.classList.remove("active");
            });
            this.parentElement.classList.add("active");
            let target = `#${this.getAttribute("s-id")}`;
            console.log("target == " + target);
            jump(target, {
                offset: -100
            });
        });
    });

    var mySwiper = new Swiper(".swiper-container", {});
}
export default {};
</script>

<style scoped>
section.homewrapper {
    background: #1a8dce;
    position: relative;
    height: 587px;
    overflow: hidden;
    transition: background 0.3s ease-in-out;
}

section h2.text-center {
    font-style: italic;
}

.btn.btn-started {
    padding: 11px 23px;
    padding: 11px 23px;
    background: #fff;
    color: #1a8dce;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
}

.btn.btn-lucky {
    padding: 11px 23px;
    background: #1a8dce;
    color: #ffffff;
    border: 2px solid;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
}

.btn-box > .btn-started:hover {
    transform: translateY(-3px);
}

.btn-box > .btn-lucky:hover {
    transform: translateY(3px);
}

div.landing {
    height: inherit;
    position: relative;
    z-index: 2;
}

.landing .center-box {
    margin-top: -23%;
    text-align: center;
}

.v-meeting {
    position: absolute;
    top: 81px;
    width: 100%;
}
.v-meeting img {
    width: 100%;
}

img#logo {
    height: 78px;
    width: 130px;
    transition: transform 0.3s ease-in-out;
}

.info {
    background: #f5f5f5;
}

.info-strengths {
    background: #f9f9f9;
    padding: 2rem 0;
}

.card.strengths {
    height: 100%;
    width: 100%;
    box-shadow: -3px 3px 3px #e4e4e4;
    transition: box-shadow 0.3s ease-in-out 0.1s;
}

.card.strengths:hover {
    box-shadow: -3px 3px 32px #cfd5f3;
}

.card.strengths .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.about {
    padding: 3rem 0;
}

.about .card.about-img-box {
    box-shadow: -7px 5px 16px rgba(181, 190, 210, 0.56078);
}

.about .card.about-info {
    margin-top: 5rem !important;
    box-shadow: -7px 5px 78px rgba(181, 190, 210, 0.56078);
}

.about .card.about-info hr {
    border: 1px solid #2491cf;
}

.about .about-img {
    height: 300px;
    object-fit: cover;
    border-radius: 0.7rem;
}

.services .card {
    border-radius: 10px;
    border: 2px solid #fbfbfb !important;
    box-shadow: -7px 5px 19px rgba(181, 190, 210, 0.56078);
    transition: all 0.3s ease-in-out;
}

.services .card:hover {
    border-color: #dae6ff !important;
    box-shadow: -7px 5px 19px rgba(181, 190, 210, 0.56078);
}

.section-title {
    width: fit-content;
    margin: auto;
}

.section-title > h2 {
    color: #1a8dce;
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

.navbar-toggler-icon {
    background-color: #1a8dce;
}

section.treatment {
    background: url("/images/home/about.jpeg") #2491cf;
    background-attachment: fixed;
    background-size: cover;
}

section.treatment .card {
    border-left: 6px solid #1a8dce !important;
    border-right: 6px solid #1a8dce !important;
}

.navbar-toggler {
    border: 1px solid rgba(232, 234, 242, 0.4117647058823529);
    border-radius: 0.25rem;
}

section.reviews .card {
    box-shadow: 0px 0px 7px #f9fafb;
}

section.blog .card {
    box-shadow: 0px 0px 7px #f9fafb;
}

.blog-post img.card-image {
    object-fit: cover;
    width: 100%;
    height: 170px;
}

section.footer {
    background: #e4e4e4;
}

.b-lazy {
    opacity: 0;
    transform: scale(3);
    transition: all 500ms;
}
.b-loaded {
    opacity: 1;
    transform: scale(1);
}

.swiper-container {
    width: 600px;
    height: 300px;
}
</style>
