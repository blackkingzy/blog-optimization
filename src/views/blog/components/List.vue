<template>
  <div class="blog-list">
    <div class="article" v-for="item in data" :key="item.id">
      <router-link :to="`/post/${item.id}`" class="article_flex">
        <div class="article_content">
          <div class="article_title">
            {{ item.title }}
          </div>
          <div class="article_description">{{ item.content }}</div>
        </div>
        <div class="article_img"></div>
      </router-link>
      <div class="article_meta">
        <span class="votes_operation">
          <span class="wrap">
            <i class="el-icon-sunny"></i>
          </span>
          <span class="votes_num">6</span>
          <span class="dot">·</span>
          <span class="votes_word">赞</span>
        </span>
        <span class="article_author">zhangyue</span>
        <span class="dot">·</span>
        <span class="article_time">2020-1-16 16:51</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      data: [
        {
          id: '1',
          title: 'This is title 1',
          content:
            'this is the content, this is the content.This is the content, this is the content, this is the content, this is the content.'
        },
        {
          id: '2',
          title: 'This is title 2',
          content:
            'This is the content, this is the content, this is the content, this is the content.This is the content, this is the content, this is the content, this is the content.This is the content, this is the content, this is the content, this is the content.This is the content, this is the content, this is the content, this is the content.'
        },
        {
          id: '3',
          title: 'This is title 3',
          content: 'This is the content, '
        },
        {
          id: '4',
          title: 'This is title 4',
          content:
            'This is the content, this is the content, this is the content, this is the content.'
        },
        {
          id: '5',
          title: 'This is title 5',
          content:
            'This is the content, this is the content, this is the content, this is the content.'
        },
        {
          id: '6',
          title: 'This is title 6',
          content:
            'This is the content, this is the content, this is the content, this is the content.'
        },
        {
          id: '7',
          title: 'This is title 6',
          content:
            'This is the content, this is the content, this is the content, this is the content.'
        },
        {
          id: '8',
          title: 'This is title 6',
          content:
            'This is the content, this is the content, this is the content, this is the content.'
        },
        {
          id: '9',
          title: 'This is title 6',
          content:
            'This is the content, this is the content, this is the content, this is the content.'
        },
        {
          id: '10',
          title: 'This is title 6',
          content:
            'This is the content, this is the content, this is the content, this is the content.'
        },
        {
          id: '11',
          title: 'This is title 6',
          content:
            'This is the content, this is the content, this is the content, this is the content.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-list {
  background-color: #ffffff;
}
.article {
  border-bottom: 1px solid #eee;
  padding: 1.5rem 2rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02);
}
.article:hover {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
  border-color: transparent;
  background-color: rgba(0, 0, 0, 0.01);
}
.article_flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.article_title {
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 5px;
  color: #2e3135;
  font-size: 1.4rem;
}
.article_description {
  color: #71777c;
  line-height: 1.5;
  font-size: 1.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 15px;
}
.article_img {
  border: 1px red solid;
  width: 80px;
  height: 60px;
  border-radius: 4px;
  margin-left: 30px;
  margin-top: 10px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}
.wrap {
  font-size: 1.2rem;
  background-color: rgba(1, 126, 102, 0.08);
  color: #009a61;
  padding: 0;
  display: inline-block;
  height: 24px;
  width: 24px;
  line-height: 24px;
  text-align: center;
  margin-right: 5px;
  border-radius: 12px;
  margin-bottom: 1px;
}
.article_meta {
  font-size: 1.1rem;
  color: #71777c;
  .votes_operation {
    padding-right: 20px;
  }
}
.votes_num {
  color: #009a61;
  font-weight: bold;
}
.votes_num::before {
  content: 'x ';
  font-size: 12px;
}
.dot {
  padding: 0 5px;
}
</style>