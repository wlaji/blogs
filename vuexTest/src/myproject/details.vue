<template>
  <div class="wrap">
    <Base-nav></Base-nav>
    <div class="mainContent" :style="{minHeight:minHeight+'px'}" v-loading="loading" element-loading-text="loading" element-loading-spinner="el-icon-loading" element-loading-background="rgba(255, 255, 255, 1)">
      <div class="imgShowWrap hide-mobel">
        <div id="smallImg" @mousemove="zoom" @mouseover="zoomShow" @mouseout="zoomOut">
          <img :src="data.p_image" alt="" :style="smImg">
          <p id="move" :style="moveStyle"></p>
        </div>
        <div id="big">
          <img :src="data.p_image" alt="" id="look_girl" :style="bigImg">
          <div class="intro">
            <div class="productName">
              <p>product name: <span>{{data.p_name}}</span> </p>
            </div>
            <div class="productRemark">
              <p>Product introduction: <span>{{data.p_remark}}</span> </p>
            </div>
            <el-button type="primary" @click="get(data.p_image)" style="opacity:1">Get the price similar like this product</el-button>
            <submitBtn :imgSrc="p_image" :popShow="popShow" @changPopShow="chPopShow"></submitBtn>
          </div>
        </div>
      </div>
      <div class="imgShowWrap">
        <div class="hide-pc">
          <div id="smallImg">
            <img :src="data.p_image" alt="" :style="smImg">
          </div>
          <div class="intro">
            <div class="productName">
              <p>product name: <span>{{data.p_name}}</span> </p>
            </div>
            <div class="productRemark">
              <p>Product introduction: <span>{{data.p_remark}}</span> </p>
            </div>
            <el-button type="primary" @click="get(data.p_image)" style="opacity:1">Get the price similar like this product</el-button>
            <submitBtn :imgSrc="p_image" :popShow="popShow" @changPopShow="chPopShow"></submitBtn>
          </div>
        </div>
      </div>
      <div class="divider">
      </div>
      <div class="describtion clearfix">
        <h3>Detailed introduction</h3>
        <p v-html="strs"></p>
      </div>
      <div class="divider">
      </div>
      <div class="mainContent-bottom">
        <h3>Related places <span style="float:right;cursor:pointer" @click="refurbish"><img :class="{imgAnimate:imgAnimate}" src="../../static/images/shua.png" alt="" @click="rotateImg"></span></h3>
        <ul>
          <li v-for="(item,index) in refurData" v-show="index<3" style="border:1px solid #ccc;">
            <img :src="item.p_image" :alt="item.alt" @click="proShow(item.p_id,item.p_name)">
            <p class="price">{{item.price}}</p>
            <p>{{item.p_name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <Base-footer></Base-footer>
  </div>
</template>
<style scoped>
@media screen and (max-width:768px) {
  .divider {
    width: 100%;
    height: 2px;
    background-color: #ccc;
    margin: 1em 0;
  }

  .mainContent {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
  #smallImg {
    width: 80%;
    height: 15em;
  }

  #smallImg img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  .productName p,
  .productRemark p {
    font-size: 1.3rem;
    margin: 0.5em 0;
    font-weight: 500;
  }

  .productName span,
  .productRemark span {
    font-size: 1.2rem;
  }

  .describtion h3 {
    font-size: 1.3rem;
    margin: 1em 0;
    font-weight: 600;
  }

  .describtion p {
    width: 100%;
  }

  .imgAnimate {
    animation: imgRotate 1s infinite ease-in-out;
  }

  @keyframes imgRotate {
    from {}
    to {
      transform: rotate(360deg);
    }
  }
  .mainContent-bottom h3 {
    margin-bottom: 1em;
    font-size: 1.2rem;
    font-weight: 400;
  }

  .mainContent-bottom h3 img {
    width: 1.5em;
    height: 1.5em;
  }

  .mainContent-bottom ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .mainContent-bottom ul li {
    margin: 0.5em 0;
    text-align: center;
    background-color: #E6E6E6;
    cursor: pointer;
  }
  .mainContent-bottom ul li p {
    margin: 1em 0;
  }

  .price {
    font-size: 1.2rem;
    color: #D1862DFF;
  }

  .mainContent-bottom ul li img {
    width: 100%;
    height: 20em;
  }
}

@media screen and (min-width:768px) {
  .divider {
    width: 100%;
    height: 2px;
    background-color: #ccc;
    margin: 2em 0;
  }

  .mainContent {
    width: 85.71em;
    margin: 1em auto;
  }

  .imgShowWrap {
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
  }

  #smallImg {
    margin-right: 4em;
    width: 30em;
    height: 30em;
    border: 1px solid #eee;
    position: relative;
  }

  #smallImg img {
    width: 30em;
    height: 30em;
    border-radius: 4px;
  }

  #big {
    float: left;
    width: 30em;
    height: 30em;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
  }

  #big>img {
    display: none;
  }

  #look_girl {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 2;
  }

  #move {
    width: 7.14em;
    height: 7.14em;
    background: red;
    opacity: .5;
    position: absolute;
    display: none;
    left: 0px;
    top: 0px;
  }

  .productName p,
  .productRemark p {
    font-size: 1.3rem;
    margin: 0.5em 0;
    font-weight: 500;
  }

  .productName span,
  .productRemark span {
    font-size: 1.2rem;
  }

  .describtion h3 {
    font-size: 1.3rem;
    margin: 1em 0;
    font-weight: 600;
  }

  .describtion p {
    width: 100%;
  }

  .imgAnimate {
    animation: imgRotate 1s infinite ease-in-out;
  }

  @keyframes imgRotate {
    from {}
    to {
      transform: rotate(360deg);
    }
  }
  .mainContent-bottom h3 {
    margin-bottom: 1em;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .mainContent-bottom h3 img {
    width: 1.5em;
    height: 1.5em;
  }

  .mainContent-bottom ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mainContent-bottom ul li {
    display: inline-block;
    text-align: center;
    background-color: #E6E6E6;
    cursor: pointer;
  }
  .mainContent-bottom ul li:hover img {
    opacity: 0.8
  }
  .mainContent-bottom ul li p {
    margin: 1em 0;
  }

  .price {
    font-size: 1.2rem;
    color: #D1862DFF;
  }

  .mainContent-bottom ul li img {
    width: 25em;
    height: 20em;
  }
}

