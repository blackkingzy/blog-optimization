<template>
  <div class="article-view">
    <suspend-panel></suspend-panel>
    <article-details></article-details>
    <article-aside></article-aside>
  </div>
</template>

<script>
import ArticleDetails from './components/Details'
import ArticleAside from './components/Aside'
import SuspendPanel from './components/SuspendPanel'
export default {
  components: {
    ArticleDetails,
    ArticleAside,
    SuspendPanel
  }
}
</script>

<style lang="scss" scoped>
.article-view {
  margin-top: 1.767rem;
  display: flex;
  justify-content: space-between;
}
</style>