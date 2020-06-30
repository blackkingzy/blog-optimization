<template>
  <div class="article-aside">
    这里是侧边栏页面
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  .article-aside {
    display: none;
  }
}
.article-aside {
  width: 20rem;
  height: 20rem;
  background-color: #fff;
}
</style>