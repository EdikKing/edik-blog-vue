<style lang="scss">
  .article-recommend {
    padding: 0px;
    background-color: #fff;
    margin-top: 20px;
    border: 1px #0E90D2 solid;
    &-title {
      padding-left: 10px;
      margin-bottom: 0px;
      background-color: #0E90D2;
      /*background-color: #fbfbfb;*/
      color: #fff;
      /*color: #666;*/
      line-height: 32px;
    }
    .recommend_content {
      list-style: none;
      padding: 0;
      margin: 6px 0;
      font-size: 15px;
      .recommend-icon {
        color: #0e90d2;
        margin: 0 10px;
      }
      a {
        color: #666;
        &:hover {
          color: #0e90d2;
        }
      }
    }
  }

</style>
<template>
  <div class="article-recommend">
    <h4 class="article-recommend-title" v-text="title"></h4>
    <ul class="recommend_content">
      <li><i class="am-icon-bookmark recommend-icon"></i><a href="#" target="_blank" title="r.title">文章推荐</a></li>
      <li><i class="am-icon-bookmark recommend-icon"></i><a href="#" target="_blank" title="r.title">文章推荐</a></li>
      <li><i class="am-icon-bookmark recommend-icon"></i><a href="#" target="_blank" title="r.title">文章推荐</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'article-recommend',
    props:{
      title: {
        type: String,
        required: true
      }
    }
  }
</script>
