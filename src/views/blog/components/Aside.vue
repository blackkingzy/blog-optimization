<template>
  <aside class="aside">
    <clock></clock>
    <blog-swiper :components="componentlist">
      <template v-slot:BlogInfo><blog-info></blog-info></template>
      <template v-slot:BlogNotice><blog-notice></blog-notice></template>
    </blog-swiper>
    <div class="study_item">study</div>
  </aside>
</template>

<script>
import clock from './Clock'
import BlogSwiper from './BlogSwiper'
import BlogInfo from './BlogInfo'
import BlogNotice from './BlogNotice'
export default {
  components: {
    clock,
    BlogSwiper,
    BlogInfo,
    BlogNotice
  },
  data() {
    return {
      componentlist: ['BlogInfo', 'BlogNotice']
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  .aside {
    display: none;
  }
}
.aside {
  width: 20rem;
}

.study_item {
  height: 300px;
  margin-bottom: 1.3rem;
  background-color: #fff;
}

.addClass {
  top: 67px;
  position: fixed;
  width: inherit;
  transition: top 0.2s;
}

.addClass.top {
  top: 127px;
}
</style>