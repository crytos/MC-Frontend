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
	<!-- <section class="info my-2">
		<div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="card text-center border-0 my-4">
                    <div class="card-body">
                        <h4 class="card-title">Special title treatment</h4>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card text-center border-0 my-4">
                    <div class="card-body">
                        <h4 class="card-title">Special title treatment</h4>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card text-center border-0 my-4">
                    <div class="card-body">
                        <h4 class="card-title">Special title treatment</h4>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            </div>
            <hr>
      </div>
	</section> -->
    <section class="info bg-white">
		<div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card text-center border-0 my-2">
                    <div class="card-body">
                        <h2 class="card-title font-weight-light">When you let the <i>masters</i>  to serve you!</h2>
                    </div>
                    </div>
                </div>
            </div>
      </div>
	</section>
    <section class="info">
		<div class="container-fluid">
            <div class="row">
                <div class="col-sm-4 d-flex justify-content-center">
                    <div class="card text-center border-0 my-4 strengths">
                    <div class="card-body">
                        <img src="/images/svg/shield-alt.svg" height="50px" alt="secure"/>
                        <h4 class="card-title">Secure</h4>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 d-flex justify-content-center">
                    <div class="card text-center border-0 my-4 strengths">
                    <div class="card-body">
                        <img src="/images/svg/check-circle.svg" height="50px" alt="legit"/>
                        <h4 class="card-title">Legit</h4>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 d-flex justify-content-center">
                    <div class="card text-center border-0 my-4 strengths">
                    <div class="card-body">
                        <img src="/images/svg/thumbs-up.svg" height="50px" alt="standard"/>
                        <h4 class="card-title">Standard</h4>
                    </div>
                    </div>
                </div>
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
    position: relative;
    height: 587px;
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
    background: #f2f2f2;
}

.card.strengths {
    height: 11rem;
    width: 11rem;
    border-radius: 50%;
    box-shadow: -3px 3px 50px #e4e4e4;
    transition: box-shadow 0.3s ease-in-out 0.1s;
}

.card.strengths:hover {
    box-shadow: -3px 3px 62px #cfd5f3;
}

.card.strengths .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
