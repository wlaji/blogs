<template>
  <div class="back-to-top" @click="backToTop" v-show="showReturnToTop">
    <i :class="[bttOption.iClass]" :style="{color:bttOption.iColor,'font-size':bttOption.iFontsize}"></i>
  </div>
</template>
<style scoped>
.back-to-top {
  position: fixed;
  bottom: 5%;
  right: 5%;
  text-align: center;
  background-color: rgba(0, 0, 0, .6);
  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  transition: all .2s ease-in-out;
  border-radius: 2px;
  z-index: 9999;
  cursor: pointer;
}

.back-to-top:hover {
  background-color: rgba(0, 0, 0, .7);
}

.back-to-top i {
  color: #fff;
  font-size: 24px;
  padding: 8px 12px;
  display: inline-block;
  font-family: Ionicons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
}

</style>
<script>
import { scrollIt } from '../assets/scrollIt'; // 引入动画过渡的实现
export default {
  name: 'back-to-top',
  props: {
    iClass: {
      // 图标形状
      type: String,
      default: 'el-icon-arrow-up'
    },
    iColor: {
      // 图标颜色
      type: String,
      default: '#fff'
    },
    iFontsize: {
      // 图标大小
      type: String,
      default: '24px'
    },
    pageY: {
      // 默认在哪个视图显示返回按钮
      type: Number,
      default: 400
    },
    transitionName: {
      // 过渡动画名称
      type: String,
      default: 'linear'
    }
  },
  data: function() {
    return {
      showReturnToTop:false
    }
  },
  computed: {
    bttOption() {
      return {
        iClass: this.iClass,
        iColor: this.iColor,
        iFontsize: this.iFontsize
      }
    }
  },
  methods: {
    currentPageYOffset() {
      // 判断滚动区域大于多少的时候显示返回顶部的按钮
      window.pageYOffset > this.pageY ? this.showReturnToTop = true : this.showReturnToTop = false;
    },
    backToTop() {
      scrollIt(0, 500, this.transitionName, this.currentPageYOffset);
    }
  },
  created() {
    window.addEventListener('scroll', this.currentPageYOffset);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.currentPageYOffset)
  }
}

</script>
