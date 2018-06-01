<style lang="scss">
.section-bar {
  // border-bottom: 1px #0e90d2 solid;
  position: relative;
  height: 28px;
  line-height: 28px;
  border-bottom: 1px solid #ddd;
  margin-top: 16px;
  font-weight: 400;
  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #fff;
  }
  .section-title {
    position: relative;
    z-index: 2;
    display: inline-block;
    border-bottom: 1px solid #4197c9;
    height: 28px;
    line-height: 28px;
    color: #666;
    font-size: 14px;
    .h4i {
      margin-right: 10px;
      color: #0e90d2;
    }
  }
}

  .blog {
    position: relative;
    .bloglist {
      margin-right: 360px;
    }
    .blog-right {
      position: absolute;
      top: 0;
      right: 0;
      width: 360px;
    }
  }
</style>

<template>
  <div class="blog">

    <div id="bloglist" class=" bloglist">
      <section>
        <div class="section-bar">
          <h4 class="section-title"><i class="am-icon-send am-icon-sm h4i"></i>最新文章</h4>
        </div>

        <div style="height:16px;"></div>

        <ArticleListItem></ArticleListItem>
        <ArticleListItem></ArticleListItem>
        <ArticleListItem></ArticleListItem>
        <ArticleListItem></ArticleListItem>
        <ArticleListItem></ArticleListItem>
        <ArticleListItem></ArticleListItem>
        <ArticleListItem></ArticleListItem>
        <ArticleListItem></ArticleListItem>
        <ArticleListItem></ArticleListItem>

      </section>

      <div id="pages" align="right" class="am-animation-fade my-animation-delay-1" style="text-align: right">

        <ul class="am-pagination" style="display: inline"></ul>
      </div>
    </div>

    <BlogRight class="blog-right" ></BlogRight>

  </div>
</template>

<script>
import ArticleListItem from "components/blog/components/ArticleListItem";
import BlogRight from "components/blog/components/BlogRight";

export default {
  name: "Blog",
  components: { ArticleListItem, BlogRight },
  data: function() {
    return {
      msg: "Blog"
    };
  }
};
</script>
