<template>
  <div class="wrap">
    <div v-show="popShow" class="fade" @click="closeBtn"></div>
    <div class="pop" v-show="popShow">
      <p><img class="closeImg" src="../../static/images/close.svg" alt="" style="" @click="closeBtn"></p>
      <div id="popLeft">
        <img style="border:1px solid #eee" :src="imgSrc" alt="图一">
      </div>
      <div id="popInfo">
        <p class="title">Get the price similar like this product</p>
        <template>
          <el-form id="formData" size="mini" :model="formValidate" :rules="ruleValidate" ref="formValidate" label-width="80px" class="demo-ruleForm">
            <el-form-item label="Name" prop="name">
              <el-input v-model="formValidate.name" placeholder="Enter your name"></el-input>
            </el-form-item>
            <el-form-item label="E-mail" prop="mail">
              <el-input v-model="formValidate.mail" placeholder="Enter your e-mail"></el-input>
            </el-form-item>
            <el-form-item label="Quantity" prop="quantity">
              <el-input-number size="small" v-model="formValidate.quantity" :min="1" :max="10"></el-input-number>
              <!-- <el-input v-model.number="formValidate.quantity" placeholder="Enter your quantity"></el-input> -->
            </el-form-item>
            <el-form-item label="Phone" prop="phone">
              <el-input v-model="formValidate.phone" placeholder="Enter your e-phone"></el-input>
            </el-form-item>
            <el-form-item label="Address" prop="address">
              <el-input v-model="formValidate.address" placeholder="Enter youraddress"></el-input>
            </el-form-item>
            <el-form-item label="Desc" prop="desc">
              <el-input type="textarea" v-model="formValidate.desc" placeholder="Enter something..."></el-input>
            </el-form-item>
            <input type="hidden" name="c_image" :value="imgSrc"></input>
            <el-form-item>
              <el-upload ref="upload" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :before-upload="handleUpload" accept=".txt,.pdf,.exl,.jpg,.png,.gif,.bmp,.eps,.tif,.ai,.jpeg" multiple>
                <el-button size="small" type="primary">upload</el-button>
                <div slot="tip" class="el-upload__tip">File format:'txt','pdf','exl','jpg','png',gif','bmp','eps','tif','ai','jpeg'</div>
              </el-upload>
              <div>
                <ul class="file_ul">
                  <li class="file-list" v-for="(list,index) in file" :key="index" style="height:1.2em"><span>{{ list.name }}<i style="verticalAlign:middle;marginLeft:1em" class="el-icon-close" @click="delFileList(index)"></i></span>
                  </li>
                </ul>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSubmit('formValidate')">Submit</el-button>
            </el-form-item>
          </el-form>
        </template>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (max-width:768px) {
  .el-upload__tip {
    line-height:1.1em;
    word-break: break-all;
  }
  .el-form-item{
    margin-bottom: 20px;
  }
  .title {
    text-align: center;
    color: #000;
    font-size: 1.2rem;
    margin-bottom:0.8em;
    margin-top:1.2em;
  }
  .file-list {
    color: #146eb4;
    text-align: left;
    height: 15px;
  }
  .closeImg {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
  }
  .fade {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: 999;
    background-color: rgba(88, 87, 86, 0.5)
  }
  .pop {
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width:100%;
    min-height:35em;
    padding: 0 0.8em;
    background-color: #fff;
    border: 2px solid #5EB34BFF;
    border-radius: 5px;
  }

  #popLeft {
    display: none;
  }
  .upload {
    float: left;
    height: 32px;
  }
}

@media (min-width:768px) {
  .el-upload__tip {
    line-height: 16px;
  }
  .file-list {
    color: #146eb4;
    text-align: left;
  }
  .title {
    text-align: left;
    color: #000;
    font-size: 15px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .closeImg {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
  }
  .fade {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(88, 87, 86, 0.8);
    opacity: 0.8;
  }

  .pop {
    display: flex;
    align-items: center;
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    padding: 0 10px;
    background-color: #fff;
    border: 2px solid #146eb4;
    border-radius: 5px;
  }
  #popLeft {
    width: 35%;
    margin-right: 5%;
    vertical-align: middle;
  }
  #popLeft img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  #popInfo {
    width: 60%;
    align-self: flex-start;
  }

  #popInfo p {
    margin-left: 80px;
  }
  .upload {
    height: 30px;
    z-index: 1000;
  }
  .mobel_form_button {
    margin-top: -40px;
  }
}

