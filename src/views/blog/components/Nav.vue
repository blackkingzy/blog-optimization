<template>
  <div class="view-nav">
    <ul class="nav-list">
      <template v-for="(item, index) in labelList">
        <li
          class="nav-item"
          :key="index"
          @click="select(item)"
          v-bind:class="{ active: selectItem === item }"
        >
          <router-link :to="`/blog/${item}`">{{ item }}</router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      selectItem: 'recommend',
      labelList: ['recommend', 'frontend', 'backend', 'node', 'css', 'note']
    }
  },
  computed: {},
  methods: {
    select(name) {
      this.selectItem = name
    }
  }
}
</script>

<style lang="scss" scoped>
.view-nav {
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 5rem;
  width: 100%;
  height: 3.833rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  transform: translateZ(0);
}

.view-nav.top {
  transform: translate3d(0, -5rem, 0);
}
.nav-list {
  max-width: 960px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  line-height: 1;
  list-style: none;
  :first-child {
    padding: 0 1rem 0 0;
  }
}
.nav-item {
  cursor: pointer;
  font-size: 1.16rem;
  color: #71777c;
  padding: 0 1rem;
}
.nav-item.active {
  color: #007fff;
}
</style>
