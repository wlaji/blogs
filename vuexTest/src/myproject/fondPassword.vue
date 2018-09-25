<template>
  <el-container class="wrap">
    <el-header>
      <div class="headerBar">
        <div class="headNav">
          <div class="headerBar_left">
            <a href="http://www.customembroideredpatches.com/"><img class="logoImg" src="https://res.cloudinary.com/dehxpneyp/image/upload/v1533798854/v1_1/gs-blogs/default.png" alt="logo"></a>
            <span>Retrieve password</span>
          </div>
          <div class="headerBar_right" @click="goHome">Back to homepage</div>
        </div>
      </div>
    </el-header>
    <el-main>
      <el-steps :active="active" finish-status="success" simple style="margin-top: 20px;" class="steps">
        <el-step title="填写邮箱" icon="el-icon-message"></el-step>
        <el-step title="输入验证码" icon="el-icon-edit-outline"></el-step>
        <el-step title="重置密码" icon="el-icon-setting"></el-step>
      </el-steps>
      <div class="content">
        <h3><i class="el-icon-info"></i>Please input relevant information</h3>
        <template>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" status-icon id="form1" v-show="showFirst">
            <el-form-item prop="email">
              <el-input v-model="ruleForm.email" placeholder="Enter your email">
                <el-button slot="prepend" icon="el-icon-xyr-email"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="checkCode">
              <el-input v-model="ruleForm.checkCode" placeholder="Enter checkCode">
                <el-button slot="prepend" icon="el-icon-edit-outline"></el-button>
                <div slot="append" class="randomNum" @click="createCode">{{randomNum}}</div>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" class="send">Next Step</el-button>
              <!-- <el-button type="info" @click="goLogin" class="goLogin">Return</el-button> -->
            </el-form-item>
          </el-form>
        </template>
        <template>
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" id="form2" v-show="showSecond">
            <el-form-item>
              <p class="tips">{{resMsg}}</p>
            </el-form-item>
            <el-form-item prop="codes">
              <el-input v-model.number="ruleForm2.codes" placeholder="Enter checkCode"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitCheckCode('ruleForm2')" class="send">Next Step</el-button>
              <!-- <el-button type="info" @click="goPrev('ruleForm2')" class="goLogin">Prev</el-button> -->
            </el-form-item>
          </el-form>
        </template>
        <template>
          <el-form :model="ruleForm3" :rules="rules3" ref="ruleForm3" id="form3" v-show="showThree" label-position="top">
            <el-form-item>
              <p>用户名：{{u_name}}</p>
            </el-form-item>
            <el-form-item prop="Pass">
              <el-input :type="inputType1" v-model="ruleForm3.Pass" placeholder="Enter the new password" auto-complete="off">
                <i slot="suffix" :class="view" @click="changeType"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input :type="inputType2" v-model="ruleForm3.checkPass" placeholder="Confirm the new password" auto-complete="off">
                <i slot="suffix" :class="view2" @click="changeType2"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitPassword('ruleForm3')" class="send">Post</el-button>
              <!-- <el-button type="info" @click="goPrev2('ruleForm3')" class="goLogin">Prev</el-button> -->
            </el-form-item>
          </el-form>
        </template>
      </div>
    </el-main>
  </el-container>
</template>
<style scoped>
@media screen and (max-width:768px) {
  .wrap {
    width: 100%;
    height: 100vh;
    background-color: #eee;
  }
  .headerBar {
    width: 100%;
    height: 4em;
    background-color: #fff;
  }
  .headNav {
    width: 95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .headerBar_left {}
  .headerBar_left img {
    width: 8em;
    vertical-align: middle;
  }
  .headerBar_left>span {
    display: inline-block;
    height: 2em;
    line-height: 2em;
    border-left: 1px solid #ccc;
    text-indent: 1em;
  }
  .headerBar_right {
    color: #2c82ff;
    cursor: pointer;
  }
  .headerBar_right:hover {
    opacity: 0.8
  }
  .el-icon-info {
    margin-right: 0.5em;
  }
  .steps{
    width:100%;
    padding:0.5em;
  }
  .content {
    position: relative;
    width: 90%;
    padding: 0.5em 2em;
    margin: 2em auto;
    box-shadow: 0 0 2px #888 inset;
    background-color: #fff;
  }
  .content h3 {
    padding: 0.5em;
    border-bottom: 1px solid #ccc;
    color: #606266;
  }
  #form1,
  #form2,
  #form3 {
    width: 100%;
    margin: 1em auto;
  }
  .send,
  .goLogin {
    width: 100%;
  }
  .randomNum {
    width: 2em;
    text-align: center;
    word-spacing: 10px;
    color: #146eb9;
    font-size: 1.2rem;
    font-weight: 400;
  }
  .tips {
    padding: 0.5em;
    text-align: left;
    color: #67C23A;
    font-weight: 400;
  }
}

