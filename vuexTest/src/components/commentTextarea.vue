<template>
  <div class="commentBox">
    <h3>Comment <span style="float:right;margin-right:0.71em;"><img src="../../static/images/close.svg" alt="" @click="cancel"></span></h3>
    <p v-if="type">You &nbsp;reply&nbsp;{{name}} &nbsp; <span @click="cancel" style="color:#4190BDFF;cursor:pointer">Cancel reply</span> </p>
    <template>
      <el-form :model="formValidate" :rules="ruleValidate" ref="formValidate" label-width="70px" class="demo-ruleForm">
        <el-form-item label="Name" prop="name">
          <el-input v-model="formValidate.name" placeholder="Enter your name"></el-input>
        </el-form-item>
        <el-form-item label="E-mail" prop="mail">
          <el-input v-model="formValidate.mail" placeholder="Enter your e-mail"></el-input>
        </el-form-item>
        <el-form-item label="Desc" prop="desc">
          <el-input type="textarea" v-model="formValidate.desc" placeholder="Enter something..."></el-input>
        </el-form-item>
        <el-button @click="handleReset('formValidate')">Cancel</el-button>
        <el-button type="primary" @click="handleSubmit('formValidate')">Comment</el-button>
      </el-form>
    </template>
  </div>
</template>
<style scoped>
@media (min-width:768px) {
  .commentBox {
    overflow: hidden;
  }
  .commentBox h3 {
    background-color: #4997B5FF;
    height: 2.143em;
    line-height: 2.143em;
    font-size: 1.43rem;
    padding-left: 0.71em;
    color: #fff;
  }
  .commentBox h3 img {
    vertical-align: middle;
  }
  .commentBox p {
    font-weight: 400;
  }
  .demo-ruleForm {
    padding: 1em;
    text-align: right;
  }
}

@media (max-width:768px) {
  .commentBox {
    overflow: hidden;
  }

  .commentBox h3 {
    background-color: #4997B5FF;
    height: 2em;
    line-height: 2em;
    padding-left: 0.7em;
    color: #fff;
  }
  .commentBox h3 img {
    vertical-align: middle;
  }
  .commentBox p {
    font-weight: 400;
    margin: 0.7em;
  }
  .demo-ruleForm {
    padding: 1em;
    text-align: right;
  }
}

</style>
<script>
const api = require('../api/api.js')
export default {
  props: ['id', 'replyId', 'type', 'name'],
  data() {
    return {
      data: '',
      formValidate: {
        name: '',
        mail: '',
        desc: '',
        id: '',
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
          { type: 'string', min: 5, message: 'Introduce no less than 5 words', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    cancel() {
      this.$emit("cancelComm");
    },
    handleSubmit(formValidate) {
      var replyId = this.replyId;
      if (replyId == undefined) {
        replyId = 0;
      }
      var that = this;
      this.$refs[formValidate].validate((valid) => {
        if (valid) {
          let data = {
            article_id: this.id,
            content: this.formValidate.desc,
            name: this.formValidate.name,
            email: this.formValidate.mail,
            reply_id: replyId
          }
          this.$post(this.$url.api.addComment, data).then(res => {
            let data = res.data;
            if (data.code === 200) {
              this.$message({
                type: 'success',
                message: data.msg,
                center: true,
                duration: 1000

              });
              data = data.data;
              this.$emit("fresh", { id: data.id, article_id: data.article_id, content: data.content, reply_id: data.reply_id, name: data.name, addtime: data.addtime, ip: data.ip, user_id: data.user_id, children: [] });
              this.$refs[formValidate].resetFields();
              this.cancel();
            } else {
              this.$message({
                type: 'error',
                message: 'error',
                center: true,
                duration: 1000

              });
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: 'error',
            center: true,
            duration: 1000

          });
        }
      })
    },
    handleReset(formValidate) {
      this.$refs[formValidate].resetFields();
    }
  },
  mounted() {

  },
}

</script>
