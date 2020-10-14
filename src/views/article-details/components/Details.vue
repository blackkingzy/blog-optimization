<template>
  <div class="article-details">
    <article class="article">
      <h1 class="article-title">DD每周前端七题详解-第五期</h1>
      <div class="article-info">
        <el-avatar
          class="avatar-link"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <div class="info-box">
          <div class="info-box-author">张越</div>
          <div class="meta-box">
            <time class="time">2020年06月24日</time
            ><span class="views-count">阅读 2327</span>
          </div>
        </div>
      </div>
      <div class="article-cover"></div>
      <div class="article-content markdown" v-html="content"></div>
    </article>
  </div>
</template>

<script>
import marked from 'marked'
import '../styles/markdown.scss'
export default {
  components: {},
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.content = marked('# Marked in the browser\n\nRendered by **marked**.')
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
  .article-details {
    width: 700px !important;
  }
}
.article-details {
  position: relative;
  width: 100%;
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
  padding: 0 2rem;
}
.article {
  padding: 2rem 0 0;
  .article-info {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    .avatar-link {
      margin-right: 1rem;
    }
    .info-box {
      padding-top: 0.2rem;
      flex-grow: 1;
      .info-box-author {
        display: inline-block;
        font-size: 1.3rem;
        font-weight: 700;
        color: #333;
      }
      .meta-box {
        font-size: 1.1rem;
        color: #909090;
        .views-count {
          margin-left: 0.5em;
        }
      }
    }
  }
  .article-cover {
    background-image: url(https://user-gold-cdn.xitu.io/2020/6/24/172e39829a03e2b6?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1);
    background-size: cover;
    margin-bottom: 2rem;
    width: 100%;
    background-repeat: no-repeat;
  }
  .article-cover::after {
    content: '';
    display: block;
    padding-top: 56.29%;
    width: 100%;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    .article-title {
      font-size: 2rem !important;
    }
  }

  .article-title {
    margin: 0 0 0.67em 0;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.5;
  }

  .article-content {
    // background-image: linear-gradient(
    //     90deg,
    //     rgba(50, 0, 0, 0.05) 3%,
    //     rgba(0, 0, 0, 0) 3%
    //   ),
    //   linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
    // background-size: 20px 20px;
    // background-position: center center;
    // letter-spacing: 2px;
  }
}
</style>