@media screen and (min-width:768px) {
  .wrap {
    width: 100%;
    height: 100vh;
    background-color: #eee;
  }
  .headerBar {
    width: 100%;
    height: 4em;
    background-color: #fff;
  }
  .headNav {
    width: 85.71em;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .headerBar_left {}
  .headerBar_left img {
    width: 12em;
    vertical-align: middle;
  }
  .headerBar_left>span {
    display: inline-block;
    height: 2em;
    font-size: 1.2rem;
    line-height: 2em;
    border-left: 1px solid #ccc;
    text-indent: 1em;
  }
  .headerBar_right {
    color: #2c82ff;
    cursor: pointer;
  }
  .headerBar_right:hover {
    opacity: 0.8
  }
  .el-icon-info {
    margin-right: 0.5em;
  }
  .steps{
    width:45%;
    margin:0 auto;
  }
  .content {
    position: relative;
    width: 30%;
    padding: 0.5em 2em;
    margin: 2em auto;
    box-shadow: 0 0 2px #888 inset;
    background-color: #fff;
  }
  .content h3 {
    padding: 0.5em;
    border-bottom: 1px solid #ccc;
    color: #606266;
  }
  #form1,
  #form2,
  #form3 {
    width: 80%;
    margin: 1em auto;
  }
  .send,
  .goLogin {
    width: 100%;
  }
  .randomNum {
    width: 3em;
    text-align: center;
    word-spacing: 10px;
    color: #146eb9;
    font-size: 1.2rem;
    font-weight: 400;
  }
  .tips {
    padding: 0.5em;
    text-align: left;
    color: #67C23A;
    font-weight: 400;
  }
}

</style>
<script>
export default {
  data() {
    var validateCheckCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your checkCode'));
      } else {
        let inputCode = value.toUpperCase();
        if (inputCode === this.randomNum) {
          callback();
        } else {
          this.createCode();
          callback(new Error('Verification code input error'));
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'));
      } else {
        if (this.ruleForm3.checkPass !== '') {
          this.$refs.ruleForm3.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password again'));
      } else if (value !== this.ruleForm3.Pass) {
        callback(new Error('Two password entries are inconsistent!'));
      } else {
        callback();
      }
    };
    return {
      active:0,
      u_id: '',
      u_name: '',
      uemail: '',
      view: 'el-icon-xyr-biyan',
      view2: 'el-icon-xyr-biyan',
      inputType1: 'password',
      inputType2: 'password',
      resMsg: '',
      showFirst: true,
      showSecond: false,
      showThree: false,
      randomNum: '',
      ruleForm: {
        email: '',
        checkCode: '',
      },
      rules: {
        email: [
          { required: true, message: 'Please input the email address', trigger: 'blur' },
          { type: 'email', message: 'Please input the correct email address', trigger: 'blur' }
        ],
        checkCode: [
          { validator: validateCheckCode, trigger: 'blur' }
        ]
      },
      ruleForm2: {
        codes: '',
      },
      rules2: {
        codes: [
          { required: true, message: 'Please input the checkCode', trigger: 'blur' },
          { type: 'number', message: 'Verification code must be a numeric type', trigger: 'blur' }
        ]
      },
      ruleForm3: {
        Pass: '',
        checkPass: '',
      },
      rules3: {
        Pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.uemail = this.ruleForm.email
          let data = {
            uemail: this.ruleForm.email
          }
          this.$post(this.$url.api.fondPassword, data).then(res => {
            let resData = res.data;
            if (resData.code == 200) {
              this.active++;
              this.resMsg = resData.msg;
              this.showFirst = false;
              this.showSecond = true;
              this.$refs[formName].resetFields();
            } else if (resData.code == 400) {
              this.$message({
                type: 'error',
                message: resData.msg,
                duration: 2000
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
    submitCheckCode(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            uemail: this.uemail,
            ucode: this.ruleForm2.codes
          }
          this.$post(this.$url.api.checkCode, data).then(res => {
            console.log(res);
            let resData = res.data;
            if (resData.code == 200) {
              this.active++;
              this.resMsg = "";
              this.u_id = resData.$user.u_id;
              this.u_name = resData.$user.u_name;
              this.showSecond = false;
              this.showThree = true;
              this.$refs[formName].resetFields();
            } else {
              this.$message({
                type: 'error',
                message: resData.msg,
                duration: 2000
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
    submitPassword(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            u_id: this.u_id,
            u_pwd: this.ruleForm3.Pass
          }
          this.$post(this.$url.api.resetPwd, data).then(res => {
            console.log(res);
            let resData = res.data;
            if (resData.code == 200) {
              this.active++;
              this.$message.success({
                message: resData.msg,
                duration: 1000,
              });
              let that=this;
              setTimeout(function() {
                that.$router.push({
                  name: 'Login'
                })
              }, 1000)

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
    goPrev(formName) {
      this.resMsg = '';
      this.$refs[formName].resetFields();
      this.showFirst = true;
      this.showSecond = false;
    },
    goPrev2(formName) {
      this.$refs[formName].resetFields();
      this.showSecond = true;
      this.showThree = false;
    },
    goLogin() {
      this.$router.push({
        name: 'Login'
      })
    },
    createCode() {
      let code = "";
      var codeLength = 4; //验证码的长度
      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数
      for (var i = 0; i < codeLength; i++) { //循环操作
        var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引
        code += random[charIndex]; //根据索引取得随机数加到code上
      }
      this.randomNum = code;
    },
    changeType() {
      if (this.inputType1 == 'password') {
        this.inputType1 = 'text'
        this.view = 'el-icon-xyr-in_zhengyan';
      } else {
        this.inputType1 = 'password';
        this.view = 'el-icon-xyr-biyan';
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
    goHome() {
      this.$router.push({
        name: 'home'
      })
    }



  },
  mounted() {
    this.createCode();

  }
}

</script>