</style>
<script>
import submitBtn from '../components/submitBtn.vue'
export default {
  components: {
    submitBtn
  },
  data() {
    return {
      p_image: '',
      popShow: false,
      minHeight: '',
      imgAnimate: false,
      smImg: {
        cursor: '',
      },
      bigImg: {
        left: '',
        top: '',
      },
      moveStyle: {
        left: '',
        top: ''
      },
      showList: false,
      data: '',
      id: '',
      strs: '',
      refurData: '',
      refData: '',
      arr: '',
      length: '',
      loading: true,
    }

  },
  methods: {
    get(imgSrc) {
      console.log(imgSrc)
      this.popShow = !this.popShow;
      this.p_image = imgSrc;
    },
    chPopShow() {
      this.popShow = !this.popShow;
      this.showBtn = false;
    },
    refurbish() {
      this.refArr();

    },
    refArr() {
      var that = this;
      this.$fetch(this.$url.api.allProduct).then(function(res) {
          that.refData = res.data.data;
          that.arr = [];
          that.length = res.data.data.length;
          that.a();

        })
        .catch(function(error) {
          console.log(error);
        })
    },
    a() {
      let data = this.refData;
      let arr = this.arr;
      let length = this.length;
      for (var i = 0; i < 3; i++) {
        var j = Math.round(Math.random() * (length - 1));
        arr.push(data[j]);
      }
      this.distincts(arr);

    },
    distincts(arr) {
      var len = arr.length,
        i, j;
      var result = [];
      for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
          if (arr[i] == arr[j]) {
            arr.splice(j, 1);
            len--;
            j--;
          }
        }
      }

      if (arr.length < 3) {
        this.a();
        this.imgAnimate = false;
      } else {
        this.refurData = arr;
        this.imgAnimate = false;
      }
    },
    apiData(id) {
      this.$fetch(this.$url.api.detail + id).then(res => {
        console.log(res);
        var data = res.data.data;
        this.data = data;
        let str = data.p_content;
        this.strs = str;
        this.loading = false;
      })
    },
    zoom(event) {
      var move = document.getElementById('move');
      var smallImg = document.getElementById('smallImg');
      var big = document.getElementById('big');
      var look_girl = document.getElementById('look_girl');
      event = event || window.event;
      this.smImg.cursor = "move";
      var move_left = event.clientX - smallImg.offsetLeft - move.offsetWidth / 2;
      // 计算move移动块的top值
      var move_top = event.clientY - smallImg.offsetTop - move.offsetHeight / 2;
      // 超出左边界赋值为0
      move_left = move_left < 0 ? 0 : move_left;
      // 超出右边界赋值为盒子宽度-移动块的宽度
      move_left = move_left > smallImg.offsetWidth - move.offsetWidth ? smallImg.offsetWidth - move.offsetWidth : move_left;
      // 超出上边界赋值为0
      move_top = move_top < 0 ? 0 : move_top;
      // 超出下边界赋值为盒子高度-移动块高度
      move_top = move_top > smallImg.offsetHeight - move.offsetHeight ? smallImg.offsetHeight - move.offsetHeight : move_top;
      // 修改移动块left、top值
      this.moveStyle.left = move_left + 'px';
      this.moveStyle.top = move_top + 'px';

      var big_x = move_left / (smallImg.offsetWidth - move.offsetWidth) * (look_girl.offsetWidth - big.offsetWidth);
      var big_y = move_top / (smallImg.offsetHeight - move.offsetHeight) * (look_girl.offsetHeight - big.offsetHeight);
      // 修改图片定位
      this.bigImg.left = -big_x + 'px';
      this.bigImg.top = -big_y + 'px';
    },
    zoomShow() {
      var move = document.getElementById('move');
      var look_girl = document.getElementById('look_girl');
      move.style.display = 'block';
      look_girl.style.display = 'block';

    },
    zoomOut() {
      var move = document.getElementById('move');
      var look_girl = document.getElementById('look_girl');
      move.style.display = 'none';
      look_girl.style.display = 'none';
    },
    showL() {
      this.showList = true;
    },
    hideL() {
      this.showList = false;
    },
    proShow(id, name) {
      this.apiData(id);
    },
    rotateImg() {
      this.imgAnimate = true;

    },
  },
  created() {
    let id = this.$route.params.name;
    this.id = id;
    this.apiData(id);
    this.refArr();
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 100;
    var that = this;
    window.onresize = function() {
      that.minHeight = document.documentElement.clientHeight - 100;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === 'products') {
    } else {
      sessionStorage.removeItem('goId');
      sessionStorage.removeItem('goName');
      sessionStorage.removeItem('goIndex');
    }
    next();

  },
}

</script>
