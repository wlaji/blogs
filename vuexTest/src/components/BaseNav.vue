<template>
  <div class="wrap">
    <el-row class="content">
      <div class="hide-mobel">
        <el-col :xs="6" :sm="4" :md="6" :lg="6" style="textAlign:left;height:5.71em">
          <a href="http://www.customembroideredpatches.com/"><img class="logoImg" src="https://res.cloudinary.com/dehxpneyp/image/upload/v1533798854/v1_1/gs-blogs/default.png" alt="logo"></a>
        </el-col>
        <el-col :xs="12" :sm="14" :md="12" :lg="12">
          <ul class="nav">
            <li>
              <router-link to="/" exact>Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <el-dropdown @command="handleCommand">
                <router-link to="/products"> Products<i class="el-icon-arrow-down el-icon--right"></i> </router-link>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="(item,index) in productsSort" :key="item.t_id" :command="{item,index}">{{item.t_name}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li>
              <router-link to="/blogs">Blogs</router-link>
            </li>
            <li>
              <router-link to="contact">Contact</router-link>
            </li>
          </ul>
        </el-col>
        <template v-if="show">
          <el-col :xs="6" :sm="6" :md="6" :lg="6" style="textAlign:right">
            <el-button type="warning" size="small" icon="el-icon-edit" @click="goWriteBlog">Write a blog</el-button>
            <span style="color:#fff"> <i class="el-icon-xyr-zhuce"></i> <span @click="login" class="login">Login</span>&nbsp;|&nbsp;<span @click="register" class="register">Register</span> </span>
          </el-col>
        </template>
        <template v-else>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" style="textAlign:right">
            <el-button type="warning" size="small" icon="el-icon-edit" @click="writeBlog">write a blog</el-button>
            <div class="userInfo" @mouseover="userBolgShow" @mouseout="userBolgHide">
              <img :src="userImg" alt="avatar" class="userImg">
              <span>{{username}}</span>
              <el-collapse-transition>
                <ul v-show="userBolg" id="userBolg">
                  <li @click="writeBlog">Start a Blog</li>
                  <li @click="myBlog">My Blog</li>
                  <li @click="modifyPersonalData">Account Setting</li>
                  <li @click="quit">Quit</li>
                </ul>
              </el-collapse-transition>
            </div>
          </el-col>
        </template>
      </div>
      <div class="mobel-nav-wrap hide-pc">
        <div class="mobel-nav">
          <div class="logo">
            <a href="http://www.customembroideredpatches.com/"><img class="logoImg" src="https://res.cloudinary.com/dehxpneyp/image/upload/v1533798854/v1_1/gs-blogs/default.png" alt="logo"></a>
          </div>
          <div class="moreNav">
            <i :class="iconMore" @click="moreNavList"></i>
            <el-collapse-transition>
              <ul class="nav" v-show="showNavList">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/about">About</router-link>
                </li>
                <li>
                  <router-link to="/products">Products</router-link>
                </li>
                <li>
                  <router-link to="/blogs">Blogs</router-link>
                </li>
                <li>
                  <router-link to="contact">Contact</router-link>
                </li>
                <li>
                  <template v-if="show">
                    <el-button type="warning" size="small" icon="el-icon-edit" @click="goWriteBlog">Write a blog</el-button>
                    <span style="color:#fff"> <i class="el-icon-xyr-zhuce"></i> <span @click="login" class="login">Login</span>&nbsp;|&nbsp;<span @click="register" class="register">Register</span> </span>
                  </template>
                  <template v-else>
                    <el-button type="warning" size="small" icon="el-icon-edit" @click="writeBlog">write a blog</el-button>
                    <div class="userInfo" @mouseover="userBolgShow" @mouseout="userBolgHide">

                      <span><img :src="userImg" alt="avatar" class="userImg">{{username}}</span>
                      <el-collapse-transition>
                        <ul v-show="userBolg" id="userBolg">
                          <li @click="writeBlog">Start a Blog</li>
                          <li @click="myBlog">My Blog</li>
                          <li @click="modifyPersonalData">Account Setting</li>
                          <li @click="quit">Quit</li>
                        </ul>
                      </el-collapse-transition>
                    </div>
                  </template>
                </li>
              </ul>
            </el-collapse-transition>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>
<style scoped>
@media screen and (max-width:767px) {
  .wrap {
    width: 100%;
    background-color: #545c64;
  }
  .content {
    height: 4em;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mobel-nav-wrap {
    width: 100%;
    padding: 0 1em;
  }
  .mobel-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav {
    padding: 1em;
    margin-top: -1px;
    position: absolute;
    top: 4em;
    left: 0;
    width: 100%;
    background-color: #545c64;
    z-index: 1000;
    text-align: left;
  }
  .nav li {
    margin: 0 2em;
    padding: 1.5em 1em;
    border-bottom: 1px solid #DCDFE6;
    color: #fff;
  }
  .nav li:last-child {
    border-bottom: none;
    position: relative;
  }
  .nav li a {
    color: #fff;
  }
  .logoImg {
    width: 10em;
    height: 4em;
  }
  .el-icon-xyr-et-more,
  .el-icon-xyr-close {
    font-size: 1.5em;
  }
  .userImg {
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }
  .userInfo {
    float: right;
    color: #fff;
  }
  #userBolg {
    width: 100%;
    position: absolute;
    top: 6.3em;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #545c64;
    text-align: center;
  }

  #userBolg li {
    padding: 1.5em 0;
    line-height: 0
  }
  .el-icon-xyr-zhuce {
    margin-left: 1em;
  }
}

