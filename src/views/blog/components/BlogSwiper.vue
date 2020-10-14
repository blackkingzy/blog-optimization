<template>
  <div class="blog_swiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(component, index) in components" :key="index"
        ><slot :name="component"></slot
      ></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'BlogSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    components: Array
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 2000,
        autoplay: {
          disableOnInteraction: false, //增加此属性即可
          delay: 3000
        },
        effect: 'cube',
        grabCursor: true,
        // cubeEffect: {  //可有可无的，因为我的外层div高度设置导致其无法显示
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94
        // },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$white: #ffffff;
.blog_swiper {
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
  height: 240px;
}
.swiper {
  width: 240px !important;
  height: 240px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -120px;
  margin-top: -120px;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    // font-size: $font-size-huge * 2;
    background-color: #2c8dfb;
    background-position: center;
    background-size: cover;
    color: $white;
  }
  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: $white;
    }
  }
}
</style>
