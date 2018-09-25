<template>
  <div class="wrap">
    <el-container class="content">
      <el-main class="mainBody">
        <div class="blog" v-for="(item,index) in blogs" :key="item.article_id">
          <div class="blogHead">
            <h2 @click="goPay(index)">{{item.article_title}}</h2>
            <div class="blogSpreed">
              <span style="text-decoration:underline"><i class="el-icon-xyr-morentouxiang"></i>{{item.u_name}}</span>
            </div>
          </div>
          <div class="blogContent clearfix">
            <div class="blogImgWrap">
              <div class="blogImg ">
                <img class="img1" v-if="item.article_image!=null&&item.article_image!=''" :src="item.article_image" alt="Blog picture" @click="goPay(index)">
                <img class="img2" v-else src="https://res.cloudinary.com/dehxpneyp/image/upload/v1533798854/v1_1/gs-blogs/default.png" alt="Blog picture" @click="goPay(index)">
              </div>
            </div>
            <p class="blogText" v-html="getBlogText(item.article_content)"></p>
            <p class="readMore" @click="goPay(index)">Read More>></p>
            <span class="todayData"><i class="el-icon-time" style="margin-right:0.2em"></i>{{item.article_time}}</span>
            <span class="like"><i class="el-icon-view" style="margin-right:0.2em"></i>{{item.article_click}}</span>
            <span class="praise"><i class="el-icon-xyr-dianzan" style="margin-right:0.2em"></i>{{item.article_like}}</span>
          </div>
        </div>
      </el-main>
      <el-aside class="aside hide-mobel" width="22em">
        <div class="paihang">
          <h2>Click ranking</h2>
          <ul>
            <li v-for="item in clickBlog" :key="item.article_id">
              <p class="paihang-title" @click="goDetail(item.article_id)">{{item.article_title}}</p>
              <p>
                <i class="paihang-img"><img class="img1" v-if="item.article_image!=null&&item.article_image!=''" :src="item.article_image" alt="Blog picture" @click="goDetail(item.article_id)">
                <img class="img2" v-else src="https://res.cloudinary.com/dehxpneyp/image/upload/v1533798854/v1_1/gs-blogs/default.png" alt="Blog picture" @click="goDetail(item.article_id)"></i>
                <span class="paihang-content" v-html="getBlogText(item.article_content)"></span>
              </p>
            </li>
          </ul>
        </div>
        <div class="paihang">
          <h2>Hot Blogs</h2>
          <ul>
           <li v-for="item in hotBlog" :key="item.article_id">
              <p class="paihang-title" @click="goDetail(item.article_id)">{{item.article_title}}</p>
              <p>
                <i class="paihang-img"><img class="img1" v-if="item.article_image!=null&&item.article_image!=''" :src="item.article_image" alt="Blog picture" @click="goDetail(item.article_id)">
                <img class="img2" v-else src="https://res.cloudinary.com/dehxpneyp/image/upload/v1533798854/v1_1/gs-blogs/default.png" alt="Blog picture" @click="goDetail(item.article_id)"></i>
                <span class="paihang-content" v-html="getBlogText(item.article_content)"></span>
              </p>
            </li>
          </ul>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>
