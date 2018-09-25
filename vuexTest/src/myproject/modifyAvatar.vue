<template>
  <el-container class="wrap">
    <el-header style="padding:0">
      <div class="headWrap">
        <div class="header">
          <div class="icon">Creative center</div>
          <div class="userInfo">
            <ul>
              <li>首页</li>
              <li>个人中心</li>
              <li>账号设置</li>
              <li>创作中心</li>
              <li class="avatar"><img src="../../static/images/25.jpg" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
    </el-header>
    <el-container class="content">
      <el-aside style="width:20%" class="aside-nav">
        <h3>账号设置首页</h3>
        <ul>
          <li @click="modifyPersonalData">个人信息</li>
          <li @click="modifyPassword">修改密码</li>
          <li class="active" @click="modifyAvatar">修改头像</li>
        </ul>
      </el-aside>
      <el-main>
        <h3>修改头像</h3>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
.active {
  background-color: #B0171F !important;
  color: #fff;
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
  margin-right:1em;
  cursor: pointer;
}
.userInfo ul li:hover{
  color:#B0171F;
  border-bottom: 2px solid #B0171F;
}
.avatar img{
  width:2em;
  height:2em;
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
  padding: 0 2em;
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
</style>
<script>
export default {
  data() {
    return {
      username: '',
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
    modifyAvatar() {
      this.$router.push({
        path: '/modifyAvatar'
      })
    }
  },
  mounted() {
    this.username = sessionStorage.username;
  }
}

</script>
