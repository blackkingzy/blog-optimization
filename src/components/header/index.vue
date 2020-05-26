<template>
  <div class="main-header visible">
    <div class="header-view">
      <div>logologologologologo</div>
      <div class="menu-content">
        <el-menu
          :default-active="activeIndex"
          active-text-color="#007fff"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-menu-item index="" route="/">首页</el-menu-item>
          <el-menu-item index="photo" route="/photo">摄影</el-menu-item>
          <el-menu-item index="video" route="/video">video</el-menu-item>
          <el-menu-item index="about" route="">社交</el-menu-item>
          <el-submenu index="5">
            <template slot="title">其它</template>
            <el-menu-item index="5-1" route="/about">选项1</el-menu-item>
            <el-menu-item index="5-2" route="/about">选项2</el-menu-item>
            <el-menu-item index="5-3" route="/about">选项3</el-menu-item>
            <el-submenu index="5-4">
              <template slot="title">选项4</template>
              <el-menu-item index="5-4-1" route="/about">选项1</el-menu-item>
              <el-menu-item index="5-4-2" route="/about">选项2</el-menu-item>
              <el-menu-item index="5-4-3" route="/about">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
        <div class="line"></div>
      </div>
      <div class="search">
        <el-input v-model="input" placeholder="Enter something...">
          <el-button slot="append" icon="el-icon-search"></el-button
        ></el-input>
      </div>
      <div>
        <a href="http://www.blackyue.com" target="_blank"
          ><el-button type="primary">写文章</el-button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  computed: {
    activeIndex() {
      return this.$route.name
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 5rem;
  z-index: 250;
  transform: translate3d(0, -100%, 0);
}

.main-header.visible {
  transform: translateZ(0);
}

.header-view {
  max-width: 960px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
