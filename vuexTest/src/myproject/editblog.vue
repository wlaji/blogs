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
          <li @click="myBlogs">Article management</li>
        </ul>
      </el-aside>
      <el-aside style="width:100%" class="aside-nav hide-pc">
        <h3>Content</h3>
        <ul>
          <li @click="writeBlogs">Write a blog</li>
          <li @click="myBlogs">Article management</li>
        </ul>
      </el-aside>
      <el-main class="el-main">
        <el-form :model="blogForm" :rules="blogRules" ref="blogForm" class="demo-ruleForm">
          <el-form-item prop="title">
            <el-input v-model="blogForm.title" placeholder="Enter Blog Title"></el-input>
          </el-form-item>
          <editor-blog ref="editor"></editor-blog>
          <el-form-item>
            <el-button type="primary" @click="submitForm('blogForm')" class="postBtn">Post Blog</el-button>
          </el-form-item>
        </el-form>
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
  }

  .postBtn {
    margin-top: 6em;
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
    padding: 2em;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    margin-left: 1px;
  }
}

</style>
<script>
import editorBlog from '../components/editor'
export default {
  components: {
    editorBlog
  },
  data() {
    return {
      userImg: '',
      quitLogin: false,
      username: '',
      blogForm: {
        title: '',
      },
      blogRules: {
        title: [
          { required: true, message: 'The article_title cannot be empty', trigger: 'blur' }
        ]
      }
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
    submitForm(name) {
      var con = this.$refs.editor.detailContent;
      this.$refs[name].validate((valid) => {
        if (valid) {
          let data = {
            article_title: this.blogForm.title,
            article_content: con,
            article_id: sessionStorage.article_id,
          }
          this.$post(this.$url.api.modifyBlog, data).then(res => {
            if (res.data.code == 200) {
              this.$message({
                type: 'success',
                message: 'modify blog success'
              })
              this.$router.push({
                name: 'Myblog',
              })
            } else {
              this.$message({
                type: 'error',
                message: 'modify blog failed'
              })
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: 'failed'
          });
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
    this.username = sessionStorage.username;
    this.userImg = sessionStorage.userImg;
    this.blogForm.title = sessionStorage.blogTitle;
    this.$refs.editor.detailContent = this.unescape(sessionStorage.blogContent);
  }
}

</script>
