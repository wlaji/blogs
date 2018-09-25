<template>
  <div class="wrap">
    <div class="content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" status-icon>
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" placeholder="Enter your name">
            <i slot="prefix" class="el-icon-xyr-yonghuming"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="Enter your password"  @keyup.enter.native="submitForm('ruleForm')">
            <i slot="prefix" class="el-icon-xyr-mima"></i>
          </el-input>
        </el-form-item>
        <p class="forgetPassword" @click="fondPassword">forget password?</p>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="login">Login</el-button>
        </el-form-item>
        </v-container>
      </el-form>
      <el-button type="info" @click="goRegister" class="register">Immediate registration</el-button>
      <ul class="navBar">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/blogs">Blogs</router-link>
        </li>
        <li>|</li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-width:768px) {
  .forgetPassword {
    margin-bottom: 1em;
    color: red;
    text-align: right;
    cursor: pointer;
    font-size: 1.2rem;
  }

  .navBar {
    width: 100%;
    height: 2em;
    line-height: 2em;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2.5em;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
  }

  .navBar li {
    vertical-align: middle;
    display: inline-block;
    text-align: center;
    color: #888;
  }

  .navBar li a {
    color: #888;
    cursor: pointer;
  }

  .navBar li a:hover {
    color: #B0171F
  }

  .wrap {
    width: 100%;
    height: 100vh;
    background-color: #eee;
  }

  .content {
    position: relative;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width:90%;
    height:50vh;
    padding: 1em;
    border: 1px solid #eee;
    box-shadow: 0 0 2px #888 inset;
    background-color: #fff;
  }

  .login {
    display: block;
    width: 100%;
  }

  .register {
    display: block;
    width: 100%;
  }

  .back {
    position: absolute;
    left: 2em;
    bottom: 1em;
  }
}

@media screen and (min-width:768px) {
  .forgetPassword {
    margin-bottom: 1em;
    color: red;
    text-align: right;
    cursor: pointer;
    font-size: 1.2rem;
  }

  .navBar {
    width: 35em;
    height: 2em;
    line-height: 2em;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2.5em;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
  }

  .navBar li {
    vertical-align: middle;
    display: inline-block;
    text-align: center;
    color: #888;
  }

  .navBar li a {
    color: #888;
    cursor: pointer;
  }

  .navBar li a:hover {
    color: #B0171F
  }

  .wrap {
    width: 100%;
    height: 100vh;
    background-color: #eee;
  }

  .content {
    position: relative;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 35em;
    height: 35em;
    padding: 2em;
    border: 1px solid #eee;
    box-shadow: 0 0 2px #888 inset;
    background-color: #fff;
  }

  .login {
    display: block;
    width: 100%;
  }

  .register {
    display: block;
    width: 100%;
  }

  .back {
    position: absolute;
    left: 2em;
    bottom: 1em;
  }
}

</style>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        passwrod: '',
      },
      ruleForm2: {
        name2: '',
        password2: '',
        email2: '',
      },
      rules: {
        name: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }

        ],
        password: [
          { type: "string", required: true, message: 'Please fill in the password.', trigger: 'blur' },
        ]

      },
      rules2: {
        name2: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }

        ],
        password2: [
          { type: "string", required: true, message: 'Please fill in the password.', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            u_name: this.ruleForm.name,
            u_pwd: this.ruleForm.password
          }
          this.$post(this.$url.api.login, data).then(res => {
            let resData = res.data;
            if (resData.code == 200) {
              sessionStorage.judge = 1;
              sessionStorage.username = resData.user.u_name;
              sessionStorage.userId = resData.user.u_id;
              if (resData.user.u_image_url) {
                sessionStorage.userImg = resData.user.u_image_url;
              } else {
                sessionStorage.userImg = 'https://res.cloudinary.com/dehxpneyp/image/upload/v1533860792/v1_1/gs-blogs/avatar/avatar.jpg'
              }

              this.$router.push({
                name: 'home'
              })
            } else {
              this.$message({
                type: 'error',
                duration: 1000,
                message: resData.msg
              })
            }
          })
        } else {
          this.$message({
            type: 'error',
            duration: 1000,
            message: 'format error'
          })
        }
      })
    },
    submit(){
      alert(1)
    },
    goRegister() {
      this.$router.push({
        name: "Register"
      })
    },
    fondPassword() {
      // this.$message({ // type:'info', // message:'暂时没有实现' // })

      this.$router.push({
        name: "FondPassword"
      })
    }

  },
  mounted() {

  }
}

</script>
