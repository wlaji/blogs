<template>
  <el-container class="wrap">
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
                <router-link to="/modifyPersonalData" class="focus">Account Settings</router-link>
              </li>
              <li>
                <router-link to="/Writeblog">Write a blog</router-link>
              </li>
              <li class="avatar" @mouseover="quitLogin=true" @mouseout="quitLogin=false">
                <img :src="uploadImg" alt="">
                <p v-if="quitLogin" class="quitLogin" @click="quit">Sign out</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </el-header>
    <el-container class="content">
      <el-aside style="width:20%" class="aside-nav hide-mobel">
        <h3>Account Settings Home</h3>
        <ul>
          <li class="active" @click="modifyPersonalData">Personal Information</li>
          <li @click="modifyPassword">Change Password</li>
        </ul>
      </el-aside>
      <el-aside style="width:100%" class="aside-nav hide-pc">
        <h3>Account Settings Home</h3>
        <ul>
          <li class="active" @click="modifyPersonalData">Personal Information</li>
          <li @click="modifyPassword">Change Password</li>
        </ul>
      </el-aside>
      <el-main class="el-main">
        <h3>Personal Information</h3>
        <div class="perosonInfo">
          <div class="avatar-info">
            <img :src="uploadImg" alt="">
            <p @click="dialogFormVisible  = true">Modify Avatar</p>
            <el-dialog :visible.sync="dialogFormVisible" :width="dialogWidth" top="30vh" :before-close="close">
              <template v-if="first">
                <div slot="title" class="dialog-header">
                  <h4>Upload Avatar</h4>
                </div>
                <el-upload ref="upload" class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" :on-change="beforeUpload" :auto-upload="false" :show-file-list="false">
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">Drag files here,or <em>Click to upload</em></div>
                  <div class="el-upload__tip" slot="tip">Can only upload jpg/png files</div>
                </el-upload>
              </template>
              <template v-else>
                <div slot="title" class="dialog-header">
                  <h4>Preview Avatar</h4>
                </div>
                <img :src="avatarImg" alt="" class="avatarImg">
                <div slot="footer" class="dialog-footer">
                  <el-button @click="first=true">Previous</el-button>
                  <el-button type="primary" @click="submitUpload">Save and modify</el-button>
                </div>
              </template>
            </el-dialog>
          </div>
          <div class="detail-info">
            <div class="detail-info-header">
              <p>ID:{{userId}}</p>
              <p>
                <router-link to="/myblog" class="goMyBlog">My Blog</router-link>
              </p>
            </div>
          </div>
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
  .headWrap {
    width: 100%;
    height: 3em;
    line-height: 2.9em;
    background-color: #fff;
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

  .userInfo ul li a:hover {
    color: #B0171F;
    border-bottom: 2px solid #B0171F;
  }

  .userInfo ul li a {
    color: #222;
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
    padding: 0 2em;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    margin-left: 1px;
  }

  .el-main h3 {
    padding: 1em;
    font-size: 1.43rem;
    font-weight: 600;
    border-bottom: 1px solid #ccc;
  }

  .perosonInfo {
    margin-top: 1em;
  }

  .avatar-info {
    float: left;
    width: 15%;
    text-align: center;
  }

  .avatar-info img {
    width: 4em;
    height: 4em;
    border-radius: 50%;
  }

  .avatar-info p {
    margin-top: 0.5em;
    color: #3399ea;
    cursor: pointer;
  }

  .avatar-info p:hover {
    color: #157dcf;
  }

  .detail-info {
    float: left;
    width: 85%;
    margin-top: 0.5em;
  }

  .detail-info-header p:first-child {
    float: left;
    color: #ccc;
  }

  .goMyBlog {
    float: right;
    color: #3399ea;
    cursor: pointer;
  }

  .goMyBlog:hover {
    color: #157dcf;
  }

  .avatarImg {
    display: block;
    margin: 0 auto;
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

  .active {
    background-color: #B0171F !important;
    color: #fff;
  }

  .focus {
    border-bottom: 2px solid #B0171F;
  }

  .wrap {
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

  .userInfo ul li a:hover {
    color: #B0171F;
    border-bottom: 2px solid #B0171F;
  }

  .userInfo ul li a {
    color: #222;
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
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
    margin-left: 1px;
  }

  .el-main h3 {
    padding: 1.5em;
    font-size: 1.43rem;
    font-weight: 600;
    border-bottom: 1px solid #ccc;
  }

  .perosonInfo {
    margin-top: 1em;
  }

  .avatar-info {
    float: left;
    width: 15%;
    text-align: center;
  }

  .avatar-info img {
    width: 7.14em;
    height: 7.14em;
    border-radius: 50%;
  }

  .avatar-info p {
    margin-top: 0.5em;
    color: #3399ea;
    cursor: pointer;
  }

  .avatar-info p:hover {
    color: #157dcf;
  }

  .detail-info {
    float: left;
    width: 85%;
    margin-top: 0.5em;
  }
  .detail-info-header {
    padding: 0 1em;
  }
  .detail-info-header p:first-child {
    float: left;
    color: #ccc;
  }

  .goMyBlog {
    float: right;
    color: #3399ea;
    cursor: pointer;
  }

  .goMyBlog:hover {
    color: #157dcf;
  }

  .avatarImg {
    display: block;
    margin: 0 auto;
  }
}

</style>
<script>
export default {
  data() {
    return {
      username: '',
      userId: '',
      dialogFormVisible: false,
      first: true,
      avatar: '',
      avatarImg: '',
      quitLogin: false,
      uploadImg: '',
      dialogWidth:'',
    }
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    },
    writeBlog() {
      this.$router.push({
        path: '/writeblog'
      })
    },
    modifyPersonalData() {
      this.$router.push({
        path: '/modifyPersonalData'
      })
    },
    modifyPassword() {
      this.$router.push({
        path: '/modifyPassword'
      })
    },
    beforeUpload(file) {
      let isImg = file.raw.type;
      if (isImg != 'image/jpeg' && isImg != 'image/png') {
        this.$message({
          type: 'error',
          message: 'Can only upload jpg/png files',
          duration: 1000
        })
        return false;
      } else {
        console.log(file);
        let that = this;
        var reader = new FileReader();
        reader.readAsDataURL(file.raw);
        reader.onload = function() {
          that.canvasDataURL(this.result, { width: 100, height: 100, quality: 0.7 }, function(base) {
            that.avatarImg = base;
            that.avatar = that.convertBase64UrlToBlob(base);
            that.first = false;
          })
        }
      }
    },
    submitUpload() {
      let formData = new FormData();
      formData.append("u_id", this.userId);
      formData.append("userpic", this.avatar);
      this.$uploadFile(this.$url.api.userimg, formData).then(res => {
        let data = res.data;
        console.log(data);
        if (data.code == 200) {
          this.$message({
            type: 'success',
            message: data.msg,
            duration: 1000
          })
          this.uploadImg = data.userpic_url;
          sessionStorage.userImg = data.userpic_url
        } else {
          this.$message({
            type: 'error',
            message: data.msg,
            duration: 1000
          })
        }

      })
      this.avatarImg = '';
      this.avatar = '';
      this.first = true;
      this.dialogFormVisible = false;
    },
    convertBase64UrlToBlob(urlData) {
      var arr = urlData.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
        type: mime
      });
    },
    canvasDataURL(path, obj, callback) {
      var img = new Image();
      img.src = path;
      img.onload = function() {
        var that = this;
        // 默认按比例压缩  
        var w = that.width,
          h = that.height,
          scale = w / h;
        w = obj.width || w;
        h = obj.height || (w / scale);

        var quality = 0.7; // 默认图片质量为0.7  
        //生成canvas  
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点  
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量  
        if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
          quality = obj.quality;
        }
        // quality值越小，所绘制出的图像越模糊  
        var base64 = canvas.toDataURL('image/jpeg', quality);
        // 回调函数返回base64的值  
        callback(base64);
      }
    },
    close(done) {
      this.avatarImg = '';
      this.avatar = '';
      this.first = true;
      done();
    },
    quit() {
      sessionStorage.removeItem('judge');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('userImg');
      this.$router.push({
        name: 'home'
      })
    },
  },
  mounted() {
    if(document.body.clientWidth<768){
      this.dialogWidth="95%";
    }
    if(document.body.clientWidth>768){
      this.dialogWidth="30%";
    }
    this.username = sessionStorage.username;
    this.uploadImg = sessionStorage.userImg;
    this.userId = sessionStorage.userId
  }
}

</script>
