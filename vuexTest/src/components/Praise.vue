<template>
  <div class="wrap">
    <span class="praise" @click="praise">
      <img :src="isPraise?'../../static/images/zaned.svg':'../../static/images/zan.svg'" alt="" :style="{width:size+'px',height:size+'px'}">
      <p class="num">
        <span :style="{fontSize:size/3+'px'}" class="number">{{num}}</span>
    <span style="fontSize:14px" :class="[tips?'hide':'show','tips']">+1</span>
    </p>
    </span>
  </div>
</template>
<style scoped>
.praise {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.hide {
  display: none;
}

.praise img {
  vertical-align: middle;
  margin-right: 5px;
  cursor: pointer;
}

.tips {
  position: absolute;
  right: 0;
  top: 0;
  color: red;
}

.show {
  animation: fade-in .8s;
  animation-fill-mode: forwards;
}

.num {
  position: relative;
  top:0.3em;
}

.number {}

@keyframes fade-in {
  0% {
    transform: translateY(0);
    opacity: 1
  }
  100% {
    transform: translateY(-30px);
    opacity: 0
  }
}

</style>
<script>
const api = require('../api/api.js')
export default {
  props: ['article_id', 'num', 'size'],
  data() {
    return {
      isPraise: false,
      tips: true,
      switch: true,
    }
  },
  methods: {
    praise() {
      if (this.switch) {
        this.switch = false;
        if (this.contained()) {
          this.switch = true;
          this.isPraise = true;
          this.$message({
            type: 'info',
            message: 'You have already praised me',
            center: true,
            duration: 1000
          });
          return false;
        }
        let data = {
          article_id: this.article_id
        }
        this.$post(this.$url.api.praise, data).then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.tips = false;
            this.isPraise = true;
            this.$emit('praised');
            this.switch = true;
            let article_id = this.article_id
            this.setLocalStorage(article_id)
          } else {
            this.switch = true;
            this.$message({
              type: 'warning',
              message: 'You have already praised me',
              center: true,
              duration: 1000
            });
          }
        })
      }
    },
    setLocalStorage(article_id) {
      var id = this.getLocalStorage();
      if (id == '') {
        var arrArticleId = article_id
      } else {
        var arrArticleId = id + ',' + article_id;
      }
      var storage = window.localStorage;
      storage.setItem('article_id', arrArticleId);
    },
    getLocalStorage() {
      var storage = window.localStorage;
      var ca = storage.getItem('article_id');
      if (ca) {
        return ca;
      } else {
        return '';
      }
    },
    contained() {
      let article_id = this.article_id;
      let id = this.getLocalStorage();
      let ca = id.split(',');
      for (let i = 0; i < ca.length; i++) {
        if (article_id == ca[i]) {
          return true
        }
      }
    },
  },
  mounted() {
    if (this.contained()) {
      this.isPraise = true;
    }
  }
}

</script>
