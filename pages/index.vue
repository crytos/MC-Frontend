<template>
<section>
	<section class="homewrapper" id="homewrapper">
		<nav class="navbar navbar-dark bg-acent">
			<div class="container px-md-4">
				<span class="navbar-text ml-auto small">
					Call +256 794 076 478 | info@masterconnects.com
				</span>
			</div>
		</nav>
		<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-transparent mt-3">
			<div class="container">
				<a class="navbar-brand" href="#">
					<img src="/images/logo/logo-white.png" class="img-fluid" id="logo" alt="logo">
				</a>
				<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a class="nav-link px-md-4" href="index.html#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link px-md-4" href="index.html#">Services</a>
						</li>
						<li class="nav-item">
							<a class="nav-link px-md-4" href="index.html#">About</a>
						</li>
						<li class="nav-item">
							<a class="nav-link px-md-4" href="index.html#">Chat</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="index.html#">Blog</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="align-items-center container d-flex justify-content-around landing pt-5">
			<div class="center-box pt-5">
				<h1 class="text-light display-3">Master connections</h1>
				<br>
				<p class="text-light lead">Let the masters serve you</p>
				<hr class="pb-4">	
				<p class="text-light lead">Software | Graphics | Cyber security</p>
				<div class="btn-box d-flex pt-2">
					<button class="btn btn-started">
						Get started
					</button>
					<button class="btn btn-lucky ml-3">
						Get lucky
					</button>
				</div>
			</div>
			<div class="v-lady align-self-baseline">
			<img src="/images/home/business.png" alt="">
			</div>
		</div>
	</section>
	<section class="info">
		<div class="container">
			<div class="motto">
				<p class="display-3">"When you hire the masters..!"</p>
			</div>
			<div class="strengths bg-cloud mt-3">
				<div class="secure"></div>
				<div class="legit"></div>
				<div class="standard"></div>
			</div>
		</div>
	</section>
</section>
</template>

<script>
export default {};
</script>

<style scoped>
section.homewrapper {
    background: #1a8dce;
    height: 90vh;
    overflow: hidden;
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
    padding: 11px 23px;
    background: #6bbcea;
    color: #1a8dce;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
}

.btn-box > .btn-started:hover {
    transform: translateY(-3px);
    background: #6bbcea;
}

.btn-box > .btn-started:hover + .btn-lucky {
    transform: translateY(3px);
    background: #fff;
}

.btn-box > .btn-lucky:hover {
    transform: translateY(3px);
    color: #fff;
}

div.landing {
    height: inherit;
}

.landing .center-box {
    margin-top: -18%;
}

img#logo {
    height: 78px;
    width: 130px;
}

.info {
}

.info .strengths {
}

.info .strengths > div {
}
</style>
