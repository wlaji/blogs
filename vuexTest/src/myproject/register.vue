<template>
  <div class="wrap">
    <div class="content">
      <template>
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" status-icon>
          <el-form-item prop="name2">
            <el-input v-model="ruleForm2.name2" placeholder="Enter your name">
              <i slot="prefix" class="el-icon-xyr-yonghuming"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password2">
            <el-input type="password" v-model="ruleForm2.password2" placeholder="Enter your password">
              <i slot="prefix" class="el-icon-xyr-mima"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="checkPassword2">
            <el-input type="password" v-model="ruleForm2.checkPassword2" placeholder="Confirm your password">
              <i slot="prefix" class="el-icon-xyr-mima"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="email2">
            <el-input v-model="ruleForm2.email2" placeholder="Enter your email" @keyup.enter.native="register('ruleForm2')">
              <i slot="prefix" class="el-icon-xyr-email"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="slot">*The mailbox is used to retrieve the password, please fill in carefully</div>
            <el-button type="primary" class="register" @click="register('ruleForm2')">Register</el-button>
          </el-form-item>
        </el-form>
        <el-button type="info" @click="goLogin" class="goLogin">Return login</el-button>
      </template>
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
  .slot {
    color: red;
    line-height: 1.2em
  }
  .goLogin {
    display: block;
    width: 100%;
  }

  .navBar {
    width:100%;
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
    margin-top: -20px;
    background-color: #eee;
  }

  .content {
    position: relative;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 60vh;
    padding: 1em;
    border: 1px solid #eee;
    box-shadow: 0 0 2px #888 inset;
    background-color: #fff;
  }

  .register {
    display: block;
    width: 100%;
  }
}

@media screen and (min-width:768px) {
  .slot {
    color: red;
  }

  .goLogin {
    display: block;
    width: 100%;
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
    margin-top: -20px;
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

  .register {
    display: block;
    width: 100%;
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
        if (this.ruleForm2.checkPassword2 !== '') {
          this.$refs.ruleForm2.validateField('checkPassword2');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password again'));
      } else if (value !== this.ruleForm2.password2) {
        callback(new Error('Two password entries are inconsistent!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        name2: '',
        password2: '',
        checkPassword2: '',
        email2: '',
      },
      rules2: {
        name2: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }

        ],
        password2: [
          { validator: validatePass, trigger: 'blur' },
        ],
        checkPassword2: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        email2: [
          { required: true, message: 'Please input the email address', trigger: 'blur' },
          { type: 'email', message: 'Please input the correct email address', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            u_name: this.ruleForm2.name2,
            u_pwd: this.ruleForm2.password2,
            u_email: this.ruleForm2.email2,
          }
          console.log(data);
          this.$post(this.$url.api.register, data).then(res => {
            let resData = res.data;
            if (resData.code == 200) {
              this.$message({
                type: 'success',
                duration: 1000,
                message: resData.msg
              })
              this.$router.push({
                name: 'Login'
              })
            } else if (resData.code == 401) {
              this.$message({
                type: 'error',
                duration: 1000,
                message: resData.msg
              })
            }else if (resData.code == 402) {
              this.$message({
                type: 'error',
                duration: 1000,
                message: resData.msg
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
    goLogin() {
      this.$router.push({
        name: 'Login'
      })
    }

  },
  mounted() {

  }
}

</script>
