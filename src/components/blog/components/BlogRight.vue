<template>
  <div id="addarticle" >
    <div class="am-u-lg-12 proright">

      <div class="am-u-lg-12 am-u-sm-12 am-u-md-12 " style="padding: 0;margin: 0px;">
          <div class="am-input-group am-input-group-primary">

            <input type="text" class="am-form-field" placeholder="关键字搜索">
            <span class="am-input-group-label"><i class="am-icon-search "></i></span>
          </div>
      </div>
      <div style="height: 40px;"></div>

<!--
      <div class="right-titile right-wzfl" style="margin-top: 60px">
        <h4>文章分类</h4>
        <div id="tag_cloud_widget">
          <a href="#" class="tag-link-6 tag-link-position-1" title="a.name" style="font-size: 14px;">12345</a>
          <a href="#" class="tag-link-6 tag-link-position-1" title="a.name" style="font-size: 14px;">12345</a>
          <a href="#" class="tag-link-6 tag-link-position-1" title="a.name" style="font-size: 14px;">12345</a>
        </div>
      </div>
      -->


      <ArticleRecommend title="文章推荐"></ArticleRecommend>
      <ArticleRecommend title="热评文章"></ArticleRecommend>

      <!--
      <div class="right-titile">
        <h4>最近访客</h4>
        <ul class="visitor">
          <li>
            <img src="v.face" alt="v.nickname" title="v.nickname">
          </li>
        </ul>
      </div>
      -->

    </div>


  </div>
</template>

<script>
  import ArticleRecommend from './ArticleRecommend'
  export default {
    name: 'blog-right',
    components:{ArticleRecommend}
  }
</script>

<style scoped>

</style>
