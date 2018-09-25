<template>
  <el-container class="warpContent">
    <el-header style="padding:0" class="mobel-height">
      <div class="headWrap">
        <div class="header">
          <div class="icon">Creative center</div>
          <div class="userInfo">
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/modifyPersonalData">Account Settings</router-link>
              </li>
              <li>
                <router-link to="/Writeblog" class="focus">Write a blog</router-link>
              </li>
              <li class="avatar" @mouseover="quitLogin=true" @mouseout="quitLogin=false">
                <img :src="userImg" alt="">
                <p v-if="quitLogin" class="quitLogin" @click="quit">Sign out</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-header>
    <el-container class="content">
      <el-aside style="width:20%" class="aside-nav hide-mobel">
        <h3>Content</h3>
        <ul>
          <li @click="writeBlogs">Write a blog</li>
          <li @click="myBlogs" class="active">Article management</li>
        </ul>
      </el-aside>
      <el-aside style="width:100%" class="aside-nav hide-pc">
        <h3>Content</h3>
        <ul>
          <li @click="writeBlogs">Write a blog</li>
          <li @click="myBlogs" class="active">Article management</li>
        </ul>
      </el-aside>
      <el-main class="el-main">
        <div class="blogManage_right">
          <div class="tips" v-if="tips">
            <span>You have not posted a blog yet</span>
          </div>
          <div class="blogWrap hide-mobel" @mouseover="currentIndex=index" @mouseout="currentIndex=-1" v-for="(item,index) in items">
            <h3 class="blog_title" @click="detail(item.article_id)"> {{item.article_title}}</h3>
            <p class="blog_content" @click="detail(item.article_id)" v-html="getBlogText(unescape(item.article_content))"></p>
            <div class="left">
              <span class="addTime">{{item.article_time}}</span>&nbsp;&nbsp;
              <span>Reading number:{{item.article_click}}</span>&nbsp;&nbsp;
            </div>
            <div class="right" v-show="index==currentIndex?true:false">
              <span class="edit" @click="editBlog(item.article_id,index)">Edit</span>
              <span class="delete" @click="open(item.article_id,index)">Delete</span>
            </div>
          </div>
          <div class="blogWrap hide-pc" v-for="(item,index) in items">
            <h3 class="blog_title" @click="detail(item.article_id)"> {{item.article_title}}</h3>
            <p class="blog_content" @click="detail(item.article_id)" v-html="getBlogText(unescape(item.article_content))"></p>
            <div class="left">
              <span class="addTime">{{item.article_time}}</span>&nbsp;&nbsp;
              <span>Reading number:{{item.article_click}}</span>&nbsp;&nbsp;
            </div>
            <div class="right">
              <span class="edit" @click="editBlog(item.article_id,index)">Edit</span>
              <span class="delete" @click="open(item.article_id,index)">Delete</span>
            </div>
          </div>
          <page :info="pageInfo" @changePage="change" class="page"></page>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
