<template>
  <div class="wrap">
    <Base-nav></Base-nav>
    <div class="mainContent" v-loading="loading1" element-loading-text="loading" element-loading-spinner="el-icon-loading" element-loading-background="rgba(255, 255, 255, 1)">
      <div class="mianTop">
        <span>Blogs</span>
      </div>
      <div class="mainHead">
        <h4>{{data.article_title}}</h4>
        <span>Time:{{data.article_time}}</span>
        <span>Views: <span style="color:#B76247FF;font-weight:700;">{{data.article_click}}</span> </span>
        <span>Author:{{u_name}}</span>
      </div>
      <div class="mainArtical">
        <p class="blogContent" v-html="blogTitle"></p>
        <p class="praise">
          <praise :article_id="article_id" :num="num" :size="50" @praised="praised" v-if="flag"></praise>
        </p>
        <p class="tips">Give a good point</p>
      </div>
      <div class="blogSpreed">
        <span class="comm" @click="toComm">Immediate comment</span>
        <share :config="config()" style="display:inline-block;"></share>
      </div>
      <newcomment :commentlist="comment" :artId="data.article_id" @fresh="freshcomm"></newcomment>
    </div>
    <Base-footer></Base-footer>
  </div>
</template>
<style scoped>
@media screen and (max-width:768px) {
  .tips {
    margin: 0.5em 0;
    text-align: center;
    color: #B0171F;
    font: italic 1.2rem Georgia, serif;
  }

  .praise {
    display: flex;
    justify-content: center;
  }

  .comm {
    color: #228B22;
    font-size: 1.2rem;
    font-weight: 700;
    margin-right: 0.8em;
  }

  .comm:hover {
    cursor: pointer;
  }
  .mainContent {
    position: relative;
    box-sizing: border-box;
    border: 1px solid #cdcdcd;
    width:99%;
    margin: 1em auto;
    background-color: #fff;
  }

  .mianTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background-color: #f2f2f2;
    border-bottom: 1px solid #c2d5e3;
  }

  .mianTop span {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 1em;
  }

  .mainHead {
    margin: 0.8em;
    border-bottom: 1px solid #ccc
  }

  .mainHead h4 {
    font-size: 1.2rem;
    margin: 0.5em 0;
  }

  .mainHead span {
    margin: 0.5em 0;
    color: #888;
    margin: 0.5em;
  }

  .mainHead>span:last-child {
    text-align: right;
  }

  .mainArtical {
    margin: 0.8em;
    border-bottom: 1px solid #ccc;
  }

  .blogContent {
    font-size: 1.1rem;
    line-height: 2em;
    color: black;
  }

  .blogSpreed {
    margin:0.5em;
    text-align: right;
  }

  .blogSpreed span {
    vertical-align: middle;
  }

  .blogSpreed img {
    margin-left: 5px;
    cursor: pointer;
    vertical-align: middle;
  }

  .blogSpreed img {}

  .blogSpreed img:hover {
    opacity: 0.6
  }
}

@media screen and (min-width:768px) {
  .tips {
    margin: 0.5em 0;
    text-align: center;
    color: #B0171F;
    font: italic 1.5rem Georgia, serif;
  }

  .praise {
    display: flex;
    justify-content: center;
  }

  .comm {
    color: #228B22;
    font-size: 1.2rem;
    font-weight: 700;
    margin-right: 0.8em;
  }

  .comm:hover {
    cursor: pointer;
  }
  .mainContent {
    position: relative;
    box-sizing: border-box;
    border: 1px solid #cdcdcd;
    width: 85.71em;
    margin: 2em auto;
    background-color: #fff;
  }

  .mianTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background-color: #f2f2f2;
    border-bottom: 1px solid #c2d5e3;
  }

  .mianTop span {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0 1em;
  }

  .mainHead {
    margin: 0.8em;
    border-bottom: 1px solid #ccc
  }

  .mainHead h4 {
    font-size: 1.2rem;
    margin: 0.5em 0;
  }

  .mainHead span {
    margin: 0.5em 0;
    color: #888;
    margin: 0.5em;
  }

  .mainHead>span:last-child {
    text-align: right;
  }

  .mainArtical {
    margin: 0.8em;
    border-bottom: 1px solid #ccc;
  }

  .blogContent {
    font-size: 1.1rem;
    line-height: 2em;
    color: black;
  }

  .blogSpreed {
    margin: 10px;
    text-align: right;
  }

  .blogSpreed span {
    vertical-align: middle;
  }

  .blogSpreed img {
    margin-left: 5px;
    cursor: pointer;
    vertical-align: middle;
  }

  .blogSpreed img {}

  .blogSpreed img:hover {
    opacity: 0.6
  }
}

</style>
<script>
import newcomment from '../components/newcomment.vue'
import praise from '../components/Praise.vue'
export default {
  components: {
    newcomment,
    praise
  },
  data() {
    return {
      show: false,
      blogTitle: '',
      time: '',
      comment: '',
      imgSrc: '',
      data: '',
      u_name: '',
      article_id: '',
      num: null,
      loading1: true,
      flag: false,
    }
  },
  methods: {
    praised() {
      this.num = parseInt(this.num) + 1;
    },
    config() {
      let config = {
        url: 'https://www.gs-jj.com', // 网址，默认使用 window.location.href
        source: '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        title: this.data.article_title, // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        description: 'GS-JJ e-commerce website is our latest venture in our effort to offer our quality products and service directly to Designer and end users.', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
        image: '', // 图片, 默认取网页中第一个img标签
        sites: ['facebook', 'twitter', 'linkedin'], // 启用的站点
        disabled: [], // 禁用的站点
      }
      return config;
    },
    freshcomm(msg) {
      if (msg.type == 0) {
        this.comment.unshift({
          id: msg.id,
          article_id: msg.article_id,
          content: msg.content,
          name: msg.name,
          addtime: msg.addtime,
          reply_id: msg.reply_id,
          email: msg.email,
          ip: msg.ip,
          user_id: msg.user_id,
          children: [],
        });

      } else if (msg.type == 1 && msg.parentIndex == null) {
        this.comment[msg.chooseIndex].children.unshift({
          id: msg.id,
          article_id: msg.article_id,
          content: msg.content,
          name: msg.name,
          addtime: msg.addtime,
          reply_id: msg.reply_id,
          email: msg.email,
          ip: msg.ip,
          user_id: msg.user_id,
          children: [],
        })
      } else if (msg.type == 1 && msg.parentIndex != null) {
        this.comment[msg.parentIndex].children[msg.chooseIndex].children.unshift({
          id: msg.id,
          article_id: msg.article_id,
          content: msg.content,
          name: msg.name,
          addtime: msg.addtime,
          reply_id: msg.reply_id,
          email: msg.email,
          ip: msg.ip,
          user_id: msg.user_id,
          children: [],
        })
      }
    },
    apiData(id) {
      var that = this;
      this.$fetch(this.$url.api.articleDetails + id).then(function(res) {
        that.u_name = res.data.name;
        var content = res.data.articleinfo.article_content;
        that.blogTitle = content;
        that.data = res.data.articleinfo;
        that.comment = res.data.commentlist;
        that.show = true;
        that.num = res.data.articleinfo.article_like;
        that.loading1 = false;
        that.flag = true;

      })
    },
    toComm() {
      window.scrollTo(0, document.documentElement.scrollHeight - document.documentElement.clientHeight)
    }
  },
  created() {

  },
  mounted() {
    var articleId = this.$route.params.id;
    this.article_id = articleId
    this.apiData(articleId);
  },
}

</script>
