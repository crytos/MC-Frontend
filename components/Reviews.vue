<template>
	<section id="reviews" class="reviews my-5">
		<div class="container">
            <div class="row">
                <div class="col-sm-6" data-sal="slide-up" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease-out-bounce">
                    <no-ssr>
                        <!-- <carousel :paginationEnabled="false" :loop="true" :perPage="1" :autoplay="true">
                            <slide>
                                <div class="card text-center border-0 my-4">
                                    <div class="card-body">
                                        <img class="rounded-circle mb-2" height="100px" src="/images/home/about.jpeg" alt="">
                                        <h5 class="card-title primary">Eng. Joshua Owori 1</h5>
                                        <p class="card-text font-italic blockquote">With supporting text below as a natural 
                                            lead-in to additional content.</p>
                                        <p class="card-text font-italic blockquote-footer">Director Agristar</p>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="card text-center border-0 my-4">
                                    <div class="card-body">
                                        <img class="rounded-circle mb-2" height="100px" src="/images/home/about.jpeg" alt="">
                                        <h5 class="card-title primary">Eng. Joshua Owori 2</h5>
                                        <p class="card-text font-italic blockquote">With supporting text below as a natural 
                                            lead-in to additional content.</p>
                                        <p class="card-text font-italic blockquote-footer">Director Agristar</p>
                                    </div>
                                </div>
                            </slide>
                        </carousel> -->
                        <swiper :options="swiperOption" ref="reviewSwiper">
                            <!-- slides -->
                            <swiper-slide>
                                <div class="card text-center border-0 my-4">
                                    <div class="card-body">
                                        <img class="rounded-circle mb-2" height="100px" src="/images/home/about.jpeg" alt="">
                                        <h5 class="card-title primary">Eng. Joshua Owori 1</h5>
                                        <p class="card-text font-italic blockquote">With supporting text below as a natural 
                                            lead-in to additional content.</p>
                                        <p class="card-text font-italic blockquote-footer">Director Agristar</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="card text-center border-0 my-4">
                                    <div class="card-body">
                                        <img class="rounded-circle mb-2" height="100px" src="/images/home/about.jpeg" alt="">
                                        <h5 class="card-title primary">Eng. Joshua Owori 2</h5>
                                        <p class="card-text font-italic blockquote">With supporting text below as a natural 
                                            lead-in to additional content.</p>
                                        <p class="card-text font-italic blockquote-footer">Director Agristar</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="card text-center border-0 my-4">
                                    <div class="card-body">
                                        <img class="rounded-circle mb-2" height="100px" src="/images/home/about.jpeg" alt="">
                                        <h5 class="card-title primary">Eng. Joshua Owori 3</h5>
                                        <p class="card-text font-italic blockquote">With supporting text below as a natural 
                                            lead-in to additional content.</p>
                                        <p class="card-text font-italic blockquote-footer">Director Agristar</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <!-- Optional controls -->
                            <div class="swiper-pagination" slot="pagination"></div>
                            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
                            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
                            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
                        </swiper>
                    </no-ssr>
                </div>
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
                loop: true,
            }
        }
    }
};

</script>
<style scoped>

section.reviews .card {
    box-shadow: 0px 0px 7px #f9fafb;
}

</style>