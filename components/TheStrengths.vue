<template>
	<section class="info-strengths" id="started">
		<div class="container">
            <!-- <div class="section-title">
                <h2 class="text-center">Our strengths</h2>
                <div></div>
                <hr>
            </div> -->
            <div class="row">
                <div class="col-sm-4 d-flex flex-column align-items-center"  data-sal="zoom-in" data-sal-delay="300" data-sal-duration="300">
                    <div class="card text-center border-0 my-4 strengths">
                    <div class="card-body">
                        <img src="/images/svg/shield-alt.svg" class="b-lazy" height="80px" alt="secure"/>
                        <h4 class="pt-2 font-weight-normal">Secure</h4>
                        <p class="lead">Your safety is our priority!
                        </p>
                        <p class="small">You need confidence in security, that's what we do.</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 d-flex flex-column align-items-center pull-1"  data-sal="zoom-in" data-sal-delay="500" data-sal-duration="300">
                    <div class="card text-center border-0 my-4 strengths">
                      <div class="card-body">
                          <img src="/images/svg/check-circle.svg" class="b-lazy" height="80px" alt="legit"/>
                          <h4 class="pt-2 font-weight-normal">Legitmate</h4>
                          <p class="lead">Integrity is our strength!
                            </p>
                            <p class="small">Your work is our work, we keep our word.</p>
                      </div>
                    </div>
                </div>
                <div class="col-sm-4 d-flex flex-column align-items-center pull-2"  data-sal="zoom-in" data-sal-delay="700" data-sal-duration="300">
                    <div class="card text-center border-0 my-4 strengths">
                        <div class="card-body">
                            <img src="/images/svg/thumbs-up.svg" class="b-lazy" height="80px" alt="standard"/>
                            <h4 class="pt-2 font-weight-normal">Standard</h4>
                            <p class="lead">We exceed expectations!
                            </p>
                            <p class="small">You want the best, only the masters have it.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
	</section>
</template>
<script></script>
<style scoped>
.info {
    background: #f5f5f5;
}

.pull-1{
    padding-top: 3rem;
}

.pull-2{
    padding-top: 5rem;
}

.info-strengths {
    background: url(/home/master-home.svg);
    position: relative;
    z-index: 2;
}

.card.strengths {
    height: auto;
    width: 100%;
    box-shadow: -3px 3px 79px rgba(211, 234, 251, 0.4588235294117647);
    transition: box-shadow 0.3s ease-in-out 0.1s;
}

.card.strengths .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>