</style>
<script>
const JSZip = require("jszip");
export default {
  props: ['imgSrc', 'popShow'],
  data() {
    return {
      current: 0,
      c_att1: null,
      c_att2: null,
      c_att3: null,
      file: [],
      formValidate: {
        popShow: '',
        name: '',
        mail: '',
        address: '',
        phone: '',
        desc: '',
        quantity: '',
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' },
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        quantity: [
          { required: true, min: 1, max: 999, type: 'number', message: 'Please input quantity and quantity must be greater than one', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    next() {
      if (this.current == 3) {
        this.current = 0;
      } else {
        this.current += 1;
      }
    },
    handleFormatError(file) {
      alert("error")
      this.$Message.info("error")
    },
    handleSubmit(name) {
      var that = this;
      this.$refs[name].validate(async function(valid) {
        if (valid) {
          var objName = "example";
          var zip = new JSZip();
          var fileList = that.file;
          for (let i = 0; i < fileList.length; i++) {
            zip = await that.zipFileAsync(zip, fileList[i]);
          }
          zip.generateAsync({
            type: 'blob',
            compression: 'DEFLATE', //  force a compression for this file
            compressionOptions: { //  使用压缩等级，1-9级，1级压缩比最低，9级压缩比最高
              level: 6,
            },
          }).then(function(content) {
            let formData = new FormData();
            let myDate = new Date();
            formData.append('c_att1', content, myDate.toLocaleString() + '.zip');
            var ajax = new XMLHttpRequest();
            //4.给AJAX设置事件(这里最多感知4[1-4]个状态)
            ajax.onreadystatechange = function() {
              if (ajax.readyState == 4 && ajax.status == 200) {
                let data = JSON.parse(ajax.responseText);
                if (data.code == 200) {
                  that.$message({
                    type: 'success',
                    message: data.msg,
                    duration: 1000,
                  })
                  that.$refs[name].resetFields();
                  that.file = [];
                  that.c_att1 = '';
                  that.$emit('changPopShow', !that.popShow);
                } else if (data.code == 400) {
                  that.$message({
                    type: 'error',
                    message: data.msg,
                    duration: 1000,
                  })
                } else if (data.code == 401) {
                  that.$message({
                    type: 'error',
                    message: data.msg,
                    duration: 1000,
                  })
                } else if (data.code == 402) {
                  that.$message({
                    type: 'error',
                    message: data.msg,
                    duration: 1000,
                  })
                } else if (data.code == 403) {
                  that.$message({
                    type: 'error',
                    message: data.msg,
                    duration: 1000,
                  })
                }
              }
            }
            ajax.open('post', that.$url.api.reservation);
            // ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded",false);
            formData.append('c_name', that.formValidate.name);
            formData.append('c_email', that.formValidate.mail);
            formData.append('c_address', that.formValidate.address);
            formData.append('c_tel', that.formValidate.phone);
            formData.append('c_image', that.imgSrc);
            formData.append('c_remark', that.formValidate.desc);
            formData.append('c_quantity', that.formValidate.quantity);
            ajax.send(formData);
          })
        } else {
          that.$message({
            type: 'error',
            message: 'Fail',
            duration: 1000,
          })
        }
      })
    },
    closeBtn() {
      this.$refs.formValidate.resetFields();
      this.$emit('changPopShow', this.popShow);
    },
    delFileList(index) {
      let that = this;
      that.file.splice(index, 1);
    },
    handleUpload(file) {
      var name = file.name;
      var fileName = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
      if (file.size.toFixed(3) >= (5 * 1024 * 1024)) {
        this.$message({
          type: 'error',
          message: 'File size cannot exceed 5M',
          duration: 1000,
        })
        return false;
      }
      if (fileName != "jpg" && fileName != "png" && fileName != "gif" && fileName != "txt" && fileName != "ai" && fileName != "exl" && fileName != "pdf" && fileName != "bmp" && fileName != "eps" && fileName != "tif" && fileName != "jpeg") {
        this.$message({
          type: 'error',
          message: 'Wrong file format',
          duration: 1000,
        })
        return false
      }
      if (this.file.length >= 3) {
        this.$message({
          type: 'error',
          message: 'Only three files can be uploaded',
          duration: 1000,
        })
      } else {
        this.file.push(file);
      }
      return false;
    },
    zipFileAsync(zip, file) {
      let that = this;
      const promise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function(e) {
          var result = reader.result;
          if (file.name.indexOf('.jpg' | '.png' | '.jpeg' | '.gif') !== -1) {
            result = convertBase64UrlToBlob(result);
          }
          // resolve 方法保证异步压缩完成后才返回promise
          resolve(
            zip.file(file.name, result, {
              type: 'blob',
            }));
        };
      })
      return promise;
    },
    convertBase64UrlToBlob(urlData) {
      var bytes = window.atob(urlData.split(',')[1]);
      //  处理异常,将ascii码小于0的转换为大于0
      var ab = new ArrayBuffer(bytes.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      return new Blob([ab], { type: 'image/jpg' });
    }

  },
  mounted() {}
}

</script>
