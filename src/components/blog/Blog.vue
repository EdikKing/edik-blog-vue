<style lang="scss">
  .sectionh4 {
    border-bottom: 1px #0e90d2 solid;
    padding-bottom: 5px;
    margin-top: 16px;
    .h4i {
      margin-right: 10px;
      color: #0e90d2;
    }
  }

</style>

<template>
  <div>
    <div id="bloglist" class="am-u-lg-9 bloglist">
      <section>
        <h4 class="sectionh4"><i class="am-icon-send am-icon-sm h4i"></i>最新文章</h4>

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

    <BlogRight></BlogRight>

  </div>
</template>

<script>
  import ArticleListItem from 'components/blog/components/ArticleListItem'
  import BlogRight from 'components/blog/components/BlogRight'

  export default {
    name: "Blog",
    components: {ArticleListItem,BlogRight},
    data: function () {
      return {
        msg: "Blog"
      };
    }
  };
</script>
