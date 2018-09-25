<template>
  <div class="wrap">
    <div>
      <el-upload style="height:0" class="avatar-uploader" :action="serverUrl" name="upfile" :show-file-list="false" :on-success="uploadSuccess" :on-error="uploadError" :before-upload="beforeUpload">
      </el-upload>
      <el-row v-loading="quillUpdateImg" style="z-index:1000">
        <quill-editor class="edit" v-model="detailContent" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)" @change="onEditorChange($event)">
        </quill-editor>
      </el-row>
    </div>
  </div>
</template>
<style scoped>
.edit {
  height:40em;
  background-color: #fff
}
</style>
<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }], // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
  [{ 'direction': 'rtl' }], // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['link', 'image', 'video'],
  ['clean'] // remove formatting button
]
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      quillUpdateImg: false, // 根据图片上传状态来确定是否显示loading动画，刚开始是false,不显示
      serverUrl: this.$url.api.serverUrl, // 这里写你要上传的图片服务器地址
      header: '', // 有的图片服务器要求请求头需要有token之类的参数，写在这里
      detailContent: '', // 富文本内容
      editorOption: {
        placeholder: '',
        theme: 'snow', // or 'bubble'
        modules: {
          toolbar: {
            container: toolbarOptions, // 工具栏
            handlers: {
              'image': function(value) {
                if (value) {
                  document.querySelector('.avatar-uploader input').click()
                } else {
                  this.quill.format('image', false);
                }
              }
            }
          }
        }
      } // 富文本编辑器配置
    }
  },
  methods: {
    beforeUpload() {
      this.quillUpdateImg = true
    },
    uploadSuccess(res, file) {
      console.log(res);
      console.log(file)
      // res为图片服务器返回的数据
      // 获取富文本组件实例
      let quill = this.$refs.myQuillEditor.quill
      if (res.state == 'SUCCESS') {
        let length = quill.getSelection().index;
        // 插入图片  res.info为服务器返回的图片地址
        quill.insertEmbed(length, 'image', res.url)
        // 调整光标到最后
        quill.setSelection(length + 1)
      } else {
        this.$message({
          type: 'error',
          message: 'uoload img failed'
        })
      }
      this.quillUpdateImg = false
    },

    uploadError() {
      this.quillUpdateImg = false
      this.$message({
        type: 'error',
        message: 'uoload img failed'
      })
    },
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    },
    onEditorChange({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      // this.content = html;

    }
  },
  mounted() {

  }
}

</script>
