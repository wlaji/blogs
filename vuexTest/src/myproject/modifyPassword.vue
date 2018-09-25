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
        <h3>Account Settings Home</h3>
        <ul>
          <li @click="modifyPersonalData">Personal Information</li>
          <li class="active" @click="modifyPassword">Change Password</li>
        </ul>
      </el-aside>
      <el-aside style="width:100%" class="aside-nav hide-pc">
        <h3>Account Settings Home</h3>
        <ul>
          <li @click="modifyPersonalData">Personal Information</li>
          <li class="active" @click="modifyPassword">Change Password</li>
        </ul>
      </el-aside>
      <el-main>
        <h3>Change Password</h3>
        <div class="changePassword">
          <el-form :model="changePasswordForm" :rules="changePasswordRules" ref="changePasswordForm" class="demo-ruleForm">
            <el-form-item prop="oldPass">
              <el-input :type="inputType1" v-model="changePasswordForm.oldPass" placeholder="Enter the old password" auto-complete="off">
                <i slot="suffix" :class="view1" @click="changeType1"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="newPass">
              <el-input :type="inputType2" v-model="changePasswordForm.newPass" placeholder="Enter the new password" auto-complete="off">
                <i slot="suffix" :class="view2" @click="changeType2"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input :type="inputType3" v-model="changePasswordForm.checkPass" placeholder="Confirm the new password" auto-complete="off" @keyup.enter.native="submitForm('changePasswordForm')">
                <i slot="suffix" :class="view3" @click="changeType3"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('changePasswordForm')" style="width:100%;">Post</el-button>
            </el-form-item>
          </el-form>
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
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }

  .icon {
    font-size: 1.2rem;
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

  .header {
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .quit {
    color: #B0171F;
    cursor: pointer;
  }

  .quit:hover {
    text-decoration: underline;
  }

  .content {
   width:100%;
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

  .changePassword {
    margin-top: 1em;
    width: 80%;
    margin: 1em auto 0 auto;
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

  .userInfo ul li a {
    color: #222;
  }

  .userInfo ul li a:hover {
    color: #B0171F;
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

  .header {
    width: 85.71em;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .changePassword {
    margin-top: 1em;
    width: 50%;
    margin: 1em auto 0 auto;
  }
}

</style>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'));
      } else {
        if (this.changePasswordForm.checkPass !== '') {
          this.$refs.changePasswordForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password again'));
      } else if (value !== this.changePasswordForm.newPass) {
        callback(new Error('Two password entries are inconsistent!'));
      } else {
        callback();
      }
    };
    var checkOldPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Old password cannot be empty'));
      } else {
        callback();
      }
    };
    return {
      userImg: '',
      view1: 'el-icon-xyr-biyan',
      view2: 'el-icon-xyr-biyan',
      view3: 'el-icon-xyr-biyan',
      inputType1: 'password',
      inputType2: 'password',
      inputType3: 'password',
      quitLogin: false,
      username: '',
      changePasswordForm: {
        oldPass: '',
        newPass: '',
        checkPass: '',

      },
      changePasswordRules: {
        oldPass: [
          { validator: checkOldPass, trigger: 'blur' }
        ],
        newPass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },

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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let postData = {
            u_id: sessionStorage.userId,
            opwd: this.changePasswordForm.oldPass,
            upwd: this.changePasswordForm.newPass
          }
          console.log(postData);
          this.$post(this.$url.api.changepwd, postData).then(res => {
            let data = res.data;
            if (data.code == 200) {
              this.$message({
                type: 'success',
                message: data.msg + ',please login again',
                duration: 1000,
              })
              sessionStorage.removeItem('judge');
              sessionStorage.removeItem('userId');
              sessionStorage.removeItem('username');
              sessionStorage.removeItem('userImg');
              let that = this;
              setTimeout(function() {
                that.$router.push({
                  name: 'Login'
                })
              }, 1000)
            } else if (data.code == 401) {
              this.$message({
                type: 'error',
                message: data.msg,
                duration: 1000,
              })
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: 'error submit',
            duration: 1000,
          })
        }
      });
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
    changeType1() {
      if (this.inputType1 == 'password') {
        this.inputType1 = 'text';
        this.view1 = 'el-icon-xyr-in_zhengyan';
      } else {
        this.inputType1 = 'password';
        this.view1 = 'el-icon-xyr-biyan';
      }
    },
    changeType2() {
      if (this.inputType2 == 'password') {
        this.inputType2 = 'text'
        this.view2 = 'el-icon-xyr-in_zhengyan';
      } else {
        this.inputType2 = 'password';
        this.view2 = 'el-icon-xyr-biyan';
      }
    },
    changeType3() {
      if (this.inputType3 == 'password') {
        this.inputType3 = 'text'
        this.view3 = 'el-icon-xyr-in_zhengyan';
      } else {
        this.inputType3 = 'password';
        this.view3 = 'el-icon-xyr-biyan';
      }
    }
  },
  mounted() {
    this.username = sessionStorage.username;
    this.userImg = sessionStorage.userImg
  }
}

</script>
