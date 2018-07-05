<style lang="scss">
  //文章页
  .am-article {
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 20px;

    .am-article-bd {
      padding-top: 1rem;
    }
    //文章声明
    .article-statement {
      border: 1px dashed #0e90d2;
      padding: 1rem;
      p {
        font-size: 1.4rem;
        color: #999;
        margin: 0;
      }
    }

  }

  .article_time {
    position: absolute;
    top: 40px;
    margin-left: -60px;
    width: 80px;
    height: 45px;
    background-color: #e5e5e5;
    background: rgba(204, 204, 204, .4);
    text-align: center;
    line-height: 21px;

  }

  .article_time_info {
    /*
    float: left;
    margin-top: 4px;
    */
    font-size: 12px;
    color: #666;
    text-align: center;
    padding-left: 1px;
    /*
    text-indent: 10px;
    */
  }

  .article_time i {
    position: absolute;
    top: 45px;
    left: 0;
    border-color: transparent #BBB transparent transparent;
    border-style: solid;
    border-width: 0 59px 20px 0;
    height: 0;
    width: 0;
  }

  .article_title {
    margin-top: 10px;
    margin-bottom: 5px;
    padding-left: 30px;
    width: 100%;
    height: 45px;
    overflow: hidden;
    line-height: 30px;
    font-size: 18px;
    font-weight: 400;
    -webkit-box-reflect: below -40px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(10%, transparent), to(rgba(255, 255, 255, .3)));
  }

  .article_title a {
    color: #666;
  }

  .article_title a:hover {
    color: #0e90d2;
  }
</style>
<template>
  <div class="edik-article">
    <section>
      <ol class="am-breadcrumb" style="margin-bottom: 0px;margin-top: 0px;">
        <li><a href="/">首页</a></li>
        <li><a href="${U('/blog')}">程序人生</a></li>
        <li class="am-active">Cookie防篡改机制</li>
      </ol>
      <hr class="hope-hr" style="margin-top: 0px;border-color: #0e90d2;">

      <article class="am-article">
        <div class="am-article-hd">
          <h1 class="am-article-title" v-text="article.title"></h1>
          <p class="am-article-meta">
            <span class="am-icon-calendar">&nbsp;&nbsp;2018-05-22 09:44:49</span>
            &nbsp;&nbsp;
            <span class="am-icon-user">&nbsp;&nbsp;Edik</span>
            &nbsp;&nbsp;
            <span class="am-icon-bookmark">&nbsp;&nbsp;Cookie</span>
            &nbsp;&nbsp;
            <span class="am-icon-eye">&nbsp;&nbsp;11</span>
            <!--
            <eq name="Think.session.userid" value="$article.author_id">
                &nbsp;&nbsp;
                <a href="{:U('Article/update?id='.$article['id'])}" class="am-icon-pencil">&nbsp;编辑</a>
            </eq>
            -->
          </p>
        </div>

        <div class="am-article-bd articlecont">
          <div class="am-article-lead">
            为什么要做Cookie防篡改，一个重要原因是 Cookie中存储有判断当前登陆用户会话信息（Session）的会话票据-SessionID和一些用户信息。
          </div>
        </div>

        <div id="articlecont" v-md="article.content" class="am-article-bd markdown-body">

        </div>

        <div class="article-statement">
          <p>文章标题：<a href="#">Cookie防篡改机制 </a></p>
          <p>原文链接：<a href="#">Cookie防篡改机制</a></p>
          <p>转载请务必注明出处，欢迎分享</p>
        </div>

      </article>

    </section>
  </div>
</template>

<script>
  export default {
    name: 'Article',
    data:()=>{
      return{
        article:{}
      }
    },
    mounted() {
      console.log(this.$route.params.id)
      this.$http.get("/user/article", {params: {
        id: this.$route.params.id
      }}).then(res => {
        this.article = res.data
      })
    }
  }
</script>
