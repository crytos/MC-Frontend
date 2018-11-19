<template>
	<section class="blog my-5" id="blog">
		<div class="container">
            <div class="section-title">
                <h2 class="text-center">Recent Blog Posts</h2>
                <div></div>
                <hr>
            </div>
            <div>
                <div class="row">
                    <div class="col-sm-4 blog-post" data-sal="slide-up" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease-out-bounce">
                        <div class="card text-center border-0 my-4">
                        <img class="card-image" src="/images/home/about.jpeg" alt="">
                        <div class="card-body">
                            <h5 class="card-title primary">Eng. Joshua Owori</h5>
                            <p class="card-text font-italic blockquote">With supporting text below as a natural 
                              lead-in to additional content.</p>
                            <p class="card-text font-italic blockquote-footer">16-Dec-2018</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4 blog-post" data-sal="slide-up" data-sal-delay="400" data-sal-duration="1200" data-sal-easing="ease-out-bounce">
                        <div class="card text-center border-0 my-4">
                        <img class="card-image" src="/images/home/about.jpeg" alt="">
                        <div class="card-body">
                            <h5 class="card-title primary">Dr. Arnest Nsimbi</h5>
                            <p class="card-text font-italic blockquote">With supporting text below as a natural 
                                lead-in to additional content.</p>
                            <p class="card-text font-italic blockquote-footer">26-Nov-2018</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4 blog-post" data-sal="slide-up" data-sal-delay="600" data-sal-duration="1200" data-sal-easing="ease-out-bounce">
                        <div class="card text-center border-0 my-4">
                        <img class="card-image" src="/images/home/about.jpeg" alt="">
                        <div class="card-body">
                            <h5 class="card-title primary">Dr. Arnest Nsimbi</h5>
                            <p class="card-text font-italic blockquote">With supporting text below as a natural 
                                lead-in to additional content.</p>
                            <p class="card-text font-italic blockquote-footer">16-Nov-2018</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
	</section>
</template>
<script></script>
<style scoped>
	
section.blog .card {
    box-shadow: 0px 0px 41px #f0f8fd;
    transition: transform .3s ease-in-out;
}

section.blog .card:hover {
    transform: translateY(-10px);
}

.blog-post img.card-image {
    object-fit: cover;
    width: 100%;
    height: 170px;
}

</style>