<style scoped>
@media (min-width:768px) {
  .wrap {
    width: 100%;
    padding:2em 0 0 0;
  }
  .content {
    width: 85.71em;
    margin: 0 auto;
  }
  .mainBody {
    padding: 0 0 1em 0;
  }
  .aside {
    margin-left: 1em;
  }
  .el-icon-xyr-morentouxiang {
    margin-right: 0.2em;
    font-size: 1.5rem;
    color: #333;
    vertical-align: middle;
  }
  .el-icon-xyr-dianzan {
    font-size: 1.2rem;
  }
  .readMore {
    color: #082E54;
    margin-top: 10px;
    font-weight: 700;
    cursor: pointer;
  }

  .blog {
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    border: 1px solid #DCDFE6;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 4px;
    background-color: #fff;
  }
  .blog:last-child {
    margin-bottom: 0
  }

  .blogHead {
    width: 100%;
    height: 3em;
    border-bottom: 1px solid #DCDFE6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .blogHead h2 {
    font-size: 1.3rem;
    font-weight: 400;
    color: black;
    cursor: pointer;
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .blogHead h2:hover {
    text-decoration: underline;
  }

  .blogSpreed img {
    cursor: pointer;
  }

  .blogSpreed img:hover {
    opacity: 0.6
  }
  .blogContent {
    padding: 1em;
  }
  .blogImgWrap {
    width: 10em;
    height: 10em;
    overflow: hidden;
    float: left;
    margin-right: 1em;
  }
  .blog .blogImg {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all .3s linear;
  }
  .blog .blogImg .img2 {
    width: 100%;
    height: 100%;
  }
  .blog .blogImg .img1 {
    width: 100%;
    height: 100%;
  }
  .blog .blogImg:hover {
    transform: scale(1.3);
  }
  .blog .blogText {
    position: relative;
    line-height: 2em;
    height: 6em;
    overflow: hidden;
    word-break: break-all;
    color: #303133
  }
  .blog .blogText::after {
    content: "...";
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 0 1px 40px;
    background: linear-gradient(to right, transparent, #fff 70%);
  }
  .todayData,
  .like,
  .praise {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    font-size: 1.1rem;
  }
  .paihang {
    background-color: #fff;
    padding: 0 0 1em 0;
    margin-bottom: 1em;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    color:#606266;
  }
  .paihang h2 {
    padding: 0 1em;
    line-height: 3em;
    height: 3em;
    font-size: 1.3rem;
    border-bottom: 1px solid #e5e5e5;
    color: #303133;
    position: relative;
  }
  .paihang ul {
    padding: 0 1em;
  }
  .paihang ul li {
    padding: 0.5em 0;
    border-bottom: 1px solid #ccc;
  }
  .paihang ul li:hover{
    color:#303133;
  }
  .paihang-title {
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0 0 0.5em 0;
    cursor: pointer;
  }
  .paihang-title:hover{
    text-decoration: underline;
  }
  .paihang-img {
    display: block;
    overflow: hidden;
    float: left;
    width: 6em;
    height: 6em;
    margin-right: 0.5em;
    cursor: pointer;
  }
  .paihang-img img {
    width:100%;
    height:100%;
    transition: all .3s linear
  }
  .paihang-img img:hover {
    transform: scale(1.1);
  }
  .paihang-content {
    position: relative;
    display: block;
    line-height: 1.5em;
    height: 6em;
    overflow: hidden;
    word-break: break-all;
    overflow: hidden;
  }
  .paihang-content::after {
    content: "...";
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 6px 1px 40px;
    background: linear-gradient(to right, transparent, #fff 70%);
  }
}

@media (max-width:768px) {
  .mainBody {
    margin-bottom: 0.5em
  }
  .el-icon-xyr-morentouxiang {
    margin-right: 0.2em;
    font-size: 1.5rem;
    color: #333;
    vertical-align: middle;
  }
  .readMore {
    color: #082E54;
    margin-top:0.5em;
    font-weight: 700;
    cursor: pointer;
  }
  .blog {
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 5px;
    margin-bottom:0.5em;
  }

  .blogHead {
    width: 100%;
    height: 2em;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .blogHead h2 {
    font-weight: 400;
    font-size: 1.2rem;
    color: #303133;
    cursor: pointer;
    width:70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .blogContent {
    padding: 5px;
  }
  .blog .blogImg {
    width:8em;
    height: 8em;
    cursor: pointer;
    float: left;
    margin-right: 5px;
  }
  .blog .blogImg:hover {
    opacity: 0.9;
  }
  .blog .blogText {
    position: relative;
    line-height: 1.5em;
    height: 4.5em;
    overflow: hidden;
    word-break: break-all;
    font-size: 10px;
    text-align: left;
  }
  .blog .blogText::after {
    content: "...";
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 0 1px 40px;
    background: linear-gradient(to right, transparent, #fff 70%);
  }
  .blog .blogImg img {
    width: 100%;
    height: 100%;
  }
}

</style>
<script>
import praise from '../components/Praise.vue'
export default {
  props: ['blogs','clickBlog','hotBlog'],
  components: {
    praise
  },
  data() {
    return {
      blogtitle: '',
    }
  },
  methods: {

    getBlogText(content) {
      let text = this.unescape(content);
      let rul = new RegExp("<.+?>", "g");
      text = text.replace(rul, "");
      return text
    },
    goPay: function(index) {
      this.$router.push({
        name: 'BlogsDetail',
        params: {
          id: this.blogs[index].article_id
        }
      })
    },
    unescape(html) {
      var s = "";
      if (html.length == 0) return "";
      return html
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'")
        .replace(/&nbsp;/g, " ")
    },
    praised(index) {
      this.blogs[index].article_like = parseInt(this.blogs[index].article_like) + 1;
    },
    goDetail(id){
      this.$router.push({
        name: 'BlogsDetail',
        params: {
          id: id,
        }
      })
    }
  },
  mounted() {

  }
}

</script>
