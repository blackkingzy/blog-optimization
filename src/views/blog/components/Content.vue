<template>
  <div class="blog-content">
    <header class="list-header">
      <ul class="nav-list">
        <li
          @click="select('popular')"
          v-bind:class="{ active: selectItem === 'popular' }"
        >
          热门
        </li>
        <li
          @click="select('newest')"
          v-bind:class="{ active: selectItem === 'newest' }"
        >
          最新
        </li>
        <li
          @click="select('hotlist')"
          v-bind:class="{ active: selectItem === 'hotlist' }"
        >
          热榜
        </li>
      </ul>
    </header>
    <list></list>
  </div>
</template>

<script>
import List from './List'
export default {
  components: {
    List
  },
  data() {
    return {
      selectItem: 'popular'
    }
  },
  methods: {
    select(name) {
      this.selectItem = name
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-content {
  background-color: #fff;
  width: 700px;
  border-radius: 2px;
}
.list-header {
  padding: 1.3rem 1rem;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}

.nav-list {
  display: flex;
  align-items: center;
  line-height: 1;
  list-style: none;
  li {
    cursor: pointer;
    font-size: 1.17rem;
    color: #71777c;
    padding: 0 1.2rem;
    border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
  }
  .active {
    color: #007fff;
  }
}
</style>