@media screen and (max-width:768px) {
  .mobel-height {
    height: 3em !important;
  }
  .avatar {
    position: relative;
  }

  .quitLogin {
    position: absolute;
    top: 3em;
    right: 0;
    width: 6em;
    height: 3em;
    background-color: #fff;
    box-shadow: 0 0 2px #ccc;
    text-align: center;
  }

  .active {
    background-color: #B0171F !important;
    color: #fff;
  }

  .focus {
    border-bottom: 2px solid #B0171F;
  }

  .userInfo ul li a {
    color: #222;
  }

  .userInfo ul li a:hover {
    color: #B0171F;
    border-bottom: 2px solid #B0171F;
  }
  .headWrap {
    width: 100%;
    height: 3em;
    line-height: 2.9em;
    border-bottom: 1px solid #ccc
  }

  .icon {
    font-size: 1.2rem;
  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .userInfo ul li {
    display: inline-block;
    height: 3em;
    line-height: 2.8em;
    margin-right: 0.5em;
    cursor: pointer;
  }

  .avatar img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    vertical-align: middle;
  }

  .quit {
    color: #B0171F;
    cursor: pointer;
  }

  .quit:hover {
    text-decoration: underline;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .aside-nav {
    margin-bottom: 1em
  }

  .aside-nav h3 {
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0.6em;
    color: #222;
  }

  .aside-nav ul li {
    padding: 1em;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }

  .aside-nav ul li:hover {
    cursor: pointer;
    background-color: #b20b13;
    color: #fff;
  }
  .postBtn {
    margin-top: 9em;
  }
  .tips {
    position: relative;
    width: 100%;
    height:2em;
  }

  .tips span {
    width: 100%;
    height:2em;
    line-height: 2em;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
  }
  .el-main {
    position: relative;
    padding: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    margin-left: 1px;
  }

  .blogManage_right {
    position: relative;
    height: 100%;
  }

  .blogWrap {
    padding: 0.5em;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    margin-bottom: 1em;
  }

  .blog_title {
    font-size: 1.3rem;
    cursor: pointer;
  }

  .blog_title:hover {
    color: #B0171F;
  }

  .blog_content {
    position: relative;
    line-height: 1.5em;
    height: 4.5em;
    overflow: hidden;
    margin: 0.5em 0;
    text-align: left;
    color: #888;
    cursor: pointer;
    word-break: break-all;
  }

  .blog_content::after {
    content: "...";
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 0 1px 40px;
    background: linear-gradient(to right, transparent, #fff 70%);
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .edit,
  .delete {
    padding: 2px 5px;
    cursor: pointer;
  }

  .edit {
    border-right: 1px solid #ccc;
  }

  .delete {
    color: #990033;
  }
}

@media screen and (min-width:768px) {
  .avatar {
    position: relative;
  }

  .quitLogin {
    position: absolute;
    top: 3em;
    right: 0;
    width: 6em;
    height: 3em;
    background-color: #fff;
    box-shadow: 0 0 2px #ccc;
    text-align: center;
    z-index: 100;
  }

  .focus {
    border-bottom: 2px solid #B0171F;
  }

  .userInfo ul li a {
    color: #222;
  }

  .userInfo ul li a:hover {
    color: #B0171F;
    border-bottom: 2px solid #B0171F;
  }

  .tips {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .tips span {
    width: 20em;
    height: 5em;
    line-height: 5em;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
    text-align: center;
  }

  .page {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }

  .active {
    background-color: #B0171F !important;
    color: #fff;
  }

  .warpContent {
    height: 100vh;
    background-color: #eee;
  }

  .headWrap {
    width: 100%;
    height: 3em;
    line-height: 2.9em;
    background-color: #fff;
  }

  .icon {
    font-size: 1.5rem;
  }

  .header {
    width: 85.71em;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .userInfo ul li {
    display: inline-block;
    height: 3em;
    line-height: 2.9em;
    margin-right: 1em;
    cursor: pointer;
  }

  .avatar img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    vertical-align: middle;
  }

  .quit {
    color: #B0171F;
    cursor: pointer;
  }

  .quit:hover {
    text-decoration: underline;
  }

  .content {
    width: 85.71em;
    margin: 0 auto;
  }

  .aside-nav {
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
  }

  .aside-nav h3 {
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0.6em;
    color: #222;
  }

  .aside-nav ul li {
    padding: 1em;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }

  .aside-nav ul li:hover {
    cursor: pointer;
    background-color: #b20b13;
    color: #fff;
  }

  .el-main {
    position: relative;
    padding: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    margin-left: 1px;
  }

  .blogManage_right {
    position: relative;
    padding-bottom: 4em;
    height: 100%;
  }

  .blogWrap {
    padding: 0.5em;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    margin-bottom: 1em;
  }

  .blog_title {
    font-size: 1.3rem;
    cursor: pointer;
  }

  .blog_title:hover {
    color: #B0171F;
  }

  .blog_content {
    position: relative;
    line-height: 1.5em;
    height: 4.5em;
    overflow: hidden;
    margin: 0.5em 0;
    text-align: left;
    color: #888;
    cursor: pointer;
    word-break: break-all;
  }

  .blog_content::after {
    content: "...";
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 0 1px 40px;
    background: linear-gradient(to right, transparent, #fff 70%);
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .edit,
  .delete {
    padding: 2px 5px;
    cursor: pointer;
  }

  .edit {
    border-right: 1px solid #ccc;
  }

  .delete {
    color: #990033;
  }
}

</style>
<script>
import page from '../components/page.vue'
export default {
  components: {
    page
  },
  data() {
    return {
      userImg: '',
      quitLogin: false,
      username: '',
      flag: false,
      pageInfo: '',
      tips: false,
      items: '',
      currentIndex: -1,

    }
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    myBlogs() {
      this.$router.push({
        path: "/myblog"
      })
    },
    writeBlogs() {
      this.$router.push({
        path: "/writeblog"
      })
    },
    detail(id) {
      this.$router.push({
        name: 'BlogsDetail',
        params: {
          id: id,
        }
      })
    },
    editBlog(id, index) {
      var that = this;
      var article_id = id;
      this.$fetch(this.$url.api.getBlogInfo + article_id).then(function(res) {
        let data = res.data;
        if (data.code == 200) {
          sessionStorage.blogTitle = data.data.article_title;
          sessionStorage.blogContent = data.data.article_content;
          sessionStorage.article_id = data.data.article_id;
          that.$router.push({
            name: 'Editblog',
          })
        } else {
          alert("Article does not exist");
        }


      })
    },
    open(id, index) {
      this.$confirm('delete this blog?', {
        confirmButtonText: 'confirm',
        cancelButtonText: 'cancel',
        type: 'warning'
      }).then(action => {
        if (action == 'confirm') { //确认的回调
          this.deleteBlogs(id, index)
        }
      }).catch(err => {
        this.$message({
          type: 'info',
          message: 'cancel delete',
          duration: 1000,
        });
      });
    },
    deleteBlogs(id, index) {
      let data = {
        article_id: id
      }
      this.$post(this.$url.api.delBlog, data).then(res => {
        let data = res.data;
        this.$message({
          type: 'success',
          message: 'success deleted',
          duration: 1000,
        });
        this.items.splice(index, 1)
      })
    },
    getUserBlog(p) {
      let id = sessionStorage.userId;
      let that = this;
      this.$fetch(this.$url.api.myArticle + id + "/p/" + p).then(function(res) {
        setTimeout(function() {
          that.pageInfo = res.data;
          that.flag = true;
          if (res.data.data.length == 0) {
            that.tips = true;
          }
        }, 500)
        that.items = res.data.data;
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
    getBlogText(content) {
      let text = content;
      let rul = new RegExp("<.+?>", "g");
      text = text.replace(rul, "");
      return text
    },
    change(p) {
      this.currentIndex2 = p - 1;
      this.getUserBlog(p);
    },
    quit() {
      sessionStorage.removeItem('judge');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('userImg');
      this.$router.push({
        name: 'home'
      })
    }

  },
  mounted() {
    this.getUserBlog(1);
    this.username = sessionStorage.username;
    this.userImg = sessionStorage.userImg;
  }
}

</script>
