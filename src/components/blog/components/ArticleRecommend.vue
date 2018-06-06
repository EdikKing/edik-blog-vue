<style lang="scss">
  .article-recommend {
    padding: 0px;
    background-color: #fff;
    margin-top: 20px;
     border: 1px #0E90D2 solid;
    /*border: 1px solid #eaeaea;*/
    &-title {
      padding-left: 10px;
      margin-bottom: 0px;
      background-color: #0E90D2;
      /*background-color: #fbfbfb;*/
      /*border-bottom: 1px solid #eaeaea;*/
       color: #fff;
      /*color: #666;*/
      line-height: 40px;
      font-weight: 500;
      font-size: 18px;
    }
    .recommend_content {
      list-style: none;
      padding: 0;
      margin: 0px 0;
      font-size: 14px;
      li {
        border-bottom: solid 1px #eee;
        // border-bottom: dashed 1px #d7d9dc;
        &:last-child {
          border: 0;
        }

        a {
          display: inline-block;
          color: #555;
          font-size: 14px;
          line-height: 37px;
          padding: 0 10px;
          font-weight: 500;
          &:hover {
            color: #0e90d2;
            transform: translate3d(-5px, 0, 0);
          }
          .recommend-icon {
            // color: #0e90d2;

            margin: 0 10px;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="article-recommend">
    <h4 class="article-recommend-title" v-text="title"></h4>
    <ul class="recommend_content">
      <li v-for="i in 5" :key="i">
        <a href="#" target="_blank" title="r.title">
          <!--<i class="am-icon-bookmark recommend-icon"></i>-->
          文章推荐
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "article-recommend",
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
</script>