@media screen and (min-width: 768px) and (max-width: 1199px) {

  .logoImg {
    width: 80%;
    vertical-align: middle;
  }
  .wrap {
    width: 100%;
    background-color: #545c64;
  }
  .userImg {
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }
  .content {
    height: 5.71em;
    line-height: 5.71em;
    width: 99%;
    margin: 0 auto;
  }
  .nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .nav li {
    box-sizing: border-box;
    display: inline-block;
    padding:0 1em;
    height: 100%;
    text-align: center;
  }
  .nav li:hover {
    background-color: #333;
  }
  .nav li a {
    font-size: 1.1em;
    font-weight: 500;
    color: white;
  }
  .userInfo {
    width: 50%;
    float: right;
    cursor: pointer;
    position: relative;
    color: #fff;
  }
  #userBolg {
    position: absolute;
    width: 8em;
    right: 0;
    z-index: 1000;
    background-color: #545c64;
    text-align: center;
  }

  #userBolg li {
    padding: 1.5em 0;
    line-height: 0
  }

  #userBolg li:hover {
    background-color: #333
  }

  .el-icon-xyr-zhuce {
    margin-left: 1em;
  }

  .login:hover,
  .register:hover {
    color: red;
    cursor: pointer;
  }

  .router-link-active {
    display: block;
    width: 100%;
    height: 100%;
    margin-top: -1px;
    color: rgb(255, 208, 75) !important;
    border-bottom: 2px solid rgb(255, 208, 75);
  }
}

@media screen and (min-width:1200px) {
  .logoImg {
    width: 15em;
    vertical-align: middle;
  }
  .wrap {
    width: 100%;
    background-color: #545c64;
  }
  .userImg {
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }
  .content {
    height: 5.71em;
    line-height: 5.71em;
    width: 85.71em;
    margin: 0 auto;
  }
  .nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .nav li {
    box-sizing: border-box;
    display: inline-block;
    width: 7em;
    height: 100%;
    text-align: center;
  }
  .nav li:hover {
    background-color: #333;
  }
  .nav li a {
    font-size: 1.14em;
    font-weight: 500;
    color: white;
  }
  .userBolgH {
    display: none;
  }
  .userBolgS {
    display: block;
  }
  .userInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    float: right;
    margin-left:0.5em;
    cursor: pointer;
    position: relative;
    color: #fff;
  }
  .userInfo span{
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #userBolg {
    position: absolute;
    width: 8em;
    top:5.71em;
    right: 0;
    z-index: 1000;
    background-color: #545c64;
    text-align: center;
  }

  #userBolg li {
    padding: 1.5em 0;
    line-height: 0
  }

  #userBolg li:hover {
    background-color: #333
  }

  .el-icon-xyr-zhuce {
    margin-left: 1em;
  }

  .login:hover,
  .register:hover {
    color: red;
    cursor: pointer;
  }

  .router-link-active {
    display: block;
    width: 100%;
    height: 100%;
    margin-top: -1px;
    color: rgb(255, 208, 75) !important;
    border-bottom: 2px solid rgb(255, 208, 75);
  }
}

</style>
<script>
export default {
  data() {
    return {
      show: true,
      username: '',
      userBolg: false,
      productsSort: '',
      userImg: '',
      showNavList: false,
      iconMore: 'el-icon-xyr-et-more',
    }
  },
  inject: ['reload'],
  methods: {
    login() {
      this.$router.push({
        name: 'Login'
      })
    },
    register() {
      this.$router.push({
        name: 'Register'
      })
    },
    userBolgShow() {
      this.userBolg = true;
    },
    userBolgHide() {
      this.userBolg = false;
    },
    writeBlog() {
      this.userBolg = false;
      this.$router.push({
        name: 'Writeblog',
      })
    },
    myBlog() {
      this.userBolg = false;
      this.$router.push({
        name: 'Myblog',
      })
    },
    quit() {
      sessionStorage.removeItem('judge');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('userImg');
      this.show = true;
      this.username = '';
    },
    modifyPersonalData() {
      this.userBolg = false;
      this.$router.push({
        name: 'ModifyPersonalData'
      })
    },
    goWriteBlog() {
      if (sessionStorage.judge) {
        this.$router.push({
          name: 'Writeblog'
        })
      } else {
        this.$message({
          type: 'info',
          message: 'please sign in',
          duration: 1000
        })
      }
    },
    removeTrim (str) {
      return str.replace(/ /g, '-')
    },
    handleCommand(command) {
      sessionStorage.goId = command.item.t_id;
      sessionStorage.goName = command.item.t_name;
      sessionStorage.goIndex = command.index;
      sessionStorage.typeName = command.item.t_name;
      this.$router.push({
        path:'/products/'+this.removeTrim(command.item.t_name)
      })
      this.reload();
    },
    productType() {
      this.$fetch(this.$url.api.allCategories).then(res => {
        this.productsSort = res.data.data;
      })
    },
    moreNavList() {
      this.showNavList = !this.showNavList;
      if (this.iconMore == 'el-icon-xyr-et-more') {
        this.iconMore = 'el-icon-xyr-close'
      } else {
        this.iconMore = 'el-icon-xyr-et-more'
      }

    }
  },
  mounted() {
    this.productType()
    let status = sessionStorage.judge;
    if (status == 1) {
      this.show = false;
      this.username = sessionStorage.username;
      this.userImg = sessionStorage.userImg;
    } else {
      this.show = true;
      this.username = '';
      this.userImg = 'https://res.cloudinary.com/dehxpneyp/image/upload/v1533860792/v1_1/gs-blogs/avatar/avatar.jpg'
    }
  },
}

</script>
