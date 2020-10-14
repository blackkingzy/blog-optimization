<template>
  <div class="view-container">
    <header class="main-header-box visible">
      <header-menu></header-menu>
    </header>
    <main class="main-container">
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderMenu from '@/components/header'
export default {
  components: {
    HeaderMenu
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.view-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  border: 1px red solid;
}

.main-header-box {
  position: relative;
  height: 5rem;
}

.main-container {
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
</style>
