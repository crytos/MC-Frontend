<template>
	<section class="info about" id="about">
		<div class="container">
            <div class="section-title">
                <h2 class="text-center">About us</h2>
                <div></div>
                <hr>
            </div>
            <div class="row">
                <div class="col-sm-6" data-sal="slide-down" data-sal-delay="300" data-sal-duration="1200">
                    <div class="card text-center border-0 mr-md-2 about-img-box bg-transparent">
                    <div class="card-body boxed">
                        <img src="/images/home/about.jpeg"  alt="masterconnections" class="about-img img-fluid">
                    </div>
                    </div>
                </div>
                <div class="col-sm-6" data-sal="slide-up" data-sal-delay="300" data-sal-duration="1200">
                    <div class="card text-center border-0 m1-md-2 about-info bg-transparent">
                    <div class="card-body">
                        <h4 class="card-title font-weight-normal">Who we are!</h4>
                        <hr>
                        <p class="card-text font-weight-light">Text below as a natural lead-in to additional
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
    transition: all .3s ease-in-out;
}

.about .card.about-info:hover{
    border-radius: 10px;
    border: none !important;
    box-shadow: -3px 10px 17px 2px rgba(228,228,228,0.43137);
    background: #fff !important;
}

.about .card.about-info hr {
    border: 1px solid #2491cf;
    width: 15%;
    margin: 9px auto;
}

.about .card.about-info p {
    line-height: 2;
}

.about .about-img {
    height: 300px;
    object-fit: cover;
    border-radius: 0.7rem;
    filter: grayscale(100%);
    transition: all .35s ease-in-out;
}

.about .about-img:hover{
    transform: scale(1.1);
    filter: grayscale(0);
}

.boxed{
    overflow: hidden;
}

</style>