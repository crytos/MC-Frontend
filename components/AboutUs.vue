<template>
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
                        <img src="/images/home/about.jpeg"  alt="masterconnections" class="b-lazy about-img img-fluid">
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
</template>
<script>
	
</script>
<style scoped>
.about {
    padding: 3rem 0;
}

.about .card.about-img-box {
    box-shadow: none;
}

.about .card.about-info {
    margin-top: 5rem !important;
    box-shadow: none;
}

.about .card.about-info hr {
    border: 1px solid #2491cf;
}

.about .about-img {
    height: 300px;
    object-fit: cover;
    border-radius: 0.7rem;
}

</style>