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
      p{
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
    background: rgba(204,204,204,.4);
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
    -webkit-box-reflect: below -40px -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(10%,transparent),to(rgba(255,255,255,.3)));
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
          <h1 class="am-article-title">Cookie防篡改机制</h1>
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

        <div id="articlecont" class="am-article-bd">
          <h2 id="anchor-0" class="autocjs-anchor">一、为什么Cookie需要防篡改<a aria-hidden="true" class="toc-anchor-link toc-icon toc-hide" href="#anchor-0" aria-label="一、为什么Cookie需要防篡改"></a></h2>
          <p>为什么要做Cookie防篡改，一个重要原因是&nbsp;Cookie中存储有判断当前登陆用户会话信息（Session）的会话票据-SessionID和一些用户信息。当发起一个HTTP请求，HTTP请求头会带上Cookie，Cookie里面就包含有SessionID。后端服务根据SessionID，去获取当前的会话信息。如果会话信息存在，则代表该请求的用户已经登陆。服务器根据登陆用户的权限，返回请求的数据到浏览器端。</p>
          <p>因为Cookie是存储在客户端，用户可以随意修改。所以，存在一定的安全隐患。</p>
          <h2 id="anchor-1" class="autocjs-anchor">
            <a href="http://wangxiaokai.vip/posts/2018-05-21-cookie-protect/#%E4%BA%8C%E3%80%81%E4%BE%8B%E5%AD%90"></a>二、例子
            <a aria-hidden="true"
               class="toc-anchor-link toc-icon toc-hide"
               href="#anchor-1"
               aria-label="<a href=&quot;http://wangxiaokai.vip/posts/2018-05-21-cookie-protect/#%E4%BA%8C%E3%80%81%E4%BE%8B%E5%AD%90&quot;></a>二、例子"></a>
          </h2>
          <ol>
            <li>用户wall在浏览器端输入用户名密码,发起POST请求到后端服务器。后端服务器验证合法，返回Response，并Set-Cookie为sessionid=***;username=wall;。</li>
            <li>浏览器端在接收到HTTP响应后，发现Set-Cookie，将其存入本地内存或硬盘中。</li>
            <li>浏览器端再次发起请求，带上Cookie信息sessionid=***;username=wall;，请求修改自己的头像信息。</li>
            <li>服务器根据sessionid验证当前用户已登陆，根据username,查找数据库中的对应数据，修改头像信息。</li>
          </ol>
          <p>如果当前用户知道username的作用，修改username=pony。再次发起请求，则服务器接收到请求后，会去修改username为pony的数据。这样，就暴露出数据被恶意篡改的风险。</p>
          <h2 id="anchor-2" class="autocjs-anchor"><a href="http://wangxiaokai.vip/posts/2018-05-21-cookie-protect/#%E4%B8%89%E3%80%81%E9%98%B2%E7%AF%A1%E6%94%B9%E7%AD%BE%E5%90%8D"></a>三、防篡改签名<a
            aria-hidden="true" class="toc-anchor-link toc-icon toc-hide" href="#anchor-2"
            aria-label="<a href=&quot;http://wangxiaokai.vip/posts/2018-05-21-cookie-protect/#%E4%B8%89%E3%80%81%E9%98%B2%E7%AF%A1%E6%94%B9%E7%AD%BE%E5%90%8D&quot;></a>三、防篡改签名"></a></h2>
          <blockquote>服务器为每个Cookie项生成签名。如果用户篡改Cookie，则与签名无法对应上。以此，来判断数据是否被篡改。</blockquote>
          <p>原理如下：</p>
          <ul>
            <li>服务端提供一个签名生成算法secret</li>
            <li>根据方法生成签名secret(wall)=34Yult8i</li>
            <li>将生成的签名放入对应的Cookie项username=wall|34Yult8i。其中，内容和签名用|隔开。</li>
            <li>服务端根据接收到的内容和签名，校验内容是否被篡改。</li>
          </ul>
          <p>举个栗子：</p>
          <p>比如服务器接收到请求中的Cookie项username=pony|34Yult8i，然后使用签名生成算法secret(pony)=666。算法得到的签名666和请求中数据的签名不一致，则证明数据被篡改。</p>
          <h2 id="anchor-3" class="autocjs-anchor"><a
            href="http://wangxiaokai.vip/posts/2018-05-21-cookie-protect/#%E5%9B%9B%E3%80%81%E6%95%8F%E6%84%9F%E6%95%B0%E6%8D%AE%E7%9A%84%E4%BF%9D%E6%8A%A4"></a>四、敏感数据的保护<a
            aria-hidden="true" class="toc-anchor-link toc-icon toc-hide" href="#anchor-3"
            aria-label="<a href=&quot;http://wangxiaokai.vip/posts/2018-05-21-cookie-protect/#%E5%9B%9B%E3%80%81%E6%95%8F%E6%84%9F%E6%95%B0%E6%8D%AE%E7%9A%84%E4%BF%9D%E6%8A%A4&quot;></a>四、敏感数据的保护"></a>
          </h2>
          <p>鉴于Cookie的安全性隐患，敏感数据都应避免存储在Cookie。应该根据SessionID，将敏感数据存储在后端。取数据时，根据SessionID去后端服务器获取即可。另外，对一些重要的Cookie项，应该生成对应的签名，来防止被恶意篡改。</p>
          <p><br></p>
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
    name: 'article'
  }
</script>
