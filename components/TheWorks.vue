<template>
	<section class="info-strengths" id="started">
		<div class="container">
            <div class="row">
                <div class="col-md-5 d-flex flex-column align-items-center"  data-sal="zoom-in" data-sal-delay="300" data-sal-duration="300">
                    <div class="service-title">
                        <h3 class="text-center">WEBSITES</h3>
                    </div>
                    <div class="card text-center border-0 my-4 strengths rounded-circle websites-info">
                    <div class="card-body">
                        <p class="lead">
                            Corporate

                            Business

                            Personal
                        </p>
                        <a href="#" class="card-link btn btn-link">Continue</a>
                    </div>
                    </div>
                </div>
                <div class="col-md-5 offset-md-2 d-flex flex-column align-items-center pull"  data-sal="zoom-in" data-sal-delay="700" data-sal-duration="300">
                    <no-ssr> 
                        <div class="box">
                            <swiper :options="swiperOption">
                                <swiper-slide>                    
                                    <div class="card text-center border-0 my-4 strengths websites" style="background:url(/images/web-ex-1.png);">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>                    
                                    <div class="card text-center border-0 my-4 strengths websites" style="background:url(/images/web-ex-2.png);">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>  
                                    <div class="card text-center border-0 my-4 strengths websites" style="background:url(/images/web-ex-3.png);">
                                    </div>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                            </swiper>
                        </div>
                    </no-ssr>
                </div>
            </div>

            <div class="row">
                <div class="col-md-5 d-flex flex-column align-items-center pull pt-0">
                    <div class="card text-center border-0 my-4 strengths h-100 web-apps">
                        <div class="card-body" data-sal-delay="400" data-sal-duration="200">
                            <div class="web-app-3">
                                <no-ssr> 
                                    <div class="box">
                                        <swiper :options="swiperOption">
                                            <swiper-slide>  
                                                <div class="card text-center border-0 my-4 strengths websites" style="background:url(/images/web-ex-3.png);">
                                                </div>
                                            </swiper-slide>
                                            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                                        </swiper>
                                    </div>
                                </no-ssr>
                            </div>
                            <div class="web-app-3-cover">
                            </div>
                        </div>
                        <div class="card-body" data-sal-delay="300" data-sal-duration="200">
                            <div class="web-app-2">
                                <no-ssr> 
                                    <div class="box">
                                        <swiper :options="swiperOption">
                                            <swiper-slide>                    
                                                <div class="card text-center border-0 my-4 strengths websites" style="background:url(/images/web-ex-2.png);">
                                                </div>
                                            </swiper-slide>
                                            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                                        </swiper>
                                    </div>
                                </no-ssr>
                            </div>
                            <div class="web-app-2-cover">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 offset-md-2 d-flex flex-column align-items-center"  data-sal="zoom-in" data-sal-delay="300" data-sal-duration="300">
                    <div class="service-title">
                        <h3 class="text-center">WEBAPPS</h3>
                    </div>
                    <div class="card text-center border-0 my-4 strengths rounded-circle websites-info">
                        <div class="card-body">
                            <p class="lead">
                                Online Shops

                                Online Gaming

                                Online Streaming
                            </p>
                            <a href="#" class="card-link btn btn-link">Continue</a>
                        </div>
                    </div>
                    <div class="card text-center border-0 my-4 strengths web-apps-info">
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
            <div class="row">
                <div class="col-md-5 d-flex flex-column align-items-center"  data-sal="zoom-in" data-sal-delay="300" data-sal-duration="300">
                    <div class="service-title">
                        <h3 class="text-center">WEB SYSTEMS</h3>
                    </div>
                    <div class="card text-center border-0 my-4 strengths rounded-circle websites-info">
                    <div class="card-body">
                        <p class="lead">
                            School Systems

                            Inventory Systems

                            Custom Systems &amp; More
                        </p>
                        <a href="#" class="card-link btn btn-link">Continue</a>
                    </div>
                    </div>
                </div>
                <div class="col-md-5 offset-md-2 d-flex flex-column align-items-center"  data-sal="zoom-in" data-sal-delay="700" data-sal-duration="300">
                    <no-ssr> 
                        <div class="box">
                            <swiper :options="swiperOption">
                                <swiper-slide>                    
                                    <div class="card text-center border-0 my-4 strengths websites" style="background:url(/images/web-ex-1.png);">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>                    
                                    <div class="card text-center border-0 my-4 strengths websites" style="background:url(/images/web-ex-2.png);">
                                    </div>
                                </swiper-slide>
                                <swiper-slide>  
                                    <div class="card text-center border-0 my-4 strengths websites" style="background:url(/images/web-ex-3.png);">
                                    </div>
                                </swiper-slide>
                                <div class="swiper-pagination" slot="pagination"></div>
                            </swiper>
                        </div>
                    </no-ssr>
                </div>
            </div>
      </div>
	</section>
</template>
<script>
export default {
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: true,
                  },
                loop: false,
            }
        }
    }
};

</script>
<style scoped>
.info-strengths {
    position: relative;
    z-index: 2;
}

.card.websites-info{
    background: url('/images/website2.jpg');
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;
}

.card.websites{
    background-size: cover!important;
    /* overflow: hidden; */
}

.card.websites-info .card-body{
    background: #fdfdff;
}

.row{
    padding-top: 6rem;
}

.card.web-apps-info{
    background: url(/images/webapp-3.png);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
}

.card.web-apps-info .card-body{
    background: rgba(26, 141, 206, 0.14901960784313725);
}

.card.web-apps .card-body{
    padding: 0;
    position: relative;
}

.card-body .web-app-1{
    background: rgba(26, 141, 206, 0.65);
}

.card-body .web-app-2{
    background: #fff;
}

.card-body .web-app-3{
    background: rgba(26, 141, 206, 0.65);
}

.card-body .web-app-1-cover{
    position: absolute;
    height: 100%;
    width: 100%;
    background: transparent;
    z-index: 1;
}

.card-body .web-app-2-cover{
    position: absolute;
    height: 100%;
    width: 100%;
    background: transparent;
    z-index: 1;
}

.card-body .web-app-3-cover{
    position: absolute;
    height: 100%;
    width: 100%;
    background: transparent;
    z-index: 1;
}

.pull{
    padding-top: 10rem;
}

.box{
    position: relative;
    padding: 1rem;
    width: 100%;
    box-shadow: -3px 3px 79px rgba(211, 234, 251, 0.4588235294117647);
    border-radius: 10px;
}

.box .card{
    box-shadow: none !important;
    padding: 9rem 0 !important;
    border-radius: inherit;
}

.card.strengths {
    height: auto;
    width: 100%;
    box-shadow: -3px 3px 79px rgba(211, 234, 251, 0.4588235294117647);
    transition: box-shadow 0.3s ease-in-out 0.1s;
    padding: 4rem 0;
}

.card.strengths .card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>