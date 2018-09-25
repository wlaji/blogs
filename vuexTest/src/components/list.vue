<template>
  <div class="wrap">
    <div :class="{fade:true,'hide':hide}" @click="clear"></div>
    <div class="wrap-list">
      <ul>
        <li v-for="(item,index)  in items">
          <img :src="item.src" :alt="item.alt">
          <h3 @click="moreInfo(index)">{{item.title}}</h3>
          <div :class="{moreInfo:true,'hide':hide}" v-show="index===current">
            <img class="close" @click="clear" src="../../static/images/close.svg" alt="关闭">
            <h4>{{item.title}}</h4>
            <p>{{item.p}}</p>
            <share :config="config(item)" style="display:inline-block;"></share>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
@media(min-width: 768px) {
  .btnGroup {
    margin-top: 20px;
  }
  .hide {
    display: none;
  }
  .fade {

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: #666;
    opacity: 0.8;
    z-index: 999;
  }
  .wrap-list {
    box-sizing: border-box;
    width: 1200px;
    margin: 0 auto;
  }
  .wrap-list>ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
  .wrap-list ul li {
    box-sizing: border-box;
    width: 280px;
  }
  .wrap-list ul li>img {
    width: 280px;
    height: 190px;
  }
  .wrap-list ul li h3 {
    font-size: 20px;
    margin: 10px 0;
    cursor: pointer;
  }
  .wrap-list ul li p {
    font-size: 15px;
    color: #888;
  }
  .moreInfo {
    box-sizing: border-box;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid #C7912DFF;
    width: 500px;
    height: 400px;
    background-color: #fff;
    z-index: 1000;
  }
  .moreInfo h4 {
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 25px;
    text-align: center;
  }
  .moreInfo p {
    text-align: left;
    padding: 0 20px;
    line-height: 1.8em;
  }
  .moreInfo .close {
    width: 30px;
    height: 30px;
    float: right;
    cursor: pointer;
  }
  .moreInfo>ul {
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .moreInfo>ul li {
    width: 30px;
    height: 30px;
  }
  .moreInfo .weixin {
    margin: 10px;
  }
  .moreInfo ul li>img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .moreInfo>ul li img:hover {
    filter: opacity(0.6);
  }
}


@media(max-width: 768px) {
  .btnGroup {
    margin-top: 10px;
  }
  .hide {
    display: none;
  }
  .fade {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: #666666;
    opacity: 0.5;
    z-index: 999;
  }
  .wrap-list {
    box-sizing: border-box;
    width: 100%;
  }
  .wrap-list>ul {
    text-align: center;
  }
  .wrap-list>ul li {
    display: inline-block;
    width: 46%;
    height: 117px;
    margin: 2%;
  }
  .wrap-list ul li>img {
    width: 100%;
    height: 100%;
  }
  .wrap-list ul li h3 {
    font-size: 15px;
    margin: 5px 0;
    cursor: pointer;
  }
  .wrap-list ul li p {
    font-size: 10px;
    color: #888;
  }
  .moreInfo {
    box-sizing: border-box;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid #C7912DFF;
    width: 80%;
    height: 45%;
    background-color: #fff;
    z-index: 999;
  }
  .moreInfo h4 {
    margin-top: 20px;
    font-size: 1.5em;
    text-align: center;
  }
  .moreInfo p {
    text-align: left;
    padding: 0 10px;
    line-height: 1.8em;
    font-size: 13px;
  }
  .moreInfo .close {
    width: 20px;
    height: 20px;
    float: right;
    cursor: pointer;
  }
  .moreInfo>ul {
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .moreInfo>ul li {
    width: 30px;
    height: 30px;
  }
  .moreInfo .weixin {
    margin: 10px;
  }
  .moreInfo ul li>img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .moreInfo>ul li img:hover {
    filter: opacity(0.8);
    -webkit-tap-highlight-color: transparent;
  }
}

</style>
<script>
export default {
  props: ['items'],
  data() {
    return {
      hide: true,
      current: ""
    }

  },
  methods: {
    config(item) {
      let config = {
        url: 'https://www.gs-jj.com', // 网址，默认使用 window.location.href
        source: '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        title: item.title, // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        origin: '', // 分享 @ 相关 twitter 账号
        description: item.p, // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
        image: '', // 图片, 默认取网页中第一个img标签
        sites: ['facebook', 'twitter', 'linkedin'], // 启用的站点
        disabled: [], // 禁用的站点
        wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
        wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
      }
      return config;
    },
    moreInfo: function(index) {
      var that = this
      this.$emit('info', that, index);
    },
    clear: function() {
      this.hide = true;

    }
  },
}

</script>
