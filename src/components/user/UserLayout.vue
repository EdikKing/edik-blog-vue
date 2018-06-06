<style lang="scss" scoped>
  .sectionh4 {
    border-bottom: 1px #0e90d2 solid;
    padding-bottom: 5px;
  }

  .footer {
    background-color: #555;
    width: 100%;
  }

  .footer a {
    color: #999;
  }

  .footer a:hover{
    color: #FFFFFF;
  }

  .footer p {
    color: #999;
    margin: 0;
    padding: 5px 0px 5px 0px;
    text-align: center;
    background: #555;
    font-size: 14px;
  }


</style>

<template>
  <div>
    <header id="amz-header" class="am-topbar am-topbar-inverse">
      <div class="am-container">
        <h1 class="am-topbar-brand" style="padding-left: 0px;padding-top: 13px;line-height: 0px;">
          <a href="/"><img src="../../assets/img/edik-logo.png" style="height: auto;width: 100px;"></a>
        </h1>

        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse'}">
          <span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span>
        </button>

        <div class="am-collapse am-topbar-collapse am-topbar-right" id="doc-topbar-collapse" style="margin-right: 0px;">
          <ul class="am-nav am-nav-pills am-topbar-nav" style="margin-right: 10px">
            <li class='am-active'><a href="/">博客</a></li>
            <li><a href="#">留言板</a></li>
            <!--
            <li class="am-dropdown" data-am-dropdown>
              <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
                下拉 <span class="am-icon-caret-down"></span>
              </a>
              <ul class="am-dropdown-content">
                <li class="am-dropdown-header">标题</li>
                <li><a href="#">1. 去月球</a></li>
                <li class="am-active"><a href="#">2. 去火星</a></li>
                <li><a href="#">3. 还是回地球</a></li>
                <li class="am-disabled"><a href="#">4. 下地狱</a></li>
                <li class="am-divider"></li>
                <li><a href="#">5. 桥头一回首</a></li>
              </ul>
            </li>
            -->
          </ul>

          <div class="am-topbar-right">
            <a href="javascript:login();">
              <button class="am-btn am-btn-secondary am-topbar-btn am-btn-sm">
                <span class="am-icon-user"></span>
                &nbsp;&nbsp;登录
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!--<div class="get">-->
    <!--<div class="am-container am-scrollspy-init am-scrollspy-inview am-animation-scale-up" data-am-scrollspy="{animation: 'scale-up', repeat: false}">-->
    <!--<h1 class="get-title">任何事情，从现在开始做都不晚！</h1>-->
    <!--<p>永远相信，美好的事情，即将发生！</p>-->
    <!--</div>-->
    <!--</div>-->

    <div id="content" class=" am-container" >
      <router-view/>
    </div>

    <footer class="footer">
      <p>
        <span style="color: #00CC00;">友情链接：</span>
        <a href="http://www.holdcode.com" target="_blank" title="好酷网，分享Web编程开发中常用的程序代码！">好酷网</a>

        &nbsp;&nbsp;
        <a href="http://www.52itstyle.com" target="_blank" title="享受科技，热爱生活！">科帮网</a>
        &nbsp;&nbsp;
        <a href="http://iterabc.com" title="做坚定持久的学习者！" target="_blank">程序人生</a>
        &nbsp;&nbsp;
        <a href="http://zgboke.com/" title="收录国内优秀独立博客！" target="_blank">中国博客联盟</a>
      </p>
      <p>
        © 2015-2016 <a href="https://www.edik.cn" target="_blank">Edik</a> <a href="http://www.miitbeian.gov.cn" target="_blank">鲁ICP备:15008234号-1</a>  edik.cn
        <a href="${U('/update')}" target="_blank" style="color: #B46DEF;">更新日志</a>
      </p>
      <p>
        <img style="height: 30px;" src="../../assets/img/txyaqrz.png">
      </p>
    </footer>

  </div>
</template>

<script>
  export default {
    name: "UserLayout",
    data: function () {
      return {
        msg: "Blog"
      };
    }
  };
</script>
