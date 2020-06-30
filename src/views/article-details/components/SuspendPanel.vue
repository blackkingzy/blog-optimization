<template>
  <div class="article-suspended-panel">
    <div class="panel-btn" badge="20"></div>
    <div class="panel-btn" badge="3"></div>
    <div class="panel-btn"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  .article-suspended-panel {
    display: none;
  }
}
.article-suspended-panel {
  position: absolute;
  margin-left: -7rem;
  top: 16rem;
}
.panel-btn {
  position: relative;
  margin-bottom: 0.75rem;
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
  cursor: pointer;
}
.panel-btn:nth-child(-n+2):after {
  content: attr(badge);
  position: absolute;
  top: 0;
  left: 75%;
  padding: 0.1rem 0.4rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1;
  white-space: nowrap;
  color: #fff;
  background-color: #b2bac2;
  border-radius: 0.7rem;
  transform-origin: left top;
  transform: scale(0.75);
}
</style>