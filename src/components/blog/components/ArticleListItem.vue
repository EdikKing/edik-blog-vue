<style lang="scss" scoped>
.article {
  margin: 10px 0px 30px 50px;
  position: relative;
  height: 165px;
  .article-item {
    display: flex;
    border: 1px rgb(231, 229, 229) solid;
    background-color: #fff;

    &:hover {
      // box-shadow: #999 0px 0px 10px;
      z-index: 2;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transform: translate3d(5px, -5px, 0);
      // border: 1px solid #0e90d2;
      // -webkit-box-shadow: #0e90d2 0px 0px 10px;
      // -moz-box-shadow: #0e90d2 0px 0px 10px;
      // box-shadow: #0e90d2 0px 0px 10px;
    }

    .original {
      position: absolute;
      //background-color: #ea141f;

      top: -8px;
      right: 40px;
      color: #fff;
      font-size: 14px;
      padding: 0px 10px;

      .corner {
        position: absolute;
        left: -10px;
        top: 0px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 8px 10px;
      }
    }
    .ori-red {
      background-color: #d7342e;
      .corner {
        border-color: transparent transparent #d7342e transparent;
      }
    }
    .ori-green {
      background-color: #4aaa4a;
      .corner {
        border-color: transparent transparent #4aaa4a transparent;
      }
    }

    .article_time {
      position: absolute;
      top: 40px;
      margin-left: -60px;
      box-sizing: content-box;
      width: 80px;
      height: 45px;
      background-color: #e5e5e5;
      background: rgba(204, 204, 204, 0.4);
      // border: 1px rgba(204, 204, 204, 0.4) solid;
      text-align: center;
      line-height: 21px;
      .article_time_info {
        font-size: 12px;
        color: #666;
        text-align: center;
        padding-left: 1px;
      }

      i {
        position: absolute;
        top: 45px;
        left: 0;
        border-color: transparent #bbb transparent transparent;
        border-style: solid;
        border-width: 0 59px 20px 0;
        height: 0;
        width: 0;
      }
    }

    .article-item-img {
      width: 240px;
      padding: 10px;
      .tem-img {
        width: 100%;
        height: 100%;
      }
    }

    .article-item-cont {
      flex: 1;

      .article_title {
        margin-top: 10px;
        margin-bottom: 0px;
        /*padding-left: 30px;*/
        width: 100%;
        height: 45px;
        overflow: hidden;
        line-height: 30px;
        font-size: 18px;
        font-weight: 400;
        -webkit-box-reflect: below -40px -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(transparent),
            color-stop(10%, transparent),
            to(rgba(255, 255, 255, 0.3))
          );
        a {
          color: #444;
          font-weight: 600;
        }
      }

      .post_public {
        .abstract-title {
          font-size: 16px;
          color: #222;
          margin: 0px 30px 10px 0px;
          padding: 10px 20px 10px 16px;
          border-left: 4px solid #39c;
          background: #f8f8f8;
        }
        .abstract {
          margin: 0px 20px 10px 0px;
          text-indent: 2em;
          line-height: 20px;
          font-size: 14px;
          color: #666;
        }
        .view-original {
          margin: 10px 20px 10px 0px;
          word-break: break-all;
          word-wrap: break-word;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #39c;
          text-decoration: none;
          .vo-icon {
            font-size: 10px;
            color: #999;
          }
        }
      }

      .article_info {
        width: 100%;
        /*height: 30px;*/
        padding: 16px 20px 0px 0px;
        /*line-height: 30px;*/
        line-height: 0;
        font-size: 12px;
        display: flex;
        .article_tags {
          flex: 1;
          color: #999;
        }
        .article_edit {
          flex: 1;
          color: #39c;
          margin-right: 10px;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
}
</style>
<template>
  <article class="article ">

    <div class="article-item shadow">
      <div class="original ori-red">
        原创
        <div class="corner"></div>
      </div>
      <!--<div v-else class="original ori-green" style="background-color: #4aaa4a">-->
      <!--转载-->
      <!--<div class="corner"></div>-->
      <!--</div>-->
      <div class="article_time">
        <span class="article_time_info">2018-05-22</span>
        <br>
        <span class="article_time_info">星期二</span>
        <i></i>
      </div>

      <div class="article-item-img">
        <img class="tem-img" src="./cookie.png" alt="">
      </div>

      <div class="article-item-cont">
        <h2 class="article_title"><a href="#" rel="bookmark" target="_blank">Cookie防篡改机制</a></h2>
        <section class="post_public">
          <!--<h2 class="abstract-title">文章摘要</h2>-->
          <p class="abstract">为什么要做Cookie防篡改，一个重要原因是 Cookie中存储有判断当前登陆用户会话信息（Session）的会话票据-SessionID和一些用户信息。</p>
          <a href="" class="view-original" target="_blank">查看全文&nbsp;<i class="am-icon-chain vo-icon"></i></a>
        </section>
        <div class="article_info">
          <p class="article_tags">标签：Cookie</p>
          <span class="article_edit">6人阅读</span>
        </div>
      </div>


    </div>
  </article>
</template>

<script>
export default {
  name: "article-list-item"
};
</script>
