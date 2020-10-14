<template>
  <div class="blog-view">
    <blog-nav></blog-nav>
    <div class="blog-container">
      <router-view />
      <blog-aside></blog-aside>
    </div>
  </div>
</template>

<script>
import BlogNav from './components/Nav'
import BlogAside from './components/Aside'
export default {
  components: {
    BlogNav,
    BlogAside
  }
}
</script>

<style lang="scss" scoped>
.blog-view {
  margin-top: 5.17rem;
}

.blog-container {
  display: flex;
  justify-content: space-between;
}
</style>