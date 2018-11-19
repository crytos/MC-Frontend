<template>
	<section class="info-strengths" id="started">
		<div class="container">
            <!-- <div class="section-title">
                <h2 class="text-center">Our strengths</h2>
                <div></div>
                <hr>
            </div> -->
            <div class="row">
                <div class="col-sm-4 d-flex flex-column align-items-center">
                    <div class="card text-center border-0 my-4 strengths animated fadeIn">
                    <div class="card-body">
                        <img src="/images/svg/shield-alt.svg" class="b-lazy" height="100px" alt="secure"/>
                        <h4 class="pt-2 font-weight-normal">Secure</h4>
                        <p class="lead">Your safety is our priority!
                        </p>
                        <p class="small">You need confidence in security, that's what we do.</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4 d-flex flex-column align-items-center">
                    <div class="card text-center border-0 my-4 strengths animated fadeIn">
                      <div class="card-body">
                          <img src="/images/svg/check-circle.svg" class="b-lazy" height="100px" alt="legit"/>
                          <h4 class="pt-2 font-weight-normal">Legitmate</h4>
                          <p class="lead">Integrity is our strength!
                            </p>
                            <p class="small">Your work is our work, we keep our word.</p>
                      </div>
                    </div>
                </div>
                <div class="col-sm-4 d-flex flex-column align-items-center">
                    <div class="card text-center border-0 my-4 strengths animated fadeIn">
                        <div class="card-body">
                            <img src="/images/svg/thumbs-up.svg" class="b-lazy" height="100px" alt="standard"/>
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

.info-strengths {
    background: url(/home/master-home.svg);
    padding: 2rem 0;
    position: relative;
    z-index: 2;
}

.card.strengths {
    height: 100%